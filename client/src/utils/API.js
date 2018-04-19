import axios from "axios";


export default {
  getProfile: function() {
    return axios.get("http://localhost:3001/api/submit");
  },
  postProfile: function(data) {
    return axios.post({
      url: "http://localhost:3001/api/submit",
      method: "POST",
      data: data
    });
  },
};
