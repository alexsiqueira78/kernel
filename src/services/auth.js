export const TOKEN_KEY = "@K3rN31-Token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

//export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getToken = () => "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGV4c2lxdWVpcmEuc3BAZ21haWwuY29tIiwiZXhwIjoxNTg5Mjk4NzQ2LCJpYXQiOjE1ODkyODA3NDZ9.nZUpqS-wFVBQYh1tjFwST1rl_5SVyNNF1BOgGOEC3vQR0-zFh-goRfsrqOUICbWr9h3dtVEfdstohkDflxLRZQ";

export const logon = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
