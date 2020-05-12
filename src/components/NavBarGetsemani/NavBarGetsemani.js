import React from 'react';

import Nav from '../Nav/Nav';
import NavDropDown from '../Nav/NavDropDown';
import NavDropDownItem from '../Nav/NavDropDownItem';
import NavLink from '../Nav/NavLinkCustom';
import ModalSenha from '../ModalSenha/ModalSenha';


import logo from '../../img/logo.png';


export default function NavBarGetsemani(props) {
    var componenteSelecionado;

    function getComponente(componente){
        componenteSelecionado = componente;
    }

    return (
        <div>
            <ModalSenha componente={componenteSelecionado}/>
            <Nav logo={logo}>
                <NavLink active={true} link='/' nome='Início' />
                <NavLink link='/Sobre' nome='Sobre' />
                <NavDropDown>
                    <NavDropDownItem nome='Berçario I e II' componente='Bercario'/>
                    <NavDropDownItem nome='Infantil II (2 anos)' componente='Infantil2'/>
                    <NavDropDownItem nome='Infantil III (3 anos)' componente='Infantil3'/>
                    <NavDropDownItem nome='Infantil IV (4 anos)' componente='Infantil4'/>
                    <NavDropDownItem nome='Infantil V (5 anos)' componente='Infantil5'/>
                    <NavDropDownItem nome='Ensino Fundamental 1º ano (6 anos)' componente='PrimeiroAno'/>
                    <NavDropDownItem nome='Ensino Fundamental 2º ano (7 anos)' componente='SegundoAno'/>
                    <NavDropDownItem nome='Ensino Fundamental 3º ano (8 anos)' componente='TerceiroAno'/>
                    <NavDropDownItem nome='Ensino Fundamental 4º ano (9 anos)' componente='QuartoAno'/>
                </NavDropDown>
            </Nav>
        </div>
    );
}