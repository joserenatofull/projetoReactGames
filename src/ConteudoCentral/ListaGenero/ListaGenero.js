import React, { useContext,useState } from 'react';

import './ListaGenero.css';
import {Link} from 'react-router-dom';
import TemaContext from '../../contexts/TemaContext';
import removerGeneroServico
 from '../../utils/removerGeneroServico';
const ListaGeneros = ({lista}) => {

  const [generoRemovido,setGeneroRemovido] = useState(false);

  const tema = useContext(TemaContext);

  const removerGenero = async(id) =>{
      const resposta = window.confirm('Você tem certeza que deseja remover este Genêro?')
      if(resposta ){

      const retornoServico = await removerGeneroServico(id);

      if(retornoServico.sucesso){
        setGeneroRemovido(true);
        return false;
      }

      }
    
  };

  return( <>

    <div id='lista-genero' style={ {background:tema.corFundoTema,
    boxShadow:tema.corBoxShadow,
    borderRadius:tema.borderFormat
    }}
>

      <div id='lg-titulo-btn-novo-genero'>
        <h2 id='lg-titulo'>#Genêros</h2>

     <button id='lg-btn-novo-genero'><Link to='/novo-genero' id='lg-btn-novo-genero2' >Novo Genero</Link></button>
      </div>
      {/*lista vindo de utils */}
      <ul id='lg-genero'>
        {lista.map( item => 
          <li className='lg-item' key={item.id}>
            { item.descricao}: <Link className='lg-item-btn-listar-games' 
              to={`/games-por-genero/${item.id}`}>
                <p></p>
              <button> Visualizar Games </button> 
              </Link>
            <button className='lg-item-btn-remover' onClick={()=> removerGenero(item.id)}>Remover Genêro</button>
           
          </li> )}
      </ul>

    </div>
  </>);
};
export default ListaGeneros;