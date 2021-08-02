import React,{useState,useEffect} from 'react';

import './BarraLateral.css';

import Busca from './Busca/Busca';
import ListaGeneroBL from './Busca/ListaGeneroBL/ListaGeneroBL';
import pegarGeneros from '../utils/pegarGeneros';
const BarraLateral = () => {
  const [generos, setGeneros] = useState([]);

  useEffect( () => {
    //pegarGeneros( salvarState )
    //lista vindo de utils
    pegarGeneros( setGeneros );
  }, [] );
  return (
    <aside >

      <Busca />
      <ListaGeneroBL lista={generos}/>
    </aside>
  );
};

export default BarraLateral;
