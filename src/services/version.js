import api from "./api";

export const version = async () => {
    return await api.get("/api/version")
        .then( (response) => {
            return response.data
        })
        .catch( (error) => {
            return error;
        });
};