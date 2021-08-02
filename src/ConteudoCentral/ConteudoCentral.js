import React from 'react';

import {useEffect,useState} from 'react';

import { Switch } from 'react-router-dom';
//Swith olha para os link e vai dizer se tem que ir pra x,y,z
//Switch encapsula ouvi e dispara as rotas
import { Route } from 'react-router-dom';
//Route é a Rota(URI) ex: /novo-game
import { Redirect } from 'react-router-dom';
//Redireciona as paginas
import Home from '../Home/Home';
import './ConteudoCentral.css';

import ListaGenero from './ListaGenero/ListaGenero';
import ListaGames from './ListaGames/ListaGames';
import NovoGame from './NovoGame/NovoGame';
import NovoGenero from './NovoGenero/NovoGenero';
//import o pegarGeneros de utils
import pegarGeneros from '../utils/pegarGeneros';
import pegarGames from '../utils/pegarGames';

import DetalhesGame from './DetalhesGame/DetalhesGame';

import GamesPorGenero from './GamesPorGenero/GamesPorGenero';

//Conteudo Central controla as rotas e é responsavel tbm por pegar as info via Ajax
const ConteudoCentral = () => {

  //state lista de Generos
  const [generos, setGeneros] = useState([]);
  const [games, setGames] = useState([]);

  useEffect( () => {
    //pegarGeneros( salvarState ) de utils
    pegarGeneros( setGeneros );
  }, [] );

  useEffect( () => {
    //pegarGames( salvarState ) de utils
    pegarGames( setGames );
  }, [] );

    return(
        <main>
        
        <Switch>  
            {/* Add Route e path para cada Componente */}
            {/* path recebe mesma url de to= (Link)[Menuprinc] */}

 {/* Redirect para Redirecionar de Home(/) 
            para lista-games automatico */}
{/*             <Route exact path="/">
 */}                {/* for exatamentente / chama o lista-games tbm */}
         {/*    <Redirect to="/lista-games" />
            </Route> */}
{/* 
            <Route path="/home">
                <Home />
            </Route> */}
        <Route path="/lista-games">
            <ListaGames lista={games}/>
            </Route>

        <Route path="/lista-generos">
            {/* passo generos como uma prop para lista de generos
             let = {propriedade}
            */}

            <ListaGenero lista={ generos }  />
            </Route>

        <Route path="/novo-game">
            <NovoGame generos={generos} />
            </Route>

            <Route path="/detalhes-game/:id">
                <DetalhesGame />
            </Route>

            
            <Route path="/games-por-genero/:idGenero">
                <GamesPorGenero />
            </Route>

            <Route path="/novo-genero">
                <NovoGenero />
            </Route>

           

        </Switch>  
        </main>
    )
}

export default ConteudoCentral;