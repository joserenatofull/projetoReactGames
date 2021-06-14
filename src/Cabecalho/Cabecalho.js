import React from 'react';

import './Cabecalho.css';

import { COR_PADRAO, COR_1, COR_2, COR_3 } from '../utils/coresTemas';

import MenuPrincipal from './MenuPrincipal';

const Cabecalho = ( { funcaoConfiguraTema } ) => {
    return (
      <header>
  
        <div id='c-titulo-temas'>
  
          <h1>Blog</h1>
  
          <div id='c-temas'>
  
            <p>Temas:</p>
  
            <button 
              id='c-tema-rosa'
              onClick={ () => { funcaoConfiguraTema( COR_1 ) } } >
                Rosa
            </button>
  
            <button 
              id='c-tema-verde'
              onClick={ () => { funcaoConfiguraTema( COR_2 ) } } >
                Verde
            </button>
  
            <button 
              id='c-tema-azul'
              onClick={ () => { funcaoConfiguraTema( COR_3 ) } } >
                Azul
            </button>
  
            <button 
              id='c-tema-branco'
              onClick={ () => { funcaoConfiguraTema( COR_PADRAO ) } } >
                Branco
            </button>
  
          </div>
  
        </div>
  
        <MenuPrincipal />
  
      </header>
    );
  };
  
  export default Cabecalho;
  