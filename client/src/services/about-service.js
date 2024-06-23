import axios from "axios";
const apiUrl = import.meta.env.VITE_DAGINGUE_API_URL;

export const getContent = (callback) => {
  axios
    .get(apiUrl + "/api/about")
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      callback(err.response);
    });
};

export const addContent = (data, callback) => {
  axios
    .post(apiUrl + "/api/about", data)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      callback(err.response);
    });
};

export const getDetailContent = (id, callback) => {
  axios
    .get(apiUrl + "/api/about/" + id)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      callback(err.response);
    });
};

export const putContent = (id, data, callback) => {
  axios
    .put(apiUrl + "/api/about/" + id, data)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      callback(err.response);
    });
};
