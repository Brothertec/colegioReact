import React from 'react';

import './footer.css';
import logo from '../../img/logo2.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (<footer className="meu-rodape">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md">
                    <img className="mb-2" src={logo} alt="" width="80" height="80" />
                    <small className="d-block mb-3 text-muted">BrotherTec© 2020. Todos os direitos reservados.</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small d-none" s>
                        <li><a className="text-muted" href="#">Cool stuff</a></li>
                        <li><a className="text-muted" href="#">Random feature</a></li>
                        <li><a className="text-muted" href="#">Team feature</a></li>
                        <li><a className="text-muted" href="#">Stuff for developers</a></li>
                        <li><a className="text-muted" href="#">Another one</a></li>
                        <li><a className="text-muted" href="#">Last time</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small d-none">
                        <li><a className="text-muted" href="#">Resource</a></li>
                        <li><a className="text-muted" href="#">Resource name</a></li>
                        <li><a className="text-muted" href="#">Another resource</a></li>
                        <li><a className="text-muted" href="#">Final resource</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link to="/Sobre" className="text-muted">Sobre</Link></li>
                        <li><Link to="/" className="text-muted">Início</Link></li>
                        <li><a className="text-muted" href="https://brothertec.com.br">Equipe de Desenvolvimento</a></li>
                        <li className = "d-none"><a className="text-muted" href="#">Terms</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>);
}