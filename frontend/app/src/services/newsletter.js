import axios from "./axios";

const URL = "https://cms.www.heltech.org/api/newsletter";

const NewsLetterService = {
  create: formData => {
    return axios.post(URL, formData);
  }
};

export default NewsLetterService;
