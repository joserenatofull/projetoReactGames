import React from 'react';

import './Busca.css';

const Busca = () => {
  return (
    <div id='busca'>

      <input 
        id='b-campo-busca' 
        placeholder='Busque aqui...'
        title='Busque aqui...'
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
