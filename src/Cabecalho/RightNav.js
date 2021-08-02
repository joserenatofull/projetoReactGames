import React,{useContext} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";


import TemaContext from '../contexts/TemaContext';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 650px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    z-index:100;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {

  const tema = useContext(TemaContext);

  return (
    <Ul open={open} style={ {backgroundColor: tema.corFundoTema,
      boxShadow:tema.corBoxShadow,
      borderRadius: tema.borderFormat
    }}>
     
 

            <li id="submenu">
            {/* componente Link */}
            <Link to='/lista-games'><i class="fas fa-gamepad"></i> Games </Link>
            {/* no menu ao clicar em link add /lista-games na url */}
            
            </li>

            <li>
            <Link to='/novo-game'><i class="far fa-plus-square"></i> Novo Game</Link>
            </li>
            <li>            <Link to='/lista-generos'spy={true}
    smooth={true}
    offset={150}
    >

     <i class="fas fa-venus-mars"></i>  Genêros </Link>

            </li>
            <li>
            {/* componente Link */}
             <a href="#contato"><i class="fas fa-contact"></i> Contato</a>
            {/* no menu ao clicar em link add /lista-games na url */}

            
            </li>
    </Ul>
  )
}

export default RightNav;