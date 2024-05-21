import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Dashboard" />
      <div className="flex items-center justify-center min-h-[70vh]">
        <h1 className="text-2xl">
          hallo {auth.user.nama_lengkap} selamat datang di user.ly
        </h1>
      </div>
    </AuthenticatedLayout>
  );
}
