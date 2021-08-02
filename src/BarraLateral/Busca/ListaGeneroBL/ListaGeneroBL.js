import React, { useContext } from 'react';
import TemaContext from '../../../contexts/TemaContext';
import './ListaGeneroBL.css';
import {Link} from 'react-router-dom';

const ListaGeneroBL = ({lista}) => {

const tema = useContext(TemaContext); 


  return( <>
    <div id='bl-genero' style={{backgroundColor:tema.corFundoTema}}>

    <h1 id='bl-generoh1'><p>Games por Genero:</p></h1>

      
      {/*lista vindo de utils */}
      <ul id='bl-generoul'>
        { lista.map( item => 
          <li id="br-lc-generoli" key={item.id}>

            <Link   to={`/games-por-genero/${item.id}`}>
            { item.descricao}       </Link>
          </li> )}
      </ul>

    </div>
  </>);
};
export default ListaGeneroBL;