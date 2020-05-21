export const TOKEN_KEY = "@K3rN31-Token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

//export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getToken = () => "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGV4c2lxdWVpcmEuc3BAZ21haWwuY29tIiwiZXhwIjoxNTkwMTExODg2LCJpYXQiOjE1OTAwOTM4ODZ9.AquVFoe8uSLe7kbWG7_LfyxV7kTDZIomeWPWrQLCQRu82Mw2BdwQ6G0sJ1FI0cpwlAfn-_jT9sp_IL3VyEijAQ";

export const logon = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
