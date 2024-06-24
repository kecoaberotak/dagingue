import axios from "axios";
const apiUrl = import.meta.env.VITE_DAGINGUE_API_URL;

export const login = (data, callback) => {
  axios
    .post(apiUrl + "/auth/login", data, { withCredentials: true })
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      callback(err.response);
    });
};

export const getToken = (callback) => {
  axios
    .get(apiUrl + "/auth/login", { withCredentials: true })
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      callback(err.response);
    });
};

export const logout = (callback) => {
  axios
    .post(apiUrl + "/auth/logout", { withCredentials: true })
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      callback(err.response);
    });
};
