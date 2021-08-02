import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
//react-router-dom ajuda com as rotas e histórico
//BrowserRouter gerencia as rotas
//Menu principal usa os Links, Pagina Inicial BrowserRouter

import './PaginaInicial.css';


import BarraLateral from '../BarraLateral/BarraLateral';
import Cabecalho from '../Cabecalho/Cabecalho';
import ConteudoCentral from '../ConteudoCentral/ConteudoCentral';
import TemaContext from '../contexts/TemaContext';
import Home from '../Home/Home';
// importo as configurações dos temas
import {
    COR_1, COR_2,COR_3,COR_4,COR_5,
    COR_PADRAO_CONFIGURACOES,
    COR_1_CONFIGURACOES,
    COR_2_CONFIGURACOES,
    COR_3_CONFIGURACOES,
    COR_4_CONFIGURACOES,
    COR_5_CONFIGURACOES } from '../utils/coresTemas';
import Rodape from '../Rodape/Rodape';

  //responsavel por setar os temas 
   const PaginaInicial = () => {
    //const state tema = corPadrão
    const [tema, setTema] = useState( COR_PADRAO_CONFIGURACOES );
  
    const modificarTema = temaSelecionado => {
  
      switch( temaSelecionado ) {
        // COR_1 criado em coresTemas
        case COR_1:
          setTema( COR_1_CONFIGURACOES );
          /* setTema com obj de cores temas 
          const COR_1_CONFIGURACOES = {
          corFundoTema: '#f38bb3',
          corFundoBotaoContinueLendo: 'white',
          corTextoBotaoContinueLendo: 'grey'};*/
  

          break;
  
        case COR_2:
          setTema( COR_2_CONFIGURACOES );
          break;
      
        case COR_3:
          setTema( COR_3_CONFIGURACOES );
          break;

        case COR_4:
          setTema (COR_4_CONFIGURACOES);
          break;

          case COR_5:
          setTema (COR_5_CONFIGURACOES);
          break;
  
        default:
          setTema( COR_PADRAO_CONFIGURACOES );
          
      }
      
    };
  
    return (
      //encapsulo para ficar disponivel para toda app
      <TemaContext.Provider value={ tema } >
        {/*Provider é como uma prop, é um objeto dentro de TemaContext
        este objeto é capaz de prove o contexto e consumir o contexto
      */}
        <BrowserRouter>
  
          <div id='box-pagina-inicial'>
  
            <Cabecalho funcaoConfiguraTema={ modificarTema } />
            {/*meu cabecalho contem o MenuPrincipal
            Cabecalho aciona FuncaoConfiguraTema={modificaTema} para setar o Tema
            */}

            <div id='container'>
              <ConteudoCentral />

              <BarraLateral />
              
            </div>
            <Home />

          <Rodape/>
          </div>
          
        </BrowserRouter>
        
      </TemaContext.Provider>
    );
  };
  
  export default PaginaInicial;
  