import { FaPlay } from 'react-icons/fa'
import { AiOutlineMore } from 'react-icons/ai'
import React, { useState } from 'react';


function ContentCard({ botonplay, setBotonPlay, play, number, setPlay, nombre, artist, image }) {
    function Play() {
        play[0].musicaplay = number;
        setPlay({ ...play });
        console.log(play[0].musicaplay.id);
        window.DZ.player.playTracks([`${play[0].musicaplay.id}`]);
        console.log(botonplay);
        botonplay.displaypause = 'flex';
        botonplay.displayplay = 'none';
        setBotonPlay({ ...botonplay });

    }


    return (
        <div className="Card">
            <div className="CardPreviewImage" style={{
                backgroundImage: `url(${image})`
            }} >
                <AiOutlineMore className='AiOutlineMore' />
                <FaPlay onClick={Play} className='FaPlay2' />
            </div>
            <div className="CardTitles">
                <h3>{nombre}</h3>
                <p>{artist}</p>
            </div>
        </div>
    )
}
export default ContentCard;