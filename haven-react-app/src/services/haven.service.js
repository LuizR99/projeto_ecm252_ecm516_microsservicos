import axios from "axios";

const API_URL = "http://localhost:3300/api/haven";

class HavenService {
  register({typeHouse, description, location, typePeople, quantityPeople}) {
    const token =JSON.parse(localStorage.getItem('token'))
    return  axios
      .post(API_URL, {
        typeHouse,
        description, 
        location, 
        typePeople, 
        quantityPeople
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then((resp) => resp.data);
  }

  update({id, typeHouse, description, location, typePeople, quantityPeople}) {
    const token =JSON.parse(localStorage.getItem('token'))
    return  axios
      .put(API_URL+`/${id}`, {
        typeHouse,
        description, 
        location, 
        typePeople, 
        quantityPeople
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then((resp) => resp.data);
  }

  delete(id){
    const token =JSON.parse(localStorage.getItem('token'))
    return  axios.delete(API_URL+`/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then(resp => resp.data);
  }

  async get(){
    return await axios.get(API_URL)
  }

  getUser(){
    const token =JSON.parse(localStorage.getItem('token'))
    return  axios.get(API_URL, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then(resp => resp.data);
  }

}

export default new HavenService();