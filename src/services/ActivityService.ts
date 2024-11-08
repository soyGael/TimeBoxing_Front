import api from "../config/api";
import IActivity from "../interfaces/iActivity";

const getActivities = () => {
    return api.get<Array<IActivity>>("/activities");
}

const getActivity = (id: number) => {
    return api.get<IActivity>(`/activities/${id}`);
}

const createActivity = (currentActivity: IActivity) => {
    return api.post<IActivity>("/activities", currentActivity);
}

const updateActivity = (currentActivity: IActivity, id: number) => {
    return api.put<IActivity>(`/activities/${id}`, currentActivity);
}

const deleteActivity = (id: number) => {
    return api.delete<IActivity>(`/activities/${id}`);
}
