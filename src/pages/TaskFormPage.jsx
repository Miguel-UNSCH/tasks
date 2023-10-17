import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";

export function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTasks();
  const onSubmit = handleSubmit((data) => {
    createTask(data)
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
            Create new task
          </h1>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex flex-col gap-1.5"></div>
          <form onSubmit={onSubmit} className="flex flex-col gap-3 p-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6"
              >
                Task Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  {...register("title")}
                  className="block w-full rounded-md py-1.5 px-2 border-0 text-slate-50 bg-slate-700 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 "
                  placeholder="name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  name="description"
                  {...register("description")}
                  className="block w-full h-32 rounded-md py-1.5 px-2 border-0 text-slate-50 bg-slate-700 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  placeholder="description"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6"
              >
                Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="date"
                  className="block w-full rounded-md py-1.5 px-2 border-0 text-slate-50 bg-slate-700 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
