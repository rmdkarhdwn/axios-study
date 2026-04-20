import api from "./apiClient";

export const postposts = async () => {
    const res = api.patch('user');
    return res;
}