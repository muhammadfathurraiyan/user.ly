<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $level = Auth::user()->level;
        if($level === 'admin'){
            return Inertia::render('User/User', [
                'users' => User::latest()->get(),
            ]);
        } else {
            return abort(403);
        }
    }

    public function tambah()
    {
        $level = Auth::user()->level;
        if($level === 'admin'){
            return Inertia::render('User/Tambah');
        } else {
            return abort(403);
        }
    }

    public function create(Request $request)
    {
        $request->validate([
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'nama_lengkap' => 'required|string|max:255',
            'gelar_depan' => 'required|string|max:255',
            'gelar_belakang' => 'required|string|max:255',
            'nip' => 'nullable|digits:18',
            'nik' => 'required|digits:16',
            'jenis_kelamin' => 'required|in:laki-laki,perempuan',
            'alamat' => 'nullable|string|max:255',
            'email' => 'required|email|unique:users,email|max:255',
            'password' => 'required|string|min:8',
            'level' => 'required|in:admin,user',
        ]);

        $photo = "";

        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('img'), $filename);
            $photo = '/img/' . $filename;
        }

       User::create([
            'nama_lengkap' => $request->nama_lengkap,
            'gelar_depan' => $request->gelar_depan,
            'gelar_belakang' => $request->gelar_belakang,
            'nip' => $request->nip,
            'nik' => $request->nik,
            'jenis_kelamin' => $request->jenis_kelamin,
            'alamat' => $request->alamat,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'level' => $request->level,
            'photo' => $photo,
        ]);
        

        return redirect(route('user'));
    }

    public function edit($id)
    {
        $level = Auth::user()->level;
        if($level === 'admin'){
            return Inertia::render('User/Edit', [
                'user' => User::where('id', $id)->first(),
            ]);
        } else {
            return abort(403);
        }
    }

    public function update(Request $request)
    {
        $user = User::findOrFail($request->id);
        $check = $user;

        $request->validate([
            'nama_lengkap' => 'required|string|max:255',
            'gelar_depan' => 'required|string|max:255',
            'gelar_belakang' => 'required|string|max:255',
            'nip' => 'nullable|digits:18',
            'nik' => 'required|digits:16',
            'jenis_kelamin' => 'required|in:laki-laki,perempuan',
            'alamat' => 'nullable|string|max:255',
            'level' => 'required|in:admin,user',
        ]);

        if($request->hasFile('photo')) {
            $request->validate([
                'photo' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);
        }

        if($request->email && $request->email !== $check->email) {
            $request->validate([
                'email' => 'required|email|unique:users,email|max:255',
            ]);
        }

        $photo = $user->photo;
        
        if ($request->hasFile('photo')) {
            if ($photo && file_exists(public_path($photo))) {
                unlink(public_path($photo));
            }
            $file = $request->file('photo');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('img'), $filename);
            $photo = '/img/' . $filename;
        }

        $user->update([
            'nama_lengkap' => $request->nama_lengkap,
            'gelar_depan' => $request->gelar_depan,
            'gelar_belakang' => $request->gelar_belakang,
            'nip' => $request->nip,
            'nik' => $request->nik,
            'jenis_kelamin' => $request->jenis_kelamin,
            'alamat' => $request->alamat,
            'email' => $request->email,
            'password' => !empty($request->password) ? Hash::make($request->password) : $user->password,
            'level' => $request->level,
            'photo' => $photo,
        ]);

        return redirect(route('user'));
    }

    public function destroy($id)
    {
        $level = Auth::user()->level;
        if($level === 'admin'){
            $user = User::where('id', $id)->first();
            if (file_exists(public_path($user->photo))) {
                unlink(public_path($user->photo));
            }
            $user->delete();
            return redirect(route('user'));
        } else {
            return abort(403);
        }
    }

    public function detail($id)
    {
        $level = Auth::user()->level;
        if($level === 'admin'){
            return Inertia::render('User/Detail', [
                'user' => User::where('id', $id)->first(),
            ]);
        } else {
            return abort(403);
        }
    }
}
