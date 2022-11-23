import axios from "axios";

const API_URL = "http://localhost:3300/api/haven";

class HavenService {
  async register({name, email, phoneNumber, password, confirmPassword}) {
    const token =JSON.parse(localStorage.getItem('token'))
    return await axios
      .post(API_URL, {
        name, 
        email, 
        phoneNumber, 
        password, 
        confirmPassword
        },
        `Bearer ${token}`);
  }

  async get(){
    return await axios.get(API_URL)
  }

}

export default new HavenService();