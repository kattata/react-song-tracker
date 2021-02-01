import { useParams } from 'react-router-dom';
import harry from './img/harry.jpg';

const SongDetails = () => {
    const { id } = useParams();

    return (
        <div className="song-details">
            <div className="img-blur">
                <img src={harry} className="big-img" alt="" />
                <div className="img-blur-overlay"></div>
                <img src={harry} className="small-img" alt="" />
            </div>
            <h2>Sweet Creature</h2>
            <p>Harry Styles</p>
            <p>Harry Styles</p>
            <br />
            <p>Memory</p>
        </div>
    );
}

export default SongDetails;