export const TOKEN_KEY = "@K3rN31-Token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const logon = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
