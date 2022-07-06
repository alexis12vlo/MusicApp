import { FaPlay } from 'react-icons/fa'
import { IoPlaySkipBackSharp } from 'react-icons/io5'
import { IoPlaySkipForwardSharp } from 'react-icons/io5'
import { IoMdVolumeOff } from 'react-icons/io'
import { BsPauseFill } from 'react-icons/bs'
import './Footer.scss'
import React, { useState } from 'react';
import rosa from '../sonido2.png'


function Footer({ reproduccion, setReproduccion, botonplay, setBotonPlay, play, setPlay }) {
    const [volumen, setState] = useState(50)

    function handleClick(value) {

        setState(value.target.value);
        window.DZ.player.setVolume(volumen)
    }
    function handleClickReproduccion(value) {
        reproduccion = value.target.value
        setReproduccion(value.target.value)
        window.DZ.player.seek(value.target.value)
    }
    function Pause() {
        window.DZ.player.pause()
        botonplay.displayplay = 'flex';
        botonplay.displaypause = 'none';
        setBotonPlay({ ...botonplay });

    }
    function Play() {

        console.log(play[0].musicaplay.id);
        window.DZ.player.play()
        botonplay.displaypause = 'flex';
        botonplay.displayplay = 'none';
        setBotonPlay({ ...botonplay });

    }
    function Adelante() {
        play[0].musicaplay.artist.name = window.DZ.player.getCurrentTrack().title;
        setReproduccion(0);

        window.DZ.player.next()
        setPlay({ ...play });
    }
    return (
        <div className="FooterContainer">
            <div className="FooterSongReproduccionInput">
                <input value={reproduccion} onChange={handleClickReproduccion} type="range" />
            </div>
            <div className="FooterReproductor">
                <div className="FooterSong">
                    <div className="FooterSongImage" style={{
                        backgroundImage: `url(${play[0].musicaplay.album.cover_big}`, backgroundColor: '#EB5757'
                    }} >


                    </div>
                    <div className="FooterSongText">
                        <h3>{play[0].musicaplay.title}</h3>
                        <p>{play[0].musicaplay.artist.name}</p>
                    </div>
                </div>
                <div className="FooterSongIcons">
                    <div className="FooterSongAtrasIcon">
                        <IoPlaySkipBackSharp onClick={window.DZ.player.prev} className='AtrasIcon' />
                    </div>
                    <div onClick={Play} style={{ display: botonplay.displayplay }} value="Play" className="FooterSongPlayIcon">
                        <FaPlay className='FaPlay3' />
                    </div>
                    <div onClick={Pause} style={{ display: botonplay.displaypause }} value="Play" className="FooterSongPausedIcon">
                        <BsPauseFill className='FaPlay4' />
                    </div>
                    <div className="FooterSongAdelanteIcon">
                        <IoPlaySkipForwardSharp onClick={Adelante} className='AdelanteIcon' />
                    </div>
                </div>

                <div className="FooterSongVolumen">
                    <div className="FooterSongVolumenInput">
                        <input value={volumen} onChange={handleClick} type="range" />
                    </div>
                    <div className="FooterSongVolumenIcon">
                        <IoMdVolumeOff onClick={window.DZ.player.setMute} className='Volumen' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;