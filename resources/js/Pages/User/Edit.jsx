import { Button } from "@/Components/form-components/Button";
import Input, { InputError } from "@/Components/form-components/Input";
import InputLabel from "@/Components/form-components/InputLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function User({ user, auth }) {
  const { data, setData, put, processing, errors, reset } = useForm({
    nama_lengkap: user.nama_lengkap,
    gelar_depan: user.gelar_depan,
    gelar_belakang: user.gelar_belakang,
    nip: user.nip,
    nik: user.nik,
    alamat: user.alamat,
    photo: null,
    jenis_kelamin: user.jenis_kelamin,
    level: user.level,
    email: user.email,
    password: "",
    id: user.id,
  });

  const [preview, setPreview] = useState(user.photo);

  function handlePhotoChange(e) {
    const file = e.target.files[0];
    setData("photo", file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(user.photo);
    }
  }

  function submit(e) {
    e.preventDefault();
    put(route("user.update"));
  }

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title={`Edit User`} />
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Form Edit User</h1>
        <p className="leading-none text-neutral-300">
          Silahkan lengkapi form dibawah untuk mengupdate user.
        </p>
      </div>
      <form onSubmit={submit} encType="multipart/form-data">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="flex flex-col">
              <InputLabel htmlFor="nama_lengkap" value="Nama lengkap" />
              <Input
                id="nama_lengkap"
                type="text"
                name="nama_lengkap"
                value={data.nama_lengkap}
                onChange={(e) => setData("nama_lengkap", e.target.value)}
              />
              <InputError message={errors.nama_lengkap} />
            </div>
            <div className="flex flex-col">
              <InputLabel htmlFor="gelar_depan" value="Gelar depan" />
              <Input
                id="gelar_depan"
                type="text"
                name="gelar_depan"
                value={data.gelar_depan}
                onChange={(e) => setData("gelar_depan", e.target.value)}
              />
              <InputError message={errors.gelar_depan} />
            </div>
            <div className="flex flex-col">
              <InputLabel htmlFor="gelar_belakang" value="Gelar belakang" />
              <Input
                id="gelar_belakang"
                type="text"
                name="gelar_belakang"
                value={data.gelar_belakang}
                onChange={(e) => setData("gelar_belakang", e.target.value)}
              />
              <InputError message={errors.gelar_belakang} />
            </div>
            <div className="flex flex-col">
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="h-28 w-28 object-cover rounded-full mb-1"
                />
              )}
              <InputLabel htmlFor="photo" value="Photo" />
              <Input
                id="photo"
                type="file"
                accept="image/*"
                name="photo"
                className="p-[6px]"
                onChange={handlePhotoChange}
              />
              <InputError message={errors.photo} />
            </div>
            <div className="flex flex-col h-[60px]">
              <InputLabel htmlFor="jenis_kelamin" value="Pilih Jenis Kelamin" />
              <div className="flex items-center gap-8 mt-2">
                <div className="flex items-center gap-2">
                  <InputLabel htmlFor="laki-laki" value="Laki-laki" />
                  <input
                    type="radio"
                    id="laki-laki"
                    name="jenis_kelamin"
                    className="bg-neutral-950 focus:ring-green-600"
                    value="laki-laki"
                    checked={data.jenis_kelamin === "laki-laki"}
                    onChange={(e) => setData("jenis_kelamin", e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <InputLabel htmlFor="perempuan" value="Perempuan" />
                  <input
                    type="radio"
                    id="perempuan"
                    name="jenis_kelamin"
                    className="bg-neutral-950 focus:ring-green-600"
                    value="perempuan"
                    checked={data.jenis_kelamin === "perempuan"}
                    onChange={(e) => setData("jenis_kelamin", e.target.value)}
                  />
                </div>
              </div>
              <InputError message={errors.jenis_kelamin} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex flex-col">
              <InputLabel htmlFor="nik" value="NIK" />
              <Input
                id="nik"
                type="text"
                name="nik"
                value={data.nik}
                onChange={(e) => setData("nik", e.target.value)}
              />
              <InputError message={errors.nik} />
            </div>
            <div className="flex flex-col">
              <InputLabel htmlFor="nip" value="NIP" />
              <Input
                id="nip"
                type="text"
                name="nip"
                value={data.nip}
                onChange={(e) => setData("nip", e.target.value)}
              />
              <InputError message={errors.nip} />
            </div>
            <div className="flex flex-col">
              <InputLabel htmlFor="email" value="Email" />
              <Input
                id="email"
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
              />
              <InputError message={errors.email} />
            </div>
            <div className="flex flex-col">
              <InputLabel htmlFor="password" value="Password" />
              <Input
                id="password"
                type="password"
                name="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
              />
              <InputError message={errors.password} />
            </div>
            <div className="flex flex-col">
              <InputLabel htmlFor="level" value="Level" />
              <select
                value={data.level}
                onChange={(e) => setData("level", e.target.value)}
                name="level"
                id="level"
                className="bg-neutral-950 border-none focus:border-green-600 focus:ring-green-600 rounded-md shadow-sm"
              >
                <option value="admin">admin</option>
                <option value="user">user</option>
              </select>
              <InputError message={errors.level} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex flex-col">
              <InputLabel htmlFor="alamat" value="Alamat" />
              <textarea
                id="alamat"
                rows={10}
                className="bg-neutral-950 border-none focus:border-green-600 focus:ring-green-600 rounded-md shadow-sm "
                name="alamat"
                value={data.alamat}
                onChange={(e) => setData("alamat", e.target.value)}
              />
              <InputError message={errors.alamat} />
            </div>
          </div>
        </div>
        <Button className="float-right" type="submit" processing={processing}>
          Submit
        </Button>
      </form>
    </AuthenticatedLayout>
  );
}
