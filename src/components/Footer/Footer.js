import React from 'react';

import './footer.css';
import logo from '../../img/logo2.png';

export default function Footer() {
    return (<footer className="meu-rodape">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md">
                    <img className="mb-2" src={logo} alt="" width="50" height="50" />
                    <small className="d-block mb-3 text-muted">BrotherTec© 2020. Todos os direitos reservados.</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
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
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Resource</a></li>
                        <li><a className="text-muted" href="#">Resource name</a></li>
                        <li><a className="text-muted" href="#">Another resource</a></li>
                        <li><a className="text-muted" href="#">Final resource</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Team</a></li>
                        <li><a className="text-muted" href="#">Locations</a></li>
                        <li><a className="text-muted" href="#">Privacy</a></li>
                        <li><a className="text-muted" href="#">Terms</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>);
}