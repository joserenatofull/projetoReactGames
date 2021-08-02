import React, { useContext,useEffect,useState} from 'react';

import './Game.css';
import TemaContext from '../../../contexts/TemaContext';
import { Link } from 'react-router-dom';
import removerGameServico from '../../../utils/removerGameServico';

import pegarGeneroPeloId from '../../../utils/pegarGeneroPeloId';

const Game = ({games}) => {
// {} para pegar info recebidas

    const tema = useContext(TemaContext);
    
    const [gameRemovido,setGameRemovido] = useState(false);
    const [nomeGenero,setNomeGenero] = useState('');

  useEffect(async () => {

    const genero = await pegarGeneroPeloId(games.idGenero);
    setNomeGenero(genero.descricao);

  },[])

    const removerGame = async () => { 
        // 
      const resultado = await removerGameServico( games.id);

      if(resultado.sucesso){
        alert(resultado.mensagem);
        setGameRemovido(true);
        return false;
        //
      }
      alert(resultado.mensagem);
    }

    
    return(
     <>
  
      {gameRemovido ? null :
    <article className='game' style={ {backgroundColor: tema.corFundoTema,
    boxShadow: tema.corBoxShadow,
    borderRadius: tema.borderFormat} }>

    <div className='g-boxe-titulo-btnremover'>
    <h3 className="g-titulo">Game: {games.titulo}</h3>

    <button className='g-btn-remover' onClick={() => removerGame()}>Remover</button>
    </div>

    <div className='g-data'> <div>Lançamento: </div><h4>  {games.dataLançamento} </h4></div>
    
    <div className="g-img-texto">

<div className="g-img">
    {games.imagem.includes("http") ?     <img src={games.imagem}></img>
 : null }
 

</div>
<div className="g-texto">

{games.descricao}
</div>


    </div>
    
    <div className='g-genero-bt'>
    <div className='g-genero'>
<p>Genêro: {nomeGenero}</p> 
   </div>

    <Link
    
    to={`/detalhes-game/${games.id}`}
          className='g-btn-continue-lendo'
          style={ {
            backgroundColor: tema.corFundoBotaoContinueLendo, 
            color: tema.corTextoBotaoContinueLendo,
            fontFamily: 'monospace',
            textAlign: 'center',
            textShadow: '1px 0.5px black'
        }
        }  
          >    

            <div>Continue lendo...</div>
        </Link>
    </div>
    </article>
}
</>

    );
}

export default Game;