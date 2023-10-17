import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
            Register account
          </h1>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex flex-col gap-1.5">
            {registerErrors.map((error, i) => (
              <div
                key={i}
                className="bg-red-500 mx-4 py-1 px-2 text-center rounded-md text-sm"
              >
                {error}
              </div>
            ))}
          </div>
          <form onSubmit={onSubmit} className="flex flex-col gap-3 p-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: true,
                  })}
                  className="block w-full rounded-md py-1.5 px-2 border-0 text-slate-50 bg-slate-700 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  placeholder="email"
                />
              </div>
            </div>
            {errors.email && (
              <p className="text-end text-red-500 text-sm">Email is required</p>
            )}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  type="username"
                  name="username"
                  {...register("username", {
                    required: true,
                  })}
                  className="block w-full rounded-md py-1.5 px-2 border-0 text-slate-50 bg-slate-700 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  placeholder="username"
                />
              </div>
            </div>
            {errors.username && (
              <p className="text-end text-red-500 text-sm ">
                Username is required
              </p>
            )}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6"
              >
                password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                  })}
                  className="block w-full rounded-md py-1.5 px-2 border-0 text-slate-50 bg-slate-700 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  placeholder="password"
                />
              </div>
            </div>
            {errors.password && (
              <p className="text-end text-red-500 text-sm ">
                Password is required
              </p>
            )}
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Have a account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Login your account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
