import axios from '../axios/axios';

const salvarNovoGeneroServico = async (novoGenero,setMensagem) => {
try{
const resposta = await axios.post('v1/genero', novoGenero,setMensagem);
setMensagem('Novo genero cadastrado com sucesso');
}

catch(erro){
if(erro.response && erro.response.status){
switch(erro.response.status){
case 409: 
setMensagem(erro.response.data);
break;

default:
    setMensagem('Erro ao cadastrar novo genero');
    break;
}

}
setMensagem('Error');
}
};

export default salvarNovoGeneroServico;