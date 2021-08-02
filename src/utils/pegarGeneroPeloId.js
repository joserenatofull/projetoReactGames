import axios from '../axios/axios';

const pegarGeneroPeloId = async (id) => { 

    try{
    
const resposta = await axios.get(`v1/genero/${id}`);
return resposta.data;
    }
catch(e){
console.log('Houve um erro.')
}

};

export default pegarGeneroPeloId;