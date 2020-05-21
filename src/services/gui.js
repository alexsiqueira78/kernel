
export const title = "Usuário do Sistema"

export const columns =   [
    { title: 'Código', field: 'codigo' },
    { title: 'Nome',   field: 'nome' },
    { title: 'Login',  field: 'login' }
  ];


export const pessoaTitle = "Pessoa"

export const pessoaColumns =   [
    { title: 'Código', field: 'codigo' },
    { title: 'Nome',   field: 'nome' }
  ];

export const empresa = {
  path: "empresa",
  title: "Empresa",
  columns: [
    { title: 'Código', field: 'codigo' },
    { title: 'Razão Social', field: 'razaoSocial' }
  ]
}


export const tipodocumentoempresa = {
  path: "tipodocumentoempresa",
  title: "Tipo de Documento de Empresa",
  columns: [
    { title: "Código", field: "codigo" },
    { title: "Descrição", field: "descricao" }
  ]
}

export const tipodocumentopessoa = {
  path: "tipodocumentopessoa",
  title: "Tipo de Documento de Pessoa",
  columns: [
    { title: "Código", field: "codigo" },
    { title: "Descrição", field: "descricao" }
  ]
}

export const empregado = {
  path: "empregado",
  title: "Empregado",
  columns: [
    { title: "Código", field: "codigo" },
    { title: "Empresa", field: "empresa" },
    { title: "Pessoa", field: "pessoa" },
    { title: "Matricula", field: "matricula" }
  ]
}