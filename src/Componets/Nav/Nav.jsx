import fox from './foxi.png';
import './Nav.scss';



function Nav() {
    return (
        <div className="NavContainer">
            <div className="NavPicture">
                <img src={fox} alt="" />
            </div>
            <div className="ListLibreria">
                <div className="H1">
                    <h1>Mi Librería</h1>

                </div>
                <ul>
                    <li>Recientes</li>
                    <li>Artistas</li>
                    <li>Álbums</li>
                    <li>Canciones</li>
                    <li>Estaciones</li>

                </ul>
            </div>
            <div className="ListPlaylist">
                <h1 className="H1">Playlist</h1>
                <ul>
                    <li>Metal</li>
                    <li>Para Bailar</li>
                    <li>Rock 90s</li>
                    <li>Baladas</li>
                </ul>
            </div>
        </div>
    )
}
export default Nav;