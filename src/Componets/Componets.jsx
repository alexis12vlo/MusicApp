import Nav from './Nav/Nav.jsx';
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';
import './Componets.scss'
import React, { useState } from 'react';
import rosa from './rosa.png'
import sonido from './sonido2.png'
function Componets() {
    const [count, setCount] = useState([{ name: '', fans: '1', id: '1', image: '', nombrecancion: [{ artist: { name: 'Cancion' }, album: { cover_big: rosa }, title: 'Artista' }], seguidores: '' }]);
    const [user, setUser] = useState({ name: 'User' });
    const [buscar, setBuscar] = useState();
    const [musica, setMusica] = useState([[{ id: '', artist: { name: 'Cancion' }, album: { cover_big: rosa }, title: 'Artista' }]]);
    const [play, setPlay] = useState([{ musicaplay: { album: { cover_big: sonido }, artist: { name: 'Cancion' }, title: 'Artista' } }]);
    const [botonplay, setBotonPlay] = useState({ displaypause: 'none', displayplay: 'flex' })




    return (
        <div className='Alex'>

            <div className='Header'>
                <div id='header' className="Nav1">

                    <Nav />

                </div>
                <div className="Content1">
                    <Content botonplay={botonplay} setBotonPlay={setBotonPlay} play={play} setPlay={setPlay} musica={musica} setMusica={setMusica} buscar={buscar} setBuscar={setBuscar} user={user} setUser={setUser} count={count} setCount={setCount} />

                </div>
            </div>
            <div className='Footer'>
                <Footer botonplay={botonplay} setBotonPlay={setBotonPlay} musica={musica} play={play} setPlay={setPlay} className='Footer' />
            </div>
        </div >
    )
}
export default Componets;