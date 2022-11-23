import axios from "axios";

const API_URL = "http://localhost:3200/api/auth/";

class AuthService {
  login({email, password}) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        if (response.data.success) {          
          localStorage.setItem("token", JSON.stringify(response.data.token));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("token");
  }


  getToken() {
    return JSON.parse(localStorage.getItem('token'));
  }
}

export default new AuthService();