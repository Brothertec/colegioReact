import React from 'react';


import imagemCard1 from '../../img/home/Parque-min.jpg';


import './sobre.css';
import NavBarGetsemani from '../NavBarGetsemani/NavBarGetsemani';
import Footer from '../Footer/Footer';


export default function Sobre() {
    return (
        <div>
             <NavBarGetsemani />
            <div class="banner">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 style = {{color: 'white'}}>Sobre</h1>
                </div>
                <div class="banner__image" style={{backgroundImage: 'url(' +imagemCard1 +')', backgroundRepeat: 'no-repeat'}}></div>
            </div>
            <Footer/>
        </div>


    );
}