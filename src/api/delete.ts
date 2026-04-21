import api from "./apiClient";

export const deleteUser = async (id) => {
    const res = await api.delete(`/users/${id}`)
    console.log(res.status)
    return res.data
}