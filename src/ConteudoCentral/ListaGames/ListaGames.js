import React from 'react';
import Game from './Game/Game';
import './ListaGames.css';

const ListaGames = ( {lista}) => {
    return(
    <div>
            { lista.length > 0 ?
            lista.map( item => <Game games={item}/>)
             : <p> Carregando...</p> }
   
    </div>
    );
};

export default ListaGames;