# Test Framework

Ini merupakan repository project hasil test online saya.

## TL;DR

Project ini tidak saya buat menggunakan framework Codeigniter 4 melainkan dengan menggunakan framework Laravel 11 + Inertia.js (Laravel & React). Mengapa? Saya sebelumnya belum pernah menggunakan framework Codeigniter 4, bagi saya dalam waktu 2 hari untuk menyelesaikan project menggunakan framework Codeigniter yang baru bagi saya, saya rasa kurang cukup. Karena dalam 2 hari harus ada hasil yang saya selesaikan, saya mengunaakan alternatif lain yaitu menggunakan framework Laravel untuk mengerjakan soal test. Apabila diterima maka bisa lanjut ke bagian instalasi, jika tidak diterima setidaknya ada hasil yang saya kirimkan :) terimakasih...

## Instalasi

Install dan jalankan project dengan 11 langkah berikut

1. ke direktori lalu lakukan composer update
```bash
  composer update
```
2. lakukan instalasi node package
```bash
  npm install
```
3. buat file .env
```bash
  cp .env.example .env
```
4. generate key untuk file .env
```bash
  php artisan key:generate
```
5. ubah database di .env
```bash
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=test-jaya
  DB_USERNAME=root
  DB_PASSWORD=
```
6. lakukan migrasi (database pastikan database telah aktif)
```bash
  php artisan migrate
```
7. lakukan seeding database
```bash
  php artisan db:seed
```
8. jalankan program
```bash
  php artisan serve
```
9. buka terminal baru dan jalankan
```bash
  npm run dev
```
10. buka browser pergi ke link berikut
```bash
  http://127.0.0.1:8000
```
11. login menggunakan akun hasil seeding database
```bash
  email: admin@test-jaya.id
  password: admin@test-jaya.id
```
    
## Tech Stack

**Client:** React, TailwindCSS
**Server:** Laravel

