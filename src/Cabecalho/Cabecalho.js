import React from 'react';
import './Cabecalho.css';
import { COR_PADRAO, COR_1, COR_2, COR_3,COR_4,COR_5 } from '../utils/coresTemas';
//import as respectivas cores dos temas... de cores Temas

import MenuPrincipal from './MenuPrincipal';
import {Link} from 'react-router-dom';
//funcaoConfiguraTema para setar os Temas
const Cabecalho = ( { funcaoConfiguraTema } ) => {
  // return div com opções de cores/Temas

  
    return (
      <header>

        <div id='c-titulo-temas'>
       <div id='logo'>
     <iframe src="https://gifer.com/embed/T6F" ></iframe><h1>ockstar
     <p id='textGames'>Games</p></h1>
        
  </div>  
  
          <div id='c-temas'>
          <audio autoplay="autoplay"  >
<source src="/music/x.mp3" type="audio/mp3" />
seu navegador não suporta HTML5
</audio>
            <p>Rockstar Temas: </p><br></br>

            {/* OnClick chama a funçãoCT com parametro (Cor_*)
            FuncãoCT = modificarTema criado na paginaInicial e seta o tema respectivo
            */}
            
            
            <button  className='btn-padrao'
              onClick={ () => { funcaoConfiguraTema( COR_4 ) } } >
<img src='/imagens/rock1.png' title="Rockstar International" />
            </button>
            
            <button className='btn-padrao'
              onClick={ () => { funcaoConfiguraTema( COR_1 ) } } >
<img src='/imagens/lon.png' title="Rockstar London" />
            </button>

              
            <button className='btn-padrao'
            
              onClick={ () => { funcaoConfiguraTema( COR_2 ) } } >
<img src='/imagens/van.png' title="Rockstar Vancouver" />
            </button>
  
            <button className='btn-padrao'
              onClick={ () => { funcaoConfiguraTema( COR_3 ) } } >
<img src='/imagens/san.png' title="Rockstar North" />
            </button>
  

            <button  className='btn-padrao'
              onClick={ () => { funcaoConfiguraTema( COR_5 ) } } >
<img src='/imagens/toronto.png' title="Rockstar Toronto" />
            </button>
              
            <button className='btn-padrao'
           

              onClick={ () => { funcaoConfiguraTema( COR_PADRAO ) } } >
<img src='/imagens/Leeds.png' title="Rockstar Leeds" />

            </button>  
          </div>
  
        </div>
  
        <MenuPrincipal />

      </header>
    );
  };
  
  export default Cabecalho;
  