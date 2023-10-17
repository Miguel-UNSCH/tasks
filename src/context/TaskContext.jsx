import { createContext, useState, useContext } from "react";
import {
  createTaskRequest,
  getTasksRequest,
  getTaskRequest,
	updateTaskRequest,
	deleteTaskRequest
} from "../api/task";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within a TaskContext");
  }

  return context;
};

export function TaskProvider ({ children }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const res = await getTasksRequest()
      setTasks(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  const createTask = async (task) => {
		console.log(task);
    const res = await createTaskRequest(task);
		console.log(res);
  };

  const deleteTask = async (id) => {
    const res = await deleteTaskRequest(id)
    console.log(res);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        loadTasks,
        deleteTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
