import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const SongDetails = () => {
    const { id } = useParams();
    const { data: song } = useFetch('http://localhost:8000/songs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/songs/' + song.id, {
            method: "DELETE"
        })
            .then(
                history.push('/')
            )
    }

    return (
        <div className="song-details">
            {song && (
                <article>
                    <div className="img-blur">
                        <img src={song.img} className="big-img" alt="" />
                        <div className="img-blur-overlay"></div>
                        <img src={song.img} className="small-img" alt="" />
                    </div>
                    <div className="song-info">
                        <h2 className="title">{song.title}</h2>
                        <p className="artist">{song.artist}</p>
                        <p className="album">{song.album}</p>
                        <br />
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </article>
            )
            }
        </div>
    );
}

export default SongDetails;