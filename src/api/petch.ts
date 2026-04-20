import api from "./apiClient";

export const petchposts = async (id,username) => {
    const res = await api.patch(`/users/${id}`,{
        username: username,
    });
    return res.data;
}