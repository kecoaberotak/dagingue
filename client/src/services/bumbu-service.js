import axios from "axios";

export const addBumbu = (data, callback) => {
  axios.post('https://dagingue-api.vercel.app/api/bumbu', data).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  })
};

export const getBumbu = (callback) => {
  axios.get('https://dagingue-api.vercel.app/api/bumbu').then(res => {
    callback(res.data);
  }).catch(err => {
    callback(err.response);
  })
};

export const deleteBumbu = (id, callback) => {
  axios.delete(`https://dagingue-api.vercel.app/api/bumbu/${id}`).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};

export const getDetailBumbu = (id, callback) => {
  axios.get(`https://dagingue-api.vercel.app/api/bumbu/${id}`).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};

export const putBumbu = (id, data, callback) => {
  axios.put(`https://dagingue-api.vercel.app/api/bumbu/${id}`, data).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
}