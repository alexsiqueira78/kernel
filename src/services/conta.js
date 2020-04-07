import api from "./api";

export const getAll = async () => {
    return await api.post("/conta/consultatodos")
        .then( (response) => {
            return response.data
        })
        .catch( (error) => {
            return error;
        });
};


export const save = async ( conta ) => {
    let codigo = conta.codigo;
    let cnpj = conta.cnpj;
    let razaosocial = conta.razaosocial;
    return await api.post("/conta/cadastro", { codigo, cnpj, razaosocial })
        .then( (response) => {
            return response.data
        })
        .catch( (error) => {
            return error;
        });
}


export const remove = async ( codigo ) => {
    return await api.post("/conta/excluir", { codigo })
        .then( (response) => {
            return response.data
        })
        .catch( (error) => {
            return error;
        });
}