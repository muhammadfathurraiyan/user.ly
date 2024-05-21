import { buttonClass } from "@/Components/form-components/Button";
import { Link } from "@inertiajs/react";

export default function AuthenticatedLayout({ user, children }) {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100">
      <header className="bg-neutral-950 px-4 lg:px-24 py-4 flex items-center justify-between">
        <Link href={route("dashboard")}>
          <h1 className="font-bold text-3xl">user.ly</h1>
        </Link>
        <div className="text-base lg:space-x-8 space-x-4">
          <Link
            href={route("profile.edit")}
            className="hover:text-green-600 transition-colors"
          >
            Profil saya
          </Link>
          {user.level === "admin" && (
            <Link
              href={route("user")}
              className="hover:text-green-600 transition-colors"
            >
              Tambah user
            </Link>
          )}
          <Link
            href={route("logout")}
            method="post"
            as="button"
            className={buttonClass.primary}
          >
            Logout
          </Link>
        </div>
      </header>
      <main className="px-4 lg:px-24 py-12">{children}</main>
    </div>
  );
}
