import axios from 'axios';


const API = 'http://localhost:3015';

const save = async (name, email, password) => {
    try{
        const resp = await axios.post(`${API}/api/users/save`, {name, email, password});
        return resp.data;
    }catch(error){
        throw error;
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {save};
