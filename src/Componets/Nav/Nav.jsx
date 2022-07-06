import fox from './foxi.png';
import './Nav.scss';
import React, { useRef, useState } from 'react';

function Nav({ Rock, Latino, Alternativo, Rap, genero, setGenero }) {



    return (

        <div className="NavContainer">
            <div className="NavPicture">
                <img src={fox} alt="" />
            </div>
            <div className="ListLibreria">
                <div className="H1">
                    <h1  >Recientes</h1>

                </div>
                <ul>
                    <li>Artistas</li>
                    <li>Álbums</li>
                    <li>Canciones</li>
                    <li>Estaciones</li>


                </ul>
            </div>

            <div className="ListPlaylist">
                <h1 className="H1">Géneros</h1>
                <ul>
                    <li onClick={Latino}>Latino</li>
                    <li onClick={Alternativo}>Alternativo</li>
                    <li onClick={Rap}>Rap</li>
                    <li onClick={Rock}>Rock</li>
                </ul>
            </div>
        </div >

    )
}
export default Nav;