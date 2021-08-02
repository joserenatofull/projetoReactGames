import React, { useEffect,useState } from 'react';

import './DetalhesGame.css';

import pegarGeneroPeloId from '../../utils/pegarGeneroPeloId';

import {useParams} from 'react-router-dom';
// para pegar o id do Game, uso Hook useParams
import pegarDetalhesGame from '../../utils/pegarDetalhesGame';

const DetalhesGame = () => {

  const [gameCarregado,setGameCarregado] = useState({});
  const [nomeGenero,setNomeGenero] = useState('');

  //usar useParams para pegar o id
  const { id } = useParams();
  
  useEffect( async () => { 
    const _gameCarregado = await pegarDetalhesGame(id);
    setGameCarregado(_gameCarregado);

    //Chamar ultilitario que chama nome do genero
    const genero = await pegarGeneroPeloId(_gameCarregado.idGenero);
    setNomeGenero(genero.descricao);


  }

  ,[]);

  return (
    <div id='dg-detalhes-game'>
        

        
        <h2 id="detalhes">{gameCarregado.titulo}</h2><br></br>
        <h4>ID: #{gameCarregado.id} </h4>
        
        {gameCarregado.imagem ? gameCarregado.imagem.includes("http") ?
         <img id='dg-imagem'src={gameCarregado.imagem}></img>
        : null : null}<br></br><br></br>
        <h4>Genero:{nomeGenero}</h4>
        <h4>Data de Lançamento: {gameCarregado.dataLançamento}</h4>
        <h4 id='dg-descricao'>Descrição:<p>{gameCarregado.descricao}</p></h4>
        <h4>Desenvolvedor:{gameCarregado.desenvolvedor}</h4>
        <h4>Plataformas:{gameCarregado.plataforma}</h4>
   
  

      </div>
        );
};

export default DetalhesGame;
