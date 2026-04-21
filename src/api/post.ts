import api from "./apiClient";

export const postposts = async () => {
    const res = api.post('user');
    return res;
}