import axios from "axios";

export const getContent = (callback) => {
  axios.get('https://dagingue-api.vercel.app/api/about').then(res => {
    callback(res.data);
  }).catch(err => {
    callback(err.response);
  })
};

export const addContent = (data, callback) => {
  axios.post('https://dagingue-api.vercel.app/api/about', data).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  })
};

export const getDetailContent = (id, callback) => {
  axios.get(`https://dagingue-api.vercel.app/api/about/${id}`).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};

export const putContent = (id, data, callback) => {
  axios.put(`https://dagingue-api.vercel.app/api/about/${id}`, data).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};