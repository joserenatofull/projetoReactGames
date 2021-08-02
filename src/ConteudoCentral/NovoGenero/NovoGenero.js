import React,{useState} from 'react';
import moment from 'moment';
import salvarNovoGeneroServico from '../../utils/salvarNovoGeneroServico';
import './NovoGenero.css';

const NovoGenero = ({generos}) => {

  const [genero,setGenero] = useState('');
  const [mensagem,setMensagem] = useState('');

  const salvarNovoGenero = (evento) => { 
    evento.preventDefault();

    if(!genero){
      alert('Preencha o genero')
      return false;
    }

    const novoGenero = {
      "descricao": genero
    };

    salvarNovoGeneroServico(novoGenero,setMensagem);

  };

    return(
  <div id='ng'>

      <h4>Cadastro Novo Genero</h4>
      {mensagem ? <p id='ng-mensagem'>{mensagem}</p> : null}
      <form onSubmit={evento => salvarNovoGenero(evento )}>

      <div id='ng-campo'>
      <label>Genero:</label>
      <input placeholder='nome do genero' id='ng-nome' name='ng-nome' 
      onChange={evento => setGenero(evento.target.value)}
      />
      </div>
      <button id='ng-btn-salvar'>Salvar</button>

      </form>


  </div>
    );
};

export default NovoGenero;