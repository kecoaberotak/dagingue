import axios from 'axios';

// export const login = (data, callback) => {
//   axios.post('http://localhost:4000/login', data).then(res => {
//     callback(true, res);
//   }).catch(err => {
//     console.log(data,err);
//     callback(false, err);
//   })
// };

export const login = (data, callback) => {
  axios.post('http://localhost:4000/login', data, {withCredentials: true}).then(res => {
    callback(res.data.status, res);
  }).catch(err => {
    throw err;
  });
};


export const getAdmin = (callback) => {
  axios.get('http://localhost:4000/getAdmin').then(res => {
    callback(res.data);
  }).catch(err => {
    console.log(err);
  })
};