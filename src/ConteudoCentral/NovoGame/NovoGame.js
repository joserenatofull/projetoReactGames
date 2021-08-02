import React,{useState,useContext} from 'react';
import moment from 'moment';

import TemaContext from '../../contexts/TemaContext';
import './NovoGame.css';

import salvarNovoGame from '../../utils/salvarNovoGame';

const NovoGame = ({generos}) => {

  const tema = useContext(TemaContext);


  const [titulo,setTitulo] = useState ('');
  const [imagem,setImagem] = useState ('');
  const [genero,setGenero] = useState (-1);
  const [descricao,setDescricao] = useState ('');
  const [desenvolvedor,setDesenvolvedor] = useState ('');
  const [dataLançamento,setDataLançamento] = useState ('');
  const [plataforma,setPlataforma] = useState ('');
  const [mensagem,setMensagem] = useState ('');


  const incluirNovoGame = (evento) => {


    evento.preventDefault();
    
    if(  !titulo || !imagem || !genero || !descricao ||
      !desenvolvedor || !dataLançamento || !plataforma)
    {
      alert('Preencha corretamente os campos!')

    
    }
    let data = moment(dataLançamento);
  
const novoGame = {
  'titulo':titulo,
  'imagem': imagem,
  'descricao':descricao,
  'idGenero':genero,
  'desenvolvedor':desenvolvedor,
  'dataLançamento': data.format('DD/MM/YYYY'),
  'plataforma':plataforma
};

// chama o serviço 
salvarNovoGame(novoGame,setMensagem);


  };
    return(
  <div id='ng' style={ {background:tema.corFundoTema,
    boxShadow:tema.corBoxShadow,
    borderRadius:tema.borderFormat
    }}>

  <h3 id='ng-mensagem-game'>{mensagem ?<p>{mensagem}</p>: null}   </h3>  

      <h3>#Cadastro novo game:</h3>
      <form onSubmit={ (evento) => incluirNovoGame(evento)}>

        {/*
        "titulo": "GTA V",
        "imagem": "",
        "Genero": "Arcade",
        "descricao": "dada",
        "desenvolvedor": "",
        "dataLançamento": "",
        "plataforma":  ""
        */}
        <div className='ng-campo'>
        <label htmlFor='ng-campo-titulo' >Título: </label>
      <input value={titulo} placeholder='Titulo do game' id='ng-campo-titulo'
       name='ng-campo-titulo'
       onChange={evento => setTitulo(evento.target.value)}

       />
        </div>

        <div className='ng-campo'>
        <label htmlFor='ng-campo-imagem'>Imagem (url): </label>
      <input 
      onChange={evento => setImagem(evento.target.value)}
      value={imagem} placeholder='Url da Imagem' id='ng-campo-imagem' name='ng-campo-imagem'/>
        </div>

        <div className='ng-campo'>
        <label htmlFor='ng-campo-genero'>Genero: </label>
      <select
             onChange={evento => setGenero(evento.target.value)}
             value={genero} id='ng-campo-genero' name='ng-campo-genero'>
        <option value={-1}>Selecione um genero</option>
        {generos.map(item =>{ 
          return <option key={item.id }value={item.id}>{item.descricao}</option>
        } ) }
      </select>
        </div>

        

        <div className='ng-campo'>
        <label htmlFor='ng-campo-desenvolvedor'>Desenvolvedor: </label>
      <input 
             onChange={evento => setDesenvolvedor(evento.target.value)}
             value={desenvolvedor} placeholder='Desenvolvedor do game' id='ng-campo-desenvolvedor' name='ng-campo-desenvolvedor'/>
        </div>

        <div className='ng-campo'>
        <label htmlFor='ng-campo-dataL'>Data Lançamento: </label>
      <input
             onChange={evento => setDataLançamento(evento.target.value)}
             value={dataLançamento} placeholder='Data Lançamento'type='date'
              id='ng-campo-dataL' name='ng-campo-dataL'/>
        </div>

        <div className='ng-campo'>
        <label htmlFor='ng-campo-plataformas'>Plataformas: </label>
      <input
             onChange={evento => setPlataforma(evento.target.value)}
             value={plataforma} placeholder='Plataformas do game' id='ng-campo-plataformas' name='ng-campo-plataformas'/>
        </div>

        <div className='ng-campo'>
        <label htmlFor='ng-campo-descricao'>Descrição: </label>
      <textarea 
             onChange={evento => setDescricao(evento.target.value)}
             value={descricao} id='ng-campo-descricao' name='ng-campo-descricao'/>
        </div>


        <button >Cadastrar</button>
      </form>
    
  </div>
  
    );
};

export default NovoGame;