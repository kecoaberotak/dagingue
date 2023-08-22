import axios from "axios";
const apiUrl = import.meta.env.VITE_DAGINGUE_API_URL;

export const addBumbu = (data, callback) => {
  axios.post(apiUrl + '/api/bumbu', data).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  })
};

export const getBumbu = (callback) => {
  axios.get(apiUrl + '/api/bumbu').then(res => {
    callback(res.data);
  }).catch(err => {
    callback(err.response);
  })
};

export const deleteBumbu = (id, callback) => {
  axios.delete(apiUrl + '/api/bumbu/' + id).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};

export const getDetailBumbu = (id, callback) => {
  axios.get(apiUrl + '/api/bumbu/' + id).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};

export const putBumbu = (id, data, callback) => {
  axios.put(apiUrl + '/api/bumbu/' + id, data).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
}