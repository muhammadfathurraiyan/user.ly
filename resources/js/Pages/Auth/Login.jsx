import { Head, Link, useForm } from "@inertiajs/react";
import Input, { InputError } from "@/Components/form-components/Input";
import { Button } from "@/Components/form-components/Button";
import InputLabel from "@/Components/form-components/InputLabel";

export default function Login({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };

  return (
    <main className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4 text-neutral-100">
      <Head title="Log in" />
      <form
        onSubmit={submit}
        className="p-6 rounded-lg bg-neutral-900 w-[400px] shadow-lg space-y-4"
      >
        <div>
          <h2 className="text-2xl font-semibold">Login Form</h2>
          <p className="text-sm leading-none text-neutral-300">
            Silahkan masukan email dan password anda untuk login.
          </p>
        </div>
        {status && (
          <div className="mb-4 font-medium text-sm text-green-600">
            {status}
          </div>
        )}
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
          <InputError message={errors.password} className="" />
        </div>
        <div className="flex items-center justify-end mt-4">
          <Button variants={"primary"} disabled={processing}>
            Masuk
          </Button>
        </div>
      </form>
    </main>
  );
}
