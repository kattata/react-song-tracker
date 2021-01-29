import harry from './img/harry.jpg';

const SongPreview = () => {
    return (
        <div className="song-preview">
            <img src={harry} />
            <div className="preview-details">
                <h2>Sweet Creature</h2>
                <h3>Harry Styles</h3>
            </div>
        </div>
    );
}

export default SongPreview;