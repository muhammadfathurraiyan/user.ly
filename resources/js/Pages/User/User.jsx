import { Button, buttonClass } from "@/Components/form-components/Button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Eye, PencilLine, Trash } from "lucide-react";
import { useState } from "react";

export default function User({ users, auth }) {
  const [id, setId] = useState();
  const [dialog, setDialog] = useState(false);
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title={`Data user`} />
      <Link href={route("user.tambah")} className={buttonClass.primary}>
        Tambah user
      </Link>
      <div className="relative overflow-x-auto rounded-t mt-4">
        <table className="w-full text-sm text-center ">
          <thead className="text-xs uppercase bg-neutral-950 text-neutral-100 ">
            <tr>
              <th className="p-3">No</th>
              <th className="p-3">Nama</th>
              <th className="p-3">Email</th>
              <th className="p-3">Jenis Kelamin</th>
              <th className="p-3">NIP</th>
              <th className="p-3">NIK</th>
              <th className="p-3">Alamat</th>
              <th className="p-3">Level</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user.id} className="border-b border-neutral-700">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{user.nama_lengkap}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.jenis_kelamin}</td>
                <td className="p-3">{user.nip}</td>
                <td className="p-3">{user.nik}</td>
                <td className="p-3">{user.alamat}</td>
                <td className="p-3">{user.level}</td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-3 h-full">
                    <Link
                      href={`/user/${user.id}`}
                      className="hover:text-sky-600 transition-all"
                    >
                      <Eye size={22} />
                    </Link>
                    <Link
                      href={`/user/${user.id}/edit`}
                      className="hover:text-green-600 transition-all"
                    >
                      <PencilLine size={22} />
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setId(user.id);
                        setDialog(true);
                      }}
                      className="hover:text-red-600 transition-all"
                    >
                      <Trash size={22} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className={`${
            dialog ? "visible opacity-100" : "invisible opacity-0"
          } transition-all fixed bg-neutral-950/90 flex items-center justify-center inset-0`}
        >
          <div className="p-5 bg-neutral-900 text-neutral-100 rounded-lg">
            <h1 className="font-bold text-3xl">Warning!</h1>
            <p className="text-lg">Apa anda yakin ingin menghapus data ini?</p>
            <div className="flex items-center justify-end gap-4 mt-4">
              <Button
                type="button"
                onClick={() => {
                  setDialog(false);
                  setId(0);
                }}
                variants="secondary"
              >
                Cancel
              </Button>
              <Link
                as="button"
                method="delete"
                href={`/user/delete/${id}`}
                onClick={() => {
                  setDialog(false);
                  setId(0);
                }}
                className={buttonClass.danger}
              >
                Hapus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
