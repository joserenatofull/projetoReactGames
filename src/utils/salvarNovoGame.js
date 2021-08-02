import axios from '../axios/axios';

const salvarNovoGame = async (novoGame,setMensagem) => {
try{
const resposta = await axios.post('v1/games', novoGame);

setMensagem('O game foi cadastrado com sucesso!')
}

catch(erro){

    switch(erro.response.status){
        case 409:
        setMensagem('Erro 409');
        //setMensagem('erro.response.data.message');
        break;

        default:
        setMensagem('Erro ao cadastrar game');

    }
}
};

export default salvarNovoGame;