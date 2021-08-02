import React from 'react';
//context é uma api do React
//cria um espaço na memória, neste caso um plano de fundo que todos os comp...  
//que importar TemaContext conseguem usar
const TemaContext = React.createContext();
//1º passo criar o contexto
// instancia um contexto para o tema;
// so precisa criar e usar
export default TemaContext;
//contexto criado para setar background dos games e do menu