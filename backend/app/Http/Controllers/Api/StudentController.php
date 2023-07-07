<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use Symfony\Component\HttpFoundation\Response;

class StudentController extends Controller
{
    public function index(){
        try {
            $students = Student::all();
            return response()->json([
                "result" => $students
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'],500);
        }
    }

    public function show($id){
        try {
            $students = Student::findOrFail($id);
            return response()->json([
                "result" => $students
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'],500);
        }
    }

    public function store(Request $request){
        try {
            // Validar los datos de entrada
            $validator = Validator::make($request->all(), [
                'DNI' => 'required|numeric|unique:students,DNI',
                'name' => 'required',
                'lastname' => 'required',
                'email' => 'required|email|unique:students,email',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
            }

            $student = new Student();

            $student->DNI = $request->DNI;
            $student->name = $request->name;
            $student->lastname = $request->lastname;
            $student->email = $request->email;

            $student->save();

            return response()->json(['result' => $student], Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'],500);
        }
    }

    public function update(Request $request, $id){
        try {
            $student = Student::findOrFail($id);

            // Validar los datos de entrada
            $validator = Validator::make($request->all(), [
                'DNI' => ['required','numeric',Rule::unique('students')->ignore($id,'_id')],
                'name' => 'required',
                'lastname' => 'required',
                'email' => ['required','email',Rule::unique('students')->ignore($id,'_id')],
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
            }

            $student->DNI = $request->DNI;
            $student->name = $request->name;
            $student->lastname = $request->lastname;
            $student->email = $request->email;

            $student->save();

            return response()->json(['result' => $student], Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'],500);
        }
    }

    public function destroy($id){
        try {
            Student::destroy($id);
            return response()->json(['message' => "Deleted"], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'],500);
        }
    }
}
