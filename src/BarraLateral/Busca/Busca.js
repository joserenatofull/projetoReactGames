import React from 'react';

import './Busca.css';

const Busca = () => {
  // return uma div com input e button search
  return (
    <div id='busca'>

      <input 
        id='b-campo-busca' 
        placeholder='Pesquisar'
        title='Pesquisar...'
      />

      <button id='b-btn-busca'>
        <img 
          src='/imagens/icone-busca.png'

        />
      </button>

    </div>
  );
};

export default Busca;
