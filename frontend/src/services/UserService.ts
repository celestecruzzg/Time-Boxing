import api from "../config/api"
import IUser from "../interfaces/IUser"

const getUsers=()=>{
    return api.get<Array<IUser>>("/users")
}

const getUser=(id:number)=>{
    return api.get<IUser>(`/users/${id}`)
}

const createUser=(currentUser:IUser)=>{
    return api.post<IUser>("/users",currentUser) //
}

const updateUser=(currentUser:IUser, id:number)=>{
    return api.put<IUser>(`/users/${id}`,currentUser)
}

const deleteUser=(id:number)=>{
    return api.delete<IUser>(`/users/${id}`)
}

const UserService={
    getUsers,getUser,createUser,updateUser,deleteUser
}

export default UserService; 