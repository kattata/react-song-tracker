import { Link } from 'react-router-dom';

const SongPreview = ({ songs }) => {

    return (
        <div className="song-preview-list">
            {songs.map((song) => {
                return <Link to={`songs/${song.id}`} key={song.id}>
                    <div className="song-preview">
                        <img src={song.img} alt="" />
                        <div className="preview-details">
                            <h2>{song.title}</h2>
                            <h3>{song.artist}</h3>
                        </div>
                    </div>
                </Link>
            })}
        </div>
    );
}

export default SongPreview;