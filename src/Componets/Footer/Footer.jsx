import { FaPlay } from 'react-icons/fa'
import { IoPlaySkipBackSharp } from 'react-icons/io5'
import { IoPlaySkipForwardSharp } from 'react-icons/io5'
import { BsFillVolumeOffFill } from 'react-icons/bs'
import { BsPauseFill } from 'react-icons/bs'
import './Footer.scss'
import React, { useState } from 'react';
import rosa from '../sonido2.png'


function Footer({ botonplay, setBotonPlay, play, setPlay }) {
    const [volumen, setState] = useState(50)

    function handleClick(value) {
        console.log(value)
        setState(value.target.value);
        window.DZ.player.setVolume(volumen)
    }
    function Pause() {
        console.log(play[0].musicaplay.id);
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
    return (
        <div className="FooterContainer">
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
                    <IoPlaySkipForwardSharp onClick={window.DZ.player.next} className='AdelanteIcon' />
                </div>
            </div>

            <div className="FooterSongVolumen">
                <div className="FooterSongVolumenInput">
                    <input value={volumen} onChange={handleClick} type="range" />
                </div>
                <div className="FooterSongVolumenIcon">
                    <BsFillVolumeOffFill onClick={window.DZ.player.setMute} className='Volumen' />
                </div>
            </div>
        </div>
    )
}
export default Footer;