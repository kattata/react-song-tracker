import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <h2>Trackr</h2>
            </Link>
            <div className="profile">
                <p>Kasia</p>
                {/* <div className="profile-pic"></div> */}
            </div>
        </div>
    );
}

export default Navbar;