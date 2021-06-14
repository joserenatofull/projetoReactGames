import React, { useState } from 'react';

import './ListaCategorias.css';

const ListaCategorias = ( { lista } ) => {
//const [categorias, setCategorias] = useState([]);


  return <>
    <div id='lista-categorias'>

      <div id='lc-titulo-btn-nova-categoria'>
        <h2 id='lc-titulo'>Lista Categorias</h2>
        <button id='lc-btn-nova-categoria'>Nova Categoria</button>
      </div>

      <ul id='lc-categorias'>
        { lista.map( item => 
          <li className='lc-item' key={item.id}>
            { item.descricao }
            <button className='lc-item-btn-remover'>Remover</button>
          </li> )}
      </ul>

    </div>
  </>;
};
export default ListaCategorias;