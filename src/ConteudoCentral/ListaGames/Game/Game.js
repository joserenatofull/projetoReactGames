import React, { useContext} from 'react';

import './Game.css';
import TemaContext from '../../../contexts/TemaContext';


const Game = () => {

    const tema = useContext(TemaContext);


    return(
    <article className='game' style={ {backgroundColor: tema.corFundoTema} }>
    <h3 className="g-titulo">Titulo do Jogo</h3>
    <p className="g-postado-em">Postado em: 10/05/2021</p>

    <div className="g-img-texto">

<div className="g-img">
<img src='/imagens/gta.jpg' />
</div>
<div className="g-texto">

<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
</p>
<p>
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
</p>
<p>
Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
</p>
</div>


    </div>
    
    <div className='g-categ-bt'>
    <div className='g-categoria'>
        Categoria: Ação
    </div>

    <button 
          className='g-btn-continue-lendo'
          style={ {
            backgroundColor: tema.corFundoBotaoContinueLendo, 
            color: tema.corTextoBotaoContinueLendo
          } }
          >
            Continue lendo...
        </button>
    </div>
    </article>

    )
}

export default Game;