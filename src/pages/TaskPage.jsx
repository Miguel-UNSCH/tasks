import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import { FaPlus } from "react-icons/fa6";

export function TaskPage() {
  const { tasks, deleteTask, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  if (tasks.length === 0)
    return (
      <div className="text-center pt-4">
        <h1 className="font-semibold text-xl text-[#D7747E]">No tasks</h1>
      </div>
    );

  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-row flex-wrap gap-4">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="flex-1 p-3 min-w-fit max-w-sm rounded-md border-zinc-800 border-2 font-bold flex flex-col gap-2 justify-between"
          >
            <h1 className="text-xl capitalize text-center mt-2 mb-4 text-indigo-600">
              {task.title}
            </h1>
            <p className="mb-2 text-slate-400 font-semibold text-md">
              {task.description}
            </p>
            <div className="flex flex-row flex-wrap gap-2">
              <div className="h-0.5 w-full bg-zinc-800"></div>
              <button className="bg-indigo-600 pt-1 pb-1 pl-2 pr-2 text-white flex-1 rounded-lg text-sm font-medium">
                EDIT
              </button>
              <button
                onClick={() => {
                  deleteTask(task._id);
                }}
                className="bg-red-500 pt-1 pb-1 pl-2 pr-2 text-white flex-1 rounded-lg text-sm font-medium"
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
        <div className="flex-1 p-3 min-w-fit max-w-0 font-bold flex justify-center items-center">
          <div className="w-10 h-10 bg-indigo-600 rounded-full grid place-items-center cursor-pointer hover:bg-indigo-500">
                <FaPlus/>
          </div>
        </div>
      </div>
    </div>
  );
}
