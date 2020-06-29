import axios from './axios';

const URL = 'https://cms.www.heltech.org/api/contactrequests';

const ContactRequestService = {
    create: (formData) => {
        return axios.post(URL, formData);
    },
};

export default ContactRequestService;
