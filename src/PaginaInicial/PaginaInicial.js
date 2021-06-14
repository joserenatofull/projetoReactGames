import React, { useState } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import './PaginaInicial.css';


import BarraLateral from '../BarraLateral/BarraLateral';
import Cabecalho from '../Cabecalho/Cabecalho';
import ConteudoCentral from '../ConteudoCentral/ConteudoCentral';
import Rodape from '../Rodape/Rodape';
import TemaContext from '../contexts/TemaContext';


//import coresTemas from '../utils/coresTemas';
import { 
    COR_1, 
    COR_2, 
    COR_3, 
    COR_PADRAO_CONFIGURACOES,
    COR_1_CONFIGURACOES,
    COR_2_CONFIGURACOES,
    COR_3_CONFIGURACOES
   } from '../utils/coresTemas';
  
   const PaginaInicial = () => {

    const [tema, setTema] = useState( COR_PADRAO_CONFIGURACOES );
  
    const modificarTema = temaSelecionado => {
  
      switch( temaSelecionado ) {
        
        case COR_1:
          setTema( COR_1_CONFIGURACOES );
          break;
  
        case COR_2:
          setTema( COR_2_CONFIGURACOES );
          break;
      
        case COR_3:
          setTema( COR_3_CONFIGURACOES );
          break;
  
        default:
          setTema( COR_PADRAO_CONFIGURACOES );
          
      }
      
    };
  
    return (
      <TemaContext.Provider value={ tema } >
  
        <BrowserRouter>
  
          <div id='box-pagina-inicial'>
  
            <Cabecalho funcaoConfiguraTema={ modificarTema } />
  
            <div id='container'>
              <ConteudoCentral />
              <BarraLateral />
            </div>
  
            <Rodape />
  
          </div>
          
        </BrowserRouter>
        
      </TemaContext.Provider>
    );
  };
  
  export default PaginaInicial;
  