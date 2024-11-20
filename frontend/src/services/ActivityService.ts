import api from "../config/api"
import IActivity from "../interfaces/IActivity"

const getActivities=()=>{
    return api.get<Array<IActivity>>("/Activitys")
}

const getActivity=(id:number)=>{
    return api.get<IActivity>(`/Activitys/${id}`)
}

const createActivity=(currentActivity:IActivity,)=>{
    return api.post<IActivity>(`/Activitys`,currentActivity)
}

const updateActivity=(currentActivity:IActivity, id:number)=>{
    return api.put<IActivity>(`/Activitys/${id}`, currentActivity)
}

const deleteActivity=(id:number)=>{
    return api.delete<IActivity>(`/Activitys/${id}`)
}

const ActivityService={
    getActivities,getActivity,createActivity,updateActivity,deleteActivity
}

export default ActivityService;