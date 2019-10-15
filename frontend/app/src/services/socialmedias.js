import axios from "./axios";

const URL = "https://cms.www.heltech.org/api/socialmedias";

const SocialMediaService = {
  count: () => {
    return axios.get(`${URL}/count`);
  },

  getAll: () => {
    return axios.get(URL);
  },

  getOne: id => {
    return axios.get(`${URL}/${id}`);
  }
};

export default SocialMediaService;
