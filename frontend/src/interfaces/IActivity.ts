export default interface IActivity{
    id?:number,
    title:string,
    description: string,
    start_time:string,
    end_time:string,
    task_id:number,
    status:boolean
}