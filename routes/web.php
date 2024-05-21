<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {



    Route::get('/user', [UserController::class, 'index'])->name('user');
    Route::get('/user/tambah', [UserController::class, 'tambah'])->name('user.tambah');
    Route::post('/user', [UserController::class, 'create'])->name('user.create');
    Route::get('/user/{id}', [UserController::class, 'detail'])->name('user.detail');
    Route::get('/user/{id}/edit', [UserController::class, 'edit'])->name('user.edit');
    Route::delete('/user/delete/{id}', [UserController::class, 'destroy']);
    Route::put('/user', [UserController::class, 'update'])->name('user.update');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
