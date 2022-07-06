import { FaPlay } from 'react-icons/fa'
import { AiOutlineMore } from 'react-icons/ai'
import React, { useState, useEffect } from 'react';
import { FastAverageColor } from 'fast-average-color';


function ContentCard({ count, setCount, musica, setMusica, albums, setAlbums, setBuscar, buscar, Lil, setMostrarGenero, mostrargenero, mostraralbum, setMostrarAlbum, mostrarartista, setMostrarArtista, mostrarcanciones, setMostrarCanciones, setColor, color, colorrgb, setColorRgb, ClickColor, el, setEL, xy, setXY, reproduccion, setReproduccion, mostrar, botonplay, setBotonPlay, play, number, setPlay, nombre, artist, image }) {


    const [mostrarplay, setMostrarPlay] = useState('flex');
    const [mostrarbarras, setMostrarBarras] = useState('none');


    function PlayBarras(e) {

        setMostrarPlay(mostrarplay == 'none' ? "flex" : "none")
        setMostrarBarras(mostrarbarras == 'none' ? "flex" : "none")
    }
    function PlayBarrasOver(e) {
        ClickColor();

        setEL(document.elementFromPoint(e.clientX, e.clientY));



    }
    function PlayBarrasSalir() {




    }
    function Play() {

        if (mostrargenero == "flex") {
            document.getElementById('Musica2').scrollTop = 0;
            console.log(document.getElementById('Musica2').scrollTop.top)


            setMostrarArtista('flex')
            setMostrarGenero('none')
            setMostrarCanciones('flex')
            console.log(nombre)

            nombre = nombre.split(" ").join("-");
            console.log(nombre)


            window.DZ.api(`artist/${nombre.split(" ").join("-")}`, (response) => {
                if (response.id != undefined) {
                    window.DZ.api(`artist/${response.id}/albums`, function (response) {
                        albums[0] = response.data;
                        setAlbums({ ...albums });

                    });
                    count[0].id = response.id;
                    count[0].image = response.picture_big;
                    count[0].name = response.name;
                    count[0].fans = response.nb_fan;
                    setCount({ ...count });

                    window.DZ.api(`/artist/${count[0].id}/top?limit=100`, function (response) {
                        setCount({ ...count });

                        musica[0] = response.data;
                        setMusica({ ...musica });
                        count[0].nombrecancion = response.data;
                        setCount({ ...count });
                        console.log('kaksa')


                    });
                }

            })








        } else {

            setMostrarPlay(mostrarplay == 'none' ? "flex" : "none")
            setMostrarBarras(mostrarbarras == 'none' ? "flex" : "none")
            if (mostrar == 'flex') {
                play[0].musicaplay = number;
                play[0].musicaplay.artist.name = artist;
                window.DZ.Event.subscribe('current_track', function (track, evt_name) {
                    play[0].musicaplay.artist.name = track.track.artist.name
                });
                setPlay({ ...play });
                window.DZ.player.playTracks([`${play[0].musicaplay.id}`]);
                botonplay.displaypause = 'flex';
                botonplay.displayplay = 'none';
                setBotonPlay({ ...botonplay });
                setReproduccion(0);
                window.DZ.Event.subscribe('player_position', function (args, evt_name) {
                    setReproduccion((args[0] * 100) / args[1])
                });

            } else {
                window.DZ.player.playAlbum(`${number.id}`);

                window.DZ.Event.subscribe('current_track', function (track, evt_name) {

                    console.log(track);
                    play[0].musicaplay.artist.name = track.track.title;
                    setPlay({ ...play });

                });


                play[0].musicaplay.title = number.title;
                play[0].musicaplay.album.cover_big = number.cover_big;
                setPlay({ ...play });
                botonplay.displaypause = 'flex';
                botonplay.displayplay = 'none';

                setBotonPlay({ ...botonplay });



                setReproduccion(0);


            }
            const fac = new FastAverageColor();
            fac.getColorAsync(image)
                .then(color => {
                    ClickColor();

                    setColorRgb(color.value)
                    setColor(color.value);


                })
                .catch(e => {



                });



        }

    }



    return (
        <div className="Card">
            <div id="imagen" className="CardPreviewImage" style={{
                backgroundImage: `url(${image})`
            }} >
                <AiOutlineMore className='AiOutlineMore' />
                <FaPlay style={{ display: mostrarplay }} onClick={Play} className='FaPlay2' />
                <div style={{ display: mostrarbarras }} onClick={PlayBarras} onMouseOver={PlayBarrasOver} className="Barras">
                    <svg className="BarrasStyle" onMouseOut={PlayBarrasSalir} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect class="eq-bar eq-bar--1" x="4" y="4" width="3.7" height="8" />
                        <rect class="eq-bar eq-bar--2" x="10.2" y="4" width="3.7" height="16" />
                        <rect class="eq-bar eq-bar--3" x="16.3" y="4" width="3.7" height="11" />
                    </svg>

                </div>
            </div>
            <div className="CardTitles">
                <h3>{nombre}</h3>
                <p>{artist}</p>
            </div>
        </div>
    )
}
export default ContentCard;