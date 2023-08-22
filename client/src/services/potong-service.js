import axios from "axios";

export const addPotong = (data, callback) => {
  axios.post('https://dagingue-api.vercel.app/api/potong', data).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  })
};

export const getPotong = (callback) => {
  axios.get('https://dagingue-api.vercel.app/api/potong').then(res => {
    callback(res.data);
  }).catch(err => {
    callback(err.response);
  })
};

export const deletePotong = (id, callback) => {
  axios.delete(`https://dagingue-api.vercel.app/api/potong/${id}`).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};

export const getDetailPotong = (id, callback) => {
  axios.get(`https://dagingue-api.vercel.app/api/potong/${id}`).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};

export const putPotong = (id, data, callback) => {
  axios.put(`https://dagingue-api.vercel.app/api/potong/${id}`, data).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
}