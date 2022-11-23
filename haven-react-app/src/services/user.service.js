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

}

export default new UserService();