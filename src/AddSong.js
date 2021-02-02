import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddSong = () => {

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [img, setImg] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSong = { title, artist, album, img };
        console.log(e);

        fetch('http://localhost:8000/songs', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newSong)
        })
            .then(
                history.push('/')
            )
    }

    return (
        <div className="add-song">
            <form>
                <h2>Add song</h2>
                <label>Title</label>
                <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Artist</label>
                <input required type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
                <label>Album</label>
                <input required type="text" value={album} onChange={(e) => setAlbum(e.target.value)} />
                <label>Image</label>
                {/* <input required type="file" value={img} onChange={(e) => setImg(e.target.value)} />*/}
                <input required type="text" value={img} onChange={(e) => setImg(e.target.value)} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div >
    );
}

export default AddSong;