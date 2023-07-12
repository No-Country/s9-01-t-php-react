<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Certificate;
use App\Models\CertificateData;
use App\Models\Student;
use MongoDB\Driver\Exception\Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use MongoDB\BSON\ObjectID;
use Illuminate\Support\Facades\Mail;
use App\Mail\CertificateEmail;


class CertificateController extends Controller
{
    public function index()
    {
        $encryptedId = Auth::user()->getAuthIdentifier();
        $certificates = CertificateData::Where('id_user',$encryptedId)
        ->get();
        return response()->json([
            "result" => $certificates
        ], Response::HTTP_OK);
    }

    public function show($parameter)
    {
        
        try { 
            if(preg_match('/^[0-9a-fA-F]{24}$/', $parameter) === 1)
            {              
                $isObjectId = new ObjectID($parameter);
                $certificate = Certificate::orWhere('id_cd', $isObjectId)
                ->orWhere('public_key',$isObjectId)
                ->with('student', 'certificateData','template','logo')
                ->get();
                if($certificate->isNotEmpty()){
                    return response()->success($certificate, 'Data finded');
                } 
                return response()->error('not found');
            } 
         } catch (Exception $th) {
            return response()->error($th->getMessage());
        } 
        return response()->error('Error, the format of the request is not expected.');
    }
    #$certificate = new Certificate();
    public function store(Request $request)
    {
        $encryptedId = Auth::user()->getAuthIdentifier();
        # registrar los datos de un curso
        $certificateData = CertificateData::create([
            'certificateContent' => $request->certificateContent,
            'career_type' => $request->career_type,
            'authority1' => $request->authority1,
            'authority2' => $request->authority2,
            'id_user' => $encryptedId
        ]);

        $studentsData = $request->input('students');
        foreach ($studentsData as $studentData) {
            # registrar el array de objetos de estudiantes
            $student = Student::create($studentData);
            # registrar los certificados por estudiantes
            $Certificate = Certificate::create([
                'id_template' => $request->id_template,
                'id_logo' => $request->id_logo,
                'id_student' => $student->_id,
                'id_cd' => new ObjectID($certificateData->_id),
                'public_key' => new ObjectID()
            ]);
            # se envian los correos

            Mail::to($student->email)->send(new CertificateEmail($Certificate->public_key));
        }

        return response()->success($Certificate, 'Data saved!');
    }

    public function update(Request $request, $id)
    {
        $certificate = Certificate::findOrFail($id);

        $certificate->id_template = $request->id_template;
        $certificate->id_logo = $request->id_logo;
        $certificate->id_student = $request->id_student;
        $certificate->id_cd = $request->id_cd;

        $certificate->save();

        return response()->success($certificate, 'Data updated!');
    }

    public function destroy($id)
    {
        Certificate::destroy($id);
        return response()->json(['message' => "Deleted"], Response::HTTP_OK);
    }

    public function sendlink($id)
    {
        echo "SI";
    }

}
