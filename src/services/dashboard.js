import api from "./api";

export const getAll = async () => {
    return await api.post("/dashboard/summary")
        .then( (response) => {
            return response.data
        })
        .catch( (error) => {
            return error;
        });
};
