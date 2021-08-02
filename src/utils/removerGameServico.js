import axios from "../axios/axios";


const removerGameServico = async (idGame) => {

try{
    const resposta = await axios.delete(`v1/games/${idGame}`);

return {
'sucesso':true,
'mensagem': 'Game removido com sucesso!'
};

}catch(erro){

switch (erro.response.status){
    case 409: 
    return {
        'sucesso':false,
        'mensagem': erro.response.data.message
        };
        default:
            return {
                'sucesso':false,
                'mensagem': 'Erro ao remover o game!'
                };
    }
}
};


export default removerGameServico;