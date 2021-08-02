import axios from "../axios/axios";


const removerGeneroServico = async (id) => {

try{
    const resposta = await axios.delete(`v1/genero/${id}`);

return {
'sucesso':true,
'mensagem': 'Genero removido!'
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
                'mensagem': 'Erro ao remover o Genero!'
                };
    }
}
};


export default removerGeneroServico;