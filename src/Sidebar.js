import SongPreview from "./SongPreview";
import useFetch from "./useFetch";

const Sidebar = () => {

    const { data: songs } = useFetch("http://localhost:8000/songs");

    return (
        <div className="sidebar">
            <h3>Your Library</h3>
            {songs && <SongPreview songs={songs} />}
        </div>
    );
}

export default Sidebar;