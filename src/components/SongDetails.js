import { useParams, useHistory } from 'react-router-dom';
import firebase from '../firebase';
import { useEffect, useState } from 'react';


const SongDetails = ({ songsRef }) => {
    const { id } = useParams();

    const [song, setSong] = useState(null)

    useEffect(() => {
        songsRef.doc(`${id}`).get().then((doc) => {
            setSong(doc.data())
        })
    }, [songsRef, id])


    const history = useHistory();

    const handleDelete = () => {
        songsRef.doc(`${id}`).delete().then(() => {
            history.push("/");
        })
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