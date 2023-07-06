<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Validar los datos de entrada
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }

        $credentials = $request->only('email', 'password');

        try {
            if (!Auth::attempt($credentials)) {
                return response()->json(['error' => 'Invalid credentials'], Response::HTTP_UNAUTHORIZED);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Error creating token'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        $user = Auth::user();
        $user->makeHidden('password'); 
        $token = JWTAuth::fromUser($user);

        return response()->json(['user' => $user, 'token' => $token], Response::HTTP_OK);
    }

    public function logout(Request $request)
    {
        try {
            // Revocar el token de acceso del usuario actual
            JWTAuth::invalidate(JWTAuth::getToken());

            return response()->json(['message' => 'Logout successful'], Response::HTTP_OK);
        } catch (JWTException $e) {
            return response()->json(['error' => 'Failed to sign out'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
