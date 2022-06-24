import { FaSearch } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa'
import { AiOutlineEllipsis } from 'react-icons/ai'
import ContentCard from './ContentCard.jsx'
import './Content.scss'
import React, { useState } from 'react';



function Content({ botonplay, setBotonPlay, play, setPlay, musica, setMusica, buscar, setBuscar, count, setCount, setUser, user }) {
    const [a, setA] = useState(1);


    function Buscar(e) {
        setBuscar(e.target.value)
        console.log(e.target.value)
        setA(2);
    }
    function handleAnswerChange(event) {
        if (event.key == 'Enter') {
            Lil();
        }

    }
    function Album() {
        console.log(musica[0][0].album.id);



        botonplay.displaypause = 'flex';
        botonplay.displayplay = 'none';
        setBotonPlay({ ...botonplay });


        window.DZ.player.playAlbum(`${musica[0][0].album.id}`);

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
                if (response.id == undefined) {
                    console.log('existe');
                    alert('Ingrese un Artista')
                } else {
                    console.log('Noexiste');


                    console.log("Name of user id 5", response);
                    count[0].id = response.id;
                    count[0].image = response.picture_big;
                    count[0].name = response.name
                    count[0].fans = response.nb_fan;
                    setCount({ ...count })
                    window.DZ.api(`/artist/${count[0].id}/top?limit=50`, function (response) {
                        console.log("tracks", response.data);
                        setCount({ ...count })
                        console.log(musica[0]);

                        musica[0] = response.data;
                        setMusica({ ...musica });
                        console.log(musica[0]);
                        count[0].nombrecancion = response.data;
                        setCount({ ...count })

                    });
                }

            })
        }

    }



    return (
        <div className="ContentContainer">
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

            <div className="ContentPreview">
                <div className="ContentPreviewImage" style={{
                    backgroundImage: `url(${count[0].image})`
                }}>
                    <FaPlay onClick={Album} className='FaPlay' />
                </div>
                <div className="ContentPreviewText">
                    <div className="ContentPreviewTextName">
                        <h3>{count[0].name}</h3>
                    </div>
                    <div className="ContentPreviewTextSeguidores">
                        <p>Lo Mejor de {count[0].name} <span>{count[0].fans} seguidores</span></p>
                    </div>
                    <div className="ContentPreviewTextDescription">
                        <p>Click para Activar Permisos =></p>
                    </div>
                    <div className="ContentPreviewTextIcons">
                        <div className="ContentPreviewTextIconsReproducir">
                            <button type="button" onClick={Album} className="Reprodcuir">Reproducir</button>
                        </div>
                        <div className="ContentPreviewTextIconsSeguir">
                            <button type="button" className="Seguir">Seguir</button>
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
                <div className="ContentCardsContainer">


                    {musica[0].map((number) =>

                        <ContentCard botonplay={botonplay} setBotonPlay={setBotonPlay} number={number} setPlay={setPlay} play={play} nombre={number.title} image={number.album.cover_big} artist={number.artist.name} />
                    )}

                </div>
            </div>
        </div>
    )
}
export default Content;