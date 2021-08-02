import React from 'react';
import {Link,BrowserRouter,Router,Switch,Route} from 'react-router-dom';
import PaginaInicial from '../PaginaInicial/PaginaInicial';
import ListaGames from '../ConteudoCentral/ListaGames/ListaGames';
import './Home.css';
const Home = () =>{

    
        
    
      return (
        <>
        <h2 id="home"><img alt="image" height="40" class="mb-2 rounded-circle"
                         src="imagens/rock1.png"/>ockstar Games</h2>
        <h3>#Os Melhores games do mundo você encontra aqui!</h3>
        
        <div class="container" >

<p className="p-home">Principais Games:</p>
        <div class="row">
                    <div class="column">
                    <img class="demo cursor" src="imagens/v.png" style={{width:'100%'}} />
                    </div>
                    <div class="column">
                    <img class="demo cursor" src="imagens/mahunt.jpg" style={{ width:'100%'}} />
                    </div>
                    <div class="column">
                    <img class="demo cursor" src="imagens/max.jpg" style={{width:'100%'}} />
                    </div>
                    <div class="column">
                    <img class="demo cursor" src="imagens/reds.jpg" style={{width:'100%'}} />
                    </div>
                    <div class="column">
                    <img class="demo cursor" src="imagens/bully.jpg" style={{width:'100%'}} />
                    </div>
                 
      
                    <div class="column">
                    <img class="demo cursor" src="imagens/mid2.jpg" style={{width:'100%'}} />
                    </div>
                  
                              <div class="row">
                              <div class="column">
                              <img class="demo cursor" src="imagens/agent.jpg" style={{width:'100%'}} />
                              </div>
                              <div class="column">
                              <img class="demo cursor" src="imagens/tenis.png" style={{width:'100%'}} />
                              </div>
                              <div class="column">
                              <img class="demo cursor" src="imagens/the.jpg" style={{width:'100%'}} />
                              </div>
                              <div class="column">
                              <img class="demo cursor" src="imagens/la.jpg" style={{width:'100%'}} />
                              </div>
                              <div class="column">
                              <img class="demo cursor" src="imagens/state.jpg" style={{width:'100%'}} />
                              </div>
                              <div class="column">
                              <img class="demo cursor" src="imagens/san1.png" style={{width:'100%'}} />
                              </div>
        
                  </div>
        
          
                    
                   
    
                    </div><p className="p-home">Melhores Cenas:</p>
                    <div class="row">
    
                    <div class="column">
                    <img class="demo cursor" src="imagens/retrato6.jpg" style={{width:'100%'}} />
                          </div>
                          <div class="column">
                          <img class="demo cursor" src="imagens/retrato2.jpg" style={{width:'100%'}} />
                          </div>
                          <div class="column">
                          <img class="demo cursor" src="imagens/retrato8.jpg" style={{width:'100%'}} />
                          </div>
                          <div class="column">
                          <img class="demo cursor" src="imagens/retrato9.png" style={{width:'100%'}} />
                          </div>
                          <div class="column">
                          <img class="demo cursor" src="imagens/retrato23.jpg" style={{width:'100%'}} />
                          </div>
                          <div class="column">
                          <img class="demo cursor" src="imagens/retrato14.jpg" style={{width:'100%'}} />
                          </div>
        </div>
        <div class="row">
    
        <div class="column">
                              <img class="demo cursor" src="imagens/retrato20.jpg" style={{width:'100%'}} />
                              </div>
                          <div class="column">
                          <img class="demo cursor" src="imagens/retrato17.jpg" style={{width:'100%'}} />
                              </div>
                           
                              <div class="column">
                              <img class="demo cursor" src="imagens/retrato15.jpg" style={{width:'100%'}} />
                              </div>
                              <div class="column">
                              <img class="demo cursor" src="imagens/retrato16.jpg" style={{width:'100%'}} />
                              </div>
                              <div class="column">
                              <img class="demo cursor" src="imagens/retrato13.jpg" style={{width:'100%'}} />
                              </div>
                              <div class="column">
                              <img class="demo cursor" src="imagens/retrato18.jpg" style={{width:'100%'}} />
                              </div>
    
                              </div>
    
                              <div class="row" >
    
                              <div class="column">
                              <img class="demo cursor" src="imagens/retrato.jpg" style={{width:'100%'}} />
                              </div>
                               <div class="column">
                              <img class="demo cursor" src="imagens/r1.jpg" style={{width:'100%'}} />
                              </div>
                              <div class="column">
                              <img class="demo cursor" src="imagens/retrato22.jpg" style={{width:'100%'}} />
                              </div>
                              <div class="column">
                              <img class="demo cursor" src="imagens/retrato1.jpg" style={{width:'100%'}} />
                              </div>
                              <div class="column">
                              <img class="demo cursor" src="imagens/retrato24.jpg" style={{width:'100%'}} />
                              </div>
                              <div class="column">
                              <img  class="demo cursor" src="imagens/retrato26.jpg" style={{width:'100%'}} />
                              </div>
                              </div>
                             
                          
                </div>
        <br></br>
            
    </>    
      );
   
    

}

export default Home;