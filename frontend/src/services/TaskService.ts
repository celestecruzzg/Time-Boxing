import api from "../config/api"
import ITask from "../interfaces/ITasks"

const getTasks=()=>{
    return api.get<Array<ITask>>("/tasks")
}

const getTask=(id:number)=>{
    return api.get<ITask>(`/tasks/${id}`)
}

const createTask=(currentTask:ITask,)=>{
    return api.post<ITask>(`/tasks`,currentTask)
}

const updateTask=(currentTask:ITask, id:number)=>{
    return api.put<ITask>(`/tasks/${id}`, currentTask)
}

const deleteTask=(id:number)=>{
    return api.delete<ITask>(`/tasks/${id}`)
}

const TaskService={
    getTasks,getTask,createTask,updateTask,deleteTask
}

export default TaskService;