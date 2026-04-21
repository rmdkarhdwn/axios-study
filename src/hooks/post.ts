import api from "../api/apiClient";

export const postposts = async () => {
    const res = api.post('user');
    return res;
}