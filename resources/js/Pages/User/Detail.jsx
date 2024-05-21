import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Profile({ user, auth }) {
  console.log(auth);
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title={`Detail profil ${user.nama_lengkap}`} />
      <div className="flex gap-8 items-center">
        <img
          src={user.photo}
          alt="foto"
          className="size-28 object-cover rounded-full"
        />
        <div>
          <h1 className="text-5xl font-bold">{user.nama_lengkap}</h1>
          <h2 className="text-3xl italic">
            {user.gelar_depan +
              " " +
              user.nama_lengkap +
              " " +
              user.gelar_belakang}
          </h2>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="font-bold text-2xl">Detail Profil:</h2>
        <table>
          <tbody className="text-lg">
            <tr>
              <td className="pr-5">Nama Lengkap</td>
              <td>:</td>
              <td className="pl-2">{user.nama_lengkap}</td>
            </tr>
            <tr>
              <td>Gelar Depan</td>
              <td>:</td>
              <td className="pl-2">{user.gelar_depan}</td>
            </tr>
            <tr>
              <td>Gelar Belakang</td>
              <td>:</td>
              <td className="pl-2">{user.gelar_belakang}</td>
            </tr>
            <tr>
              <td>NIP</td>
              <td>:</td>
              <td className="pl-2">{user.nip}</td>
            </tr>
            <tr>
              <td>NIK</td>
              <td>:</td>
              <td className="pl-2">{user.nik}</td>
            </tr>
            <tr>
              <td>Jenis Kelamin</td>
              <td>:</td>
              <td className="pl-2">{user.jenis_kelamin}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>:</td>
              <td className="pl-2">{user.email}</td>
            </tr>
            <tr>
              <td>Alamat</td>
              <td>:</td>
              <td className="pl-2">{user.alamat}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AuthenticatedLayout>
  );
}
