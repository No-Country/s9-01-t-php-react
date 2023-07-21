<?php

namespace App\Http\Controllers\Api;

use MongoDB\Driver\Exception\Exception;
use App\Http\Controllers\Controller;
use App\Models\Certificate;
use App\Models\CertificateData;
use App\Models\Student;
use App\Models\Authority;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use MongoDB\BSON\ObjectID;
use Illuminate\Support\Facades\Mail;
use App\Mail\CertificateEmail;
use App\Jobs\SendCertificateEmail;
use App\Mail\QueueEmail;
use Illuminate\Support\Facades\Bus;

class CertificateController extends Controller
{
    public function index()
    {
        $encryptedId = Auth::user()->getAuthIdentifier();
        $certificates = CertificateData::Where('id_user',$encryptedId)
        ->get();

        return response()->success($certificates, 'certificates found!');
    }

    public function show($parameter)
    {
        try {
            if (preg_match('/^[0-9a-fA-F]{24}$/', $parameter) === 1) {
                $isObjectId = new ObjectID($parameter);
    
                $certificate = Certificate::where('public_key', $isObjectId)
                    ->with('student', 'template', 'logo', 'certificateData.authorities') // Cargar también la relación 'authorities' en 'certificateData'
                    ->first();
    
                if ($certificate) {
                    $certificateData = $certificate->certificateData;
    
                    return response()->success($certificateData, 'Data found');
                }
    
                return response()->error('Not found', 404);
            }
        } catch (\Throwable $th) {
            return response()->error($th->getMessage());
        }
    
        return response()->error('Error, the format of the request is not expected.');
    }
    

    public function store(Request $request)
    {
        try {
            $encryptedId = Auth::user()->getAuthIdentifier();
            $authorityId = $request->authorities; // Corregir el nombre del atributo a "authorities" en lugar de "authority"
    
            // Creamos el certificado sin las relaciones primero
            $certificateData = CertificateData::create([
                'certificateContent' => $request->certificateContent,
                'career_type' => $request->career_type,
                'id_user' => $encryptedId,
                'authorities' => $authorityId,
            ]);
    
            $studentsData = $request->input('students');
            foreach ($studentsData as $studentData) {
                $student = Student::create($studentData);
                $certificate = Certificate::create([
                    'id_template' => $request->id_template,
                    'id_logo' => $request->id_logo,
                    'id_student' => $student->_id,
                    'id_cd' => new ObjectID($certificateData->_id),
                    'public_key' => new ObjectID()
                ]);
            }
            // Devolvemos la respuesta con el objeto completo de CertificateData, incluyendo las autoridades asociadas
            return response()->success($certificateData, 'Data saved!');
        } catch (\Throwable $th) {
            return response()->error($th->getMessage());
        }
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

    //Controladores para el envío de correos 
    public function esquema($parameter)
    {
        
        try { 
            if(preg_match('/^[0-9a-fA-F]{24}$/', $parameter) === 1)
            {              
                $isObjectId = new ObjectID($parameter);
                $certificate = Certificate::Where('id_cd', $isObjectId)
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

    public function send($public_key)
    {
        try{
         $certificate = Certificate::where('public_key', new ObjectID($public_key))->firstOrFail();
         $student = Student::findOrFail($certificate->id_student);
         dispatch(new SendCertificateEmail(
            $certificate->public_key,
            $student->email
        )); 
         return response()->success('', 'Certificate sended');
        }catch (\Throwable $th){
            var_dump($th);
            return response()->error($th->getMessage());
        }
    }

    public function sendAll($id_cd)
    {
        try{
         $certificates = Certificate::where('id_cd', new ObjectID($id_cd))->get();

         foreach ($certificates as $certificate) {
            dispatch(new SendCertificateEmail(
                $certificate->public_key,
                $certificate->student->email
            ))->delay(20); 
         }
          
         return response()->success('', 'Certificate sended');
        }catch (\Throwable $th){
            var_dump($th);
            return response()->error($th->getMessage());
        }
    }
}
