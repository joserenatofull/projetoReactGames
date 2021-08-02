import axios from "../axios/axios";

const pegarDetalhesGame = async (id) => {
try{
const resposta = await axios.get(`v1/games/${id}`);
return resposta.data;
}
catch(e){
alert('Erro ao visualizar Game')
}
}

export default pegarDetalhesGame;