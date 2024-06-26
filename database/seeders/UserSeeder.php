<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'nama_lengkap' => 'admin',
            'email' => 'admin@test-jaya.id',
            'gelar_depan' => 'Ir.',
            'gelar_belakang' => 'S.T',
            'nip'=> 112233445566778899,
            'nik'=> 1122334455667788,
            'jenis_kelamin'=> 'laki-laki',
            'alamat'=> 'ajuen',
            'photo'=> '/img/foto.jpg',
            'level' => 'admin',
            'password' => Hash::make('admin@test-jaya.id'),
        ]);
        DB::table('users')->insert([
            'nama_lengkap' => 'user',
            'email' => 'user@test-jaya.id',
            'gelar_depan' => 'q.',
            'gelar_belakang' => 'we',
            'nip'=> 112233445566778899,
            'nik'=> 1122334455667788,
            'jenis_kelamin'=> 'laki-laki',
            'alamat'=> 'lhoknga',
            'photo'=> '/img/foto.jpg',
            'level' => 'user',
            'password' => Hash::make('user@test-jaya.id'),
        ]);
        DB::table('users')->insert([
            'nama_lengkap' => 'sabirin',
            'email' => 'sabirin@test-jaya.id',
            'gelar_depan' => 'h.',
            'gelar_belakang' => 'jk',
            'nip'=> 112233445566778899,
            'nik'=> 1122334455667788,
            'jenis_kelamin'=> 'laki-laki',
            'alamat'=> 'lamno',
            'photo'=> '/img/foto.jpg',
            'level' => 'user',
            'password' => Hash::make('sabirin@test-jaya.id'),
        ]);
    }
}
