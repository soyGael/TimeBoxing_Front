export default interface IUser {
    id?: number,
    name: string,
    email: string,
    password: string,
    star_time: string,
    end_time: string,
    status: number,
}

export default interface ITask {
    id?: number,
    title: string,
    priority: string,
    decrip: string,
    status_task: boolean,
}

export default interface ITask {
    id?: number,
    title: string,
    start_time: string,
    end_time: string,
    status_task: boolean,
    date: string,
    decrip: string,
}

