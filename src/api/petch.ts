import api from "./apiClient";

export const updateUsername = async (id,username) => {
    const res = await api.patch(`/users/${id}`,{
        username : username,
    });
    console.log(res.status)
    return res.data;
}