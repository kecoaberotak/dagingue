import axios from "axios";

export const addBumbu = (data, callback) => {
  axios.post('http://localhost:4000/addBumbu', data).then(res => {
    callback(res);
  }).catch(err => {
    throw err;
  })
};