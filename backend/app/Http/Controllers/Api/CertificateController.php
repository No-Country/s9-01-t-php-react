<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Certificate;
use App\Models\CertificateData;
use App\Models\Student;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CertificateController extends Controller
{
    public function index()
    {
        $certificates = Certificate::all();
        return response()->json([
            "result" => $certificates
        ], Response::HTTP_OK);
    }

    public function show($id)
    {
        $certificate = Certificate::findOrFail($id);
        return response()->success($certificate, 'certificate found!');
    }
    #$certificate = new Certificate();
    public function store(Request $request)
    {
        # registrar los datos de un curso
        $certificateData = CertificateData::create([
            'certificateConten' => $request->certificateConten,
            'career_type' => $request->career_type,
            'authority1' => $request->authority1,
            'authority2' => $request->authority2
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
                'id_cd' => $certificateData->_id
            ]);
        }

        return response()->success($Certificate, 'Data saved!');
    }

    public function update(Request $request, $id)
    {
        $certificate = Certificate::findOrFail($id);

        $certificate->certificateType = $request->certificateType;
        $certificate->id_user = $request->id_user;
        $certificate->id_template = $request->id_template;
        $certificate->authority1 = $request->authority1;
        $certificate->authority2 = $request->authority2;
        $certificate->career_type = $request->career_type;
        $certificate->certificateContent = $request->certificateContent;
        $certificate->urlLogo = $request->urlLogo;

        $certificate->save();

        return response()->success($certificate, 'Data updated!');
    }

    public function destroy($id)
    {
        Certificate::destroy($id);
        return response()->json(['message' => "Deleted"], Response::HTTP_OK);
    }
}
