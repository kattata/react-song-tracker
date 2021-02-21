import SongPreview from "./SongPreview";
import plus from "../img/plus.svg";
import { Link } from "react-router-dom";

const Sidebar = ({ songs }) => {

    return (
        <div className="sidebar">
            <h3>Your Library</h3>
            {songs && <SongPreview songs={songs} />}
            <Link to='/addsong'>
                <button><img src={plus} alt="" />Add Song</button>
            </Link>
        </div>
    );
}

export default Sidebar;