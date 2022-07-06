import { FaSearch } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa'
import { AiOutlineEllipsis } from 'react-icons/ai'
import ContentCard from './ContentCard.jsx'
import './Content.scss'
import React, { useRef, useState } from 'react';



function Content({ setMostrarGenero, mostrargenero, mostraralbum, setMostrarAlbum, mostrarartista, setMostrarArtista, mostrarcanciones, setMostrarCanciones, setGenero, genero, setColor, colorrgb, setColorRgb, ClickColor, color, reproduccion, setReproduccion, albums, setAlbums, botonplay, setBotonPlay, play, setPlay, musica, setMusica, buscar, setBuscar, count, setCount, setUser, user }) {
    const [a, setA] = useState(2);
    const [xy, setXY] = useState({ x: 0, y: 0 });
    const [el, setEL] = useState(null);

    const [heigth, setHeigth] = useState(220);
    const referencia = useRef(null);

    window.onload = () => {
        Lil();
        window.DZ.api(`artist/${buscar}/albums`, function (response) {




            albums[0] = response.data;
            setAlbums({ ...albums });
            setMostrarArtista('flex')

        });
    }
    function Buscar(e) {


        setBuscar(e.target.value.split(" ").join("-"))

        setA(2);
    }
    function handleAnswerChange(event) {
        if (event.key == 'Enter') {
            Lil();
        }

    }
    function Album() {


        play[0].musicaplay = musica[0][0];
        setPlay({ ...play });
        botonplay.displaypause = 'flex';
        botonplay.displayplay = 'none';
        setBotonPlay({ ...botonplay });


        window.DZ.player.playAlbum(`${musica[0][0].album.id}`);

    }
    function Albums() {
        setMostrarAlbum(mostraralbum == 'none' ? "flex" : "none")
        setMostrarCanciones(mostrarcanciones == 'none' ? "flex" : "none")

    }
    function ClickCambio(e) {
        el.click()


    }
    window.DZ.Event.subscribe('current_track', function (track, evt_name) {
        el.click()
    });
    function Canciones() {
        setMostrarAlbum(mostraralbum == 'none' ? "flex" : "none")
        setMostrarCanciones(mostrarcanciones == 'none' ? "flex" : "none")

    }

    function Lil() {
        if (a === 2) {
            setCount({ ...count })
            window.DZ.api('/user/me', function (response) {
                user.name = response.name;
                if (response.name === undefined) {
                    setUser({ ...user })

                }
            });

            window.DZ.api(`artist/${buscar}`, function (response) {
                console.log(buscar)
                if (response.id == undefined) {

                    window.DZ.api(`search/track?q=${buscar}`, function (response) {
                        console.log(response.data)
                        setHeigth(500)
                        musica[0] = response.data;
                        setMostrarArtista("none")

                        setMusica({ ...musica });
                        setMostrarAlbum('none')
                        setMostrarCanciones('flex')

                        document.getElementById('Musica').scrollTop = 0;

                    });
                } else {
                    document.getElementById('Musica').scrollTop = 0;

                    setHeigth(220)
                    setMostrarArtista('flex')

                    window.DZ.api(`artist/${response.id}/albums`, function (response) {
                        albums[0] = response.data;
                        setAlbums({ ...albums });

                    });
                    count[0].id = response.id;
                    count[0].image = response.picture_big;
                    count[0].name = response.name
                    count[0].fans = response.nb_fan;
                    setCount({ ...count })
                    window.DZ.api(`/artist/${count[0].id}/top?limit=100`, function (response) {
                        setCount({ ...count })

                        musica[0] = response.data;
                        setMusica({ ...musica });
                        count[0].nombrecancion = response.data;
                        setCount({ ...count })

                    });
                }

            })
        }

    }



    return (
        <div id="Musica2" className="ContentContainer">
            <div className="ContentSearch">
                <div className="ContentSearchIcon">
                    <input onKeyPress={handleAnswerChange} onChange={Buscar} placeholder='Buscar' type="text" className="ContentInput" />
                    <FaSearch onClick={Lil} className='FaSearch' />
                </div>
                <div className="ContentSearchUser">
                    <div className="ContentSearchUserIcon">
                        <FaUser className='FaUser' />
                    </div>
                    <div className="ContentSearchUserName">
                        <h2>{user.name}</h2>
                    </div>
                </div>
            </div>

            <div style={{ display: mostrarartista }} className="ContentPreview">
                <div className="ContentPreviewImage" style={{
                    backgroundImage: `url(${count[0].image})`
                }}>
                    <FaPlay onClick={Album} className='FaPlay' />
                </div>
                <div style={{ backgroundColor: color.colorartis }} className="ContentPreviewText">
                    <div className="ContentPreviewTextName">
                        <h3>{count[0].name}</h3>
                    </div>
                    <div className="ContentPreviewTextSeguidores">
                        <p>Lo Mejor de {count[0].name}<span>{count[0].fans} seguidores</span></p>
                    </div>

                    <div className="ContentPreviewTextIcons">
                        <div className="ContentPreviewTextIconsReproducir">
                            <button type="button" onClick={Album} className="Reprodcuir">Reproducir</button>
                        </div>
                        <div style={{ display: mostrarcanciones }} onClick={Albums} className="ContentPreviewTextIconsSeguir">
                            <button type="button" className="Seguir">Albums</button>
                        </div>
                        <div style={{ display: mostraralbum }} onClick={Canciones} className="ContentPreviewTextIconsSeguir">
                            <button type="button" className="Seguir">Canciones</button>
                        </div>
                        <div className="ContentPreviewTextIconsInfo">
                            <AiOutlineEllipsis />


                        </div>
                    </div>
                </div>
            </div>

            <div className="ContentCards">
                <div className="ContentCardsResult">
                    <h2>Resultados</h2>
                </div>
                <div style={{ display: mostrarcanciones, maxHeight: heigth }} id="Musica" onClick={ClickCambio} className="ContentCardsContainer">


                    {musica[0].map((number) =>

                        <ContentCard setColor={setColor} colorrgb={colorrgb} setColorRgb={setColorRgb} ClickColor={ClickColor} el={el} setEL={setEL} setXY={setXY} xy={xy} ref={referencia} reproduccion={reproduccion} setReproduccion={setReproduccion} mostrar={mostrarcanciones} key={number.id} botonplay={botonplay} setBotonPlay={setBotonPlay} number={number} setPlay={setPlay} play={play} nombre={number.title} image={number.album.cover_big} artist={number.artist.name} />
                    )}

                </div>
                <div style={{ display: mostraralbum, maxHeight: heigth }} onClick={ClickCambio} className="ContentCardsContainer">


                    {albums[0].map((number) =>

                        <ContentCard setColor={setColor} colorrgb={colorrgb} setColorRgb={setColorRgb} ClickColor={ClickColor} el={el} setEL={setEL} setXY={setXY} xy={xy} reproduccion={reproduccion} setReproduccion={setReproduccion} mostrar={mostrarcanciones} key={number.id} botonplay={botonplay} setBotonPlay={setBotonPlay} number={number} setPlay={setPlay} play={play} nombre={number.title} image={number.cover_big} artist={count[0].name} />
                    )}

                </div>
                <div style={{ display: mostrargenero }} id="Musica" onClick={ClickCambio} className="ContentCardsContainer">


                    {genero[0].map((number) =>

                        <ContentCard musica={musica} setMusica={setMusica} albums={albums} setAlbums={setAlbums} count={count} setCount={setCount} setBuscar={setBuscar} buscar={buscar} Lil={Lil} setMostrarGenero={setMostrarGenero} mostrargenero={mostrargenero} setMostrarAlbum={setMostrarAlbum} mostraralbum={mostraralbum} mostrarcanciones={mostrarcanciones} setMostrarCanciones={setMostrarCanciones} setMostrarArtista={setMostrarArtista} mostrarartista={mostrarartista} setColor={setColor} colorrgb={colorrgb} setColorRgb={setColorRgb} ClickColor={ClickColor} el={el} setEL={setEL} setXY={setXY} xy={xy} ref={referencia} reproduccion={reproduccion} setReproduccion={setReproduccion} mostrar={mostrarcanciones} key={number.id} botonplay={botonplay} setBotonPlay={setBotonPlay} number={number} setPlay={setPlay} play={play} nombre={number.name} image={number.picture_big} artist="Artist" />
                    )}

                </div>

            </div>
        </div>
    )
}
export default Content;