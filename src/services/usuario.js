import api from "./api";

export const getAll = async () => {
    return await api.post("/systemuser/consultatodos")
        .then( (response) => {
            return response.data
        })
        .catch( (error) => {
            return error;
        });
};


export const save = async ( systemuser ) => {
    let name = systemuser.name;
    let login = systemuser.login;
    let password = systemuser.password;
    let email = systemuser.email;
    return await api.post("/systemuser/cadastro", { name, login, password, email })
        .then( (response) => {
            return response.data
        })
        .catch( (error) => {
            return error;
        });  
}


export const changePassword = async ( systemuser ) => {
    let login = systemuser.login;
    let oldPassword = systemuser.oldpassword;
    let newPassword = systemuser.newpassword;
    let confirmationPassword = systemuser.confirmationpassword;
    return await api.post("/systemuser/changepassword", { login, oldPassword, newPassword, confirmationPassword })
        .then( (response) => {
            return response.data
        })
        .catch( (error) => {
            throw new Error(error.response.data);
        });  
}


export const remove = async ( id ) => {
    return await api.post("/systemuser/excluir", { id })
        .then( (response) => {
            return response.data
        })
        .catch( (error) => {
            return error;
        });
}