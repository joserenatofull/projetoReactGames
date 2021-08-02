import axios from '../axios/axios';

const pegarGeneros = async(salvarState) => {

/*  const _listaGeneros = [
    {
      'id': 1,
      'descricao': 'Ação'
    },
    {
      'id': 2,
      'descricao': 'Aventura'
    },
    {
      'id': 3,
      'descricao': 'Corrida'
    },
    {
      'id': 4,
      'descricao': 'Esporte'
    },
    {
      'id': 5,
      'descricao': 'Luta'
    },
    {
      'id': 6,
      'descricao': 'Estratégia'
    },
    {
      'id': 7,
      'descricao': 'RPG'
    },
    {
      'id': 8,
      'descricao': 'Tiro'
    }
  

  ];  */

  try{
    const resposta = await axios.get('v1/genero');
    const _listaGeneros = resposta.data;

    _listaGeneros.sort( (a,b) => {
      return (a.descricao > b.descricao) ? 1 : -1;
    });

    salvarState(_listaGeneros);

  }catch(erro){
    console.log(`Ocorrreu um erro:${erro.message} `);

  }



  //jogando essa lista no salvarState
};

export default pegarGeneros;
