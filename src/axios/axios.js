import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5555/'
    // baseURL é tudo antes do end-point
});
// axios.create cria a instancia axios