import React from 'react';

import {useEffect,useState} from 'react';

import { Switch } from 'react-router-dom';
//Switch encapsula varias Rotas
import { Route } from 'react-router-dom';
//Route olha para os links
import { Redirect } from 'react-router-dom';
//Redireciona as paginas

import './ConteudoCentral.css';
import ListaCategorias from './ListaCategorias/ListaCategorias';
import ListaGames from './ListaGames/ListaGames';
import NovoGame from './NovoGame/NovoGame';


import pegarCategorias from '../utils/pegarCategorias';

const ConteudoCentral = () => {
  
  const [categorias, setCategorias] = useState([]);

  useEffect( () => {
    pegarCategorias( setCategorias );
  }, [] );

    return(
        <main>

        <Switch>  

            {/* Redirecionamento */}

            <Route exact path="/">
            {/* Redirect para Redirecionar de Home(/) para lista-games automatico */}

            <Redirect to="/lista-games" />
            </Route>

        <Route path="/lista-games">
            <ListaGames />
            </Route>

        <Route path="/lista-categorias">
            <ListaCategorias lista={ categorias } />
            </Route>

        <Route path="/novo-game">
            <NovoGame />
            </Route>

        </Switch>  
        </main>
    )
}

export default ConteudoCentral;