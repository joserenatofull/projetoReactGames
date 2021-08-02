import axios from '../axios/axios';

const pegarGamesPeloIdGenero = async (id) => {
try{
const resposta = await axios.get(`v2/games/idGenero/${id}`);
return resposta.data;

}
catch(e){
console.log('Houve algum erro.');
}
};

export default pegarGamesPeloIdGenero;