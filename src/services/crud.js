import api from "./api";


export const save = async (path, entity) => {
    const requestConfig = {
        method: "post",
        headers: { 'Content-Type': 'application/json' },
        url: `/${path}/create`,
        data : 
            entity
    }
    if (entity.codigo) {
        requestConfig.method = "put"
        requestConfig.url = `/${path}/update/${entity.codigo}`
    }
    return await api(requestConfig)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return error;
        });     
}


export const remove = async (path, id) => {
    return await api.delete(`/${path}/delete/${id}`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return error;
        });
}


export const load = async (path) => {
    return await api.get(`/${path}/load`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return error;
        });
};

