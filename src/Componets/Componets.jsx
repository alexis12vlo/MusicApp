import Nav from './Nav/Nav.jsx';
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';
import './Componets.scss'
import React, { useState, useEffect } from 'react';
import rosa from './rosa.png'
import sonido from './sonido2.png'
function Componets() {
    const [count, setCount] = useState([{ name: '', fans: '1', id: '1', image: sonido, nombrecancion: [{ artist: { name: 'Cancion' }, album: { cover_big: rosa }, title: 'Artista' }], seguidores: '' }]);
    const [user, setUser] = useState({ name: 'User' });
    const [buscar, setBuscar] = useState(27);
    const [albums, setAlbums] = useState([[{ id: '', artist: 'Cancion', cover_big: rosa, title: 'Artista' }]]);
    const [musica, setMusica] = useState([[{ id: '', artist: { name: 'Cancion' }, album: { cover_big: rosa }, title: 'Artista' }]]);
    const [genero, setGenero] = useState([[{ id: '', artist: { name: 'Cancion' }, album: { cover_big: rosa }, title: 'Artista' }]]);
    const [play, setPlay] = useState([{ musicaplay: { album: { cover_big: sonido }, artist: { name: 'Cancion' }, title: 'Artista' } }]);
    const [botonplay, setBotonPlay] = useState({ displaypause: 'none', displayplay: 'flex' })
    const [reproduccion, setReproduccion] = useState(0)
    const [color, setColor] = useState({ colornav: 0, colorartis: 0 })
    const [colorrgb, setColorRgb] = useState(0)
    const [mostraralbum, setMostrarAlbum] = useState('none');
    const [mostrargenero, setMostrarGenero] = useState('none');
    const [mostrarcanciones, setMostrarCanciones] = useState('flex');
    const [mostrarartista, setMostrarArtista] = useState('flex');
    useEffect(() => {
        setMostrarAlbum('none')
        setMostrarCanciones('flex')
        setMostrarGenero('none')
    }, [buscar]);







    function Alternativo() {
        window.DZ.api(`genre/85/artists`, function (response) {
            console.log(response.data)
            genero[0] = response.data;
            setMostrarArtista('none')

            setGenero({ ...genero });
            setMostrarAlbum('none')
            setMostrarCanciones('none')
            setMostrarGenero('flex')
            document.getElementById('Musica2').scrollTop = 0;
        })
    }
    function Rock() {
        window.DZ.api(`genre/152/artists`, function (response) {
            console.log(response.data)
            genero[0] = response.data;
            setMostrarArtista('none')

            setGenero({ ...genero });
            setMostrarAlbum('none')
            setMostrarCanciones('none')
            setMostrarGenero('flex')
            document.getElementById('Musica2').scrollTop = 0;
        })
    }
    function Rap() {
        window.DZ.api(`genre/116/artists`, function (response) {
            console.log(response.data)
            genero[0] = response.data;
            setMostrarArtista('none')

            setGenero({ ...genero });
            setMostrarAlbum('none')
            setMostrarCanciones('none')
            setMostrarGenero('flex')
            document.getElementById('Musica2').scrollTop = 0;
        })
    }

    function ClickColor() {

        color.colorartis = "rgb(" + colorrgb[0] + "," + colorrgb[1] + "," + colorrgb[2] + ",0.5)";

        color.colornav = `linear-gradient(to left,rgb(33, 76, 76) 2%,${color.colorartis})`;

        setColor({ ...color })




    }
    function Latino() {
        window.DZ.api(`genre/197/artists`, function (response) {
            console.log(response.data)
            genero[0] = response.data;
            setMostrarArtista('none')

            setGenero({ ...genero });
            setMostrarAlbum('none')
            setMostrarCanciones('none')
            setMostrarGenero('flex')
            document.getElementById('Musica2').scrollTop = 0;
        })
    }


    return (
        <div className='Alex'>

            <div className='Header'>
                <div style={{ backgroundColor: color.colorartis }} id='header' className="Nav1">

                    <Nav Latino={Latino} Alternativo={Alternativo} Rock={Rock} Rap={Rap} ClickColor={ClickColor} setGenero={setGenero} genero={genero} />

                </div>
                <div style={{ background: color.colornav }} className="Content1">
                    <Content setMostrarGenero={setMostrarGenero} mostrargenero={mostrargenero} setMostrarAlbum={setMostrarAlbum} mostraralbum={mostraralbum} mostrarcanciones={mostrarcanciones} setMostrarCanciones={setMostrarCanciones} setMostrarArtista={setMostrarArtista} mostrarartista={mostrarartista} setGenero={setGenero} genero={genero} colorrgb={colorrgb} setColorRgb={setColorRgb} ClickColor={ClickColor} color={color} reproduccion={reproduccion} setReproduccion={setReproduccion} albums={albums} setAlbums={setAlbums} botonplay={botonplay} setBotonPlay={setBotonPlay} play={play} setPlay={setPlay} musica={musica} setMusica={setMusica} buscar={buscar} setBuscar={setBuscar} user={user} setUser={setUser} count={count} setCount={setCount} />

                </div>
            </div>
            <div style={{ backgroundColor: color.colorartis }} className='Footer'>
                <Footer setColor={setColorRgb} ClickColor={ClickColor} reproduccion={reproduccion} setReproduccion={setReproduccion} botonplay={botonplay} setBotonPlay={setBotonPlay} musica={musica} play={play} setPlay={setPlay} className='Footer' />
            </div>
        </div >
    )
}
export default Componets;