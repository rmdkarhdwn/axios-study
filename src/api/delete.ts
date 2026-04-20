import api from "./apiClient";

export const deletepost = async (id) => {
    const res = await api.delete(`/users/${id}`)
    return res.data
}