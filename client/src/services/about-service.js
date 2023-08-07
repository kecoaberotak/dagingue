import axios from "axios";

export const addContent = (data, callback) => {
  axios.post('http://localhost:4000/api/about', data).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  })
};