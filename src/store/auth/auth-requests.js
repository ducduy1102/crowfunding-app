const { default: axios } = require("api/axios");

export const requestAuthRegister = (data) => {
  console.log(data);
  return axios.post("/auth/register", {
    ...data,
  });
};
