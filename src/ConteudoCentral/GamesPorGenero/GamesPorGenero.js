import React,{useEffect,useState} from 'react';

import './GamesPorGenero.css';

import {useParams} from 'react-router-dom';
// para pegar o id do Game, uso Hook useParams

/* import pegarGames from '../../utils/pegarGames';
 */

import pegarGamesPeloIdGenero from '../../utils/pegarGamesPeloIdGenero';
import pegarGeneroPeloId from '../../utils/pegarGeneroPeloId';

const GamesPorGenero = () => {

  //usar useParams, 
  const { idGenero } = useParams();
   const [nomeGenero,setNomeGenero] = useState([]);

  //games vindo de utils
/*   const [games,setGames] = useState([]);
 */  const [gamesFiltrados,setGamesFiltrados] = useState([]);
  // Filtrar os Games de acordo com genero

/* useEffect( ()=>{
pegarGames(setGames);
//carrega a lista de games 1x
},[]); */

useEffect(async ()=>{
  const _games = await pegarGamesPeloIdGenero(idGenero);
  setGamesFiltrados(_games);
},[idGenero]);

useEffect(async ()=>{
  const genero = await pegarGeneroPeloId(idGenero);
  setNomeGenero(genero.descricao);
},[idGenero]);

/* useEffect( ()=>{
  const _gamesFiltrados = games.filter( item => item.idGenero ===
     parseInt(idGenero));

     //traz os games correspondente ao id

  setGamesFiltrados (_gamesFiltrados);

    // insere no estado setGF a const _gamesF com os games filtrados do genero
},[games, idGenero]); */




  
  return (
    <div id='gpc-games'>
        <h2>
            Games de {nomeGenero}: {gamesFiltrados.length}
        </h2>


    <div>
      {/*faz o map na lista de Game filtrados pelo id correpondente e mostra 
      os games filtrados pelo genero(id) */}
    {gamesFiltrados.length > 0 ? gamesFiltrados.map(game => {
      return <div className='gpc-games-lista'> <h3>#{game.titulo} </h3><h4>
        <br></br>Descrição:</h4> {game.descricao}</div>
    }) : <p id='gpc-sem-games'>Não temos Jogos de {nomeGenero} ainda! </p>}
</div>
      </div>
      
        );
};

export default GamesPorGenero;
