import axios from "./axios.js";

export const createTaskRequest = task => axios.post(`/task`, task)

export const getTasksRequest = () => axios.get('/tasks')

export const updateTaskRequest = (task) => axios.put(`/tasks/${task.id}`, task)

export const getTaskRequest = (id) => axios.get(`/tasks/${id}`)

export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`)


