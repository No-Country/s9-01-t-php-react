<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CertificateController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\TemplateController;
use App\Http\Controllers\Api\LogoController;
use App\Http\Controllers\Api\StudentController;
use App\Http\Controllers\Api\GoogleAuthController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function () {

    // Rutas de login con google
    Route::get('/auth/google', [GoogleAuthController::class, 'redirectToGoogle']);
    Route::get('/auth/google/callback', [GoogleAuthController::class, 'handleGoogleCallback']);

    // Rutas de login y logout
    Route::post('auth/login', [AuthController::class, 'login'])->name('login');
    Route::post('auth/logout', [AuthController::class, 'logout'])->name('logout')->middleware('jwt.auth');
    
    // Ruta de registro de usuarios sin protección del middleware
    Route::post('users', [UserController::class, 'store'])->name('users.store');
    
    // Rutas protegidas por el middleware jwt.auth
    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::get('certificates/sendlink/{id}',[CertificateController::class,'sendlink']);
        // Rutas para usuarios
        Route::resource('users', UserController::class)->except(['create', 'edit', 'store']);
        // Rutas para certificados
        Route::resource('certificates', CertificateController::class)->except(['create', 'edit']);
        // Rutas para plantillas
        Route::resource('templates', TemplateController::class)->except(['edit','create','destroy']);
        // Rutas para logos        
        Route::resource('logos', LogoController::class)->except(['edit','create','destroy']);
        // Rutas para estudiantes        
        Route::resource('students', StudentController::class)->except(['create','edit']);
        // Ruta para enviar token para restaurar la contraseña
        Route::post('sendPasswordResetLink', 'App\Http\Controllers\Api\PasswordResetRequestController@sendEmail');
        //Guardar nueva contraseña
        Route::post('resetPassword', 'App\Http\Controllers\Api\ChangePasswordController@passwordResetProcess');
    });
});
