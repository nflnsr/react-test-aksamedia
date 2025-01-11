import { Layout } from "@/components/layout";
import { InputType, Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

function LoginPage() {

  return (
    <Layout
      pageScroll
      className="grid h-[calc(100svh-var(--header-height-sm)-var(--footer-height))] min-h-[540px] place-items-center sm:h-[calc(100svh-var(--header-height-lg)-var(--footer-height))]"
    >
      <div className="mx-auto w-full max-w-[350px] py-5">
        <form className="flex w-full flex-col items-center gap-8 rounded-lg border-2 border-blue-400 bg-gradient-to-br from-blue-300 via-cyan-300 to-sky-300 pb-10 pt-10">
          <h1 className="pb-4 text-center text-3xl font-semibold">Login</h1>
          {input.map((item) => (
            <div className="flex flex-col gap-1">
              <Input key={item.inputFor} {...item} />
            </div>
          ))}
          <button
            className="w-64 rounded-lg bg-blue-400 py-2 text-lg font-semibold text-white disabled:opacity-75"
            // disabled={isPending}
          >
            Login
          </button>
          <p className="mt-8">
            don't have account?{" "}
            <span className="text-sky-800 underline">
              <Link to="/register">Register here</Link>
            </span>
          </p>
        </form>
      </div>
    </Layout>
  );
}

const input: InputType[] = [
    {
      inputFor: "email",
      type: "email",
      placeholder: "jhondoe@gmail.com",
      required: true,
    },
    {
      inputFor: "password",
      type: "password",
      placeholder: "password",
      required: true,
    },
  ];

export default LoginPage;
