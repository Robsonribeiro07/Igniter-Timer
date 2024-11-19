import { HeaderContainer } from "./style";

import {Timer, Scroll } from 'phosphor-react' // Icones da aplicaçao

import LogoIgnite from '../../assets/logo.svg'
import { NavLink } from "react-router-dom"; // Ussado para pode navegar entre as pages
export function Header (){
    return(
        <HeaderContainer>
            <img src={LogoIgnite} alt="" />
           <nav>
            <NavLink to="/" title="Home">
                <Timer size={24}/>
            </NavLink>
            <NavLink to="/history" title="Historico">
                <Scroll size={24}/>
            </NavLink>
           </nav>

        </HeaderContainer>
    )
    
}