import axios from "axios";

const API_URL = "http://localhost:3100/api/user";

class UserService {
  register({name, email, phoneNumber, password, confirmPassword}) {
    return axios
      .post(API_URL, {
        name, 
        email, 
        phoneNumber, 
        password, 
        confirmPassword
        })
      .then(response => {
        return response.data;
        });
  }

  update({name, email, phoneNumber}) {
    const token =JSON.parse(localStorage.getItem('token'))
    return axios
      .put(API_URL, {
        name, 
        email, 
        phoneNumber
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
      .then(response => {
        return response.data;
        });
  }

  getUser(){
    const token =JSON.parse(localStorage.getItem('token'))
    return axios.get(API_URL + "/data", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((resp) => resp.data);
  }

  getUserById(id){
    const token =JSON.parse(localStorage.getItem('token'))
    return axios.get(API_URL + `/data/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((resp) => resp.data);
  }


}

export default new UserService();