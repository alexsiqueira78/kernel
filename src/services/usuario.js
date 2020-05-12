import api from "./api";


export const load = async () => {
    return await api.get("/usuario/listar")
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return error;
        });
};

export const save = async (usuario) => {
    const requestConfig = {
        method: "post",
        url: "/usuario/cadastrar",
        data : {
            nome: usuario.nome,
            login: usuario.login,
            password: usuario.password,
        }
    }
    if (usuario.codigo) {
        requestConfig.method = "put"
        requestConfig.url = `/usuario/manter/${usuario.codigo}`
    }
    return await api(requestConfig)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return error;
        });
}

export const remove = async (id) => {



    return await api.delete(`/usuario/remover/${id}`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return error;
        });
}


export const changePassword = async (systemuser) => {
    let login = systemuser.login;
    let oldPassword = systemuser.oldpassword;
    let newPassword = systemuser.newpassword;
    let confirmationPassword = systemuser.confirmationpassword;
    return await api.post("/systemuser/changepassword", { login, oldPassword, newPassword, confirmationPassword })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            throw new Error(error.response.data);
        });
}


