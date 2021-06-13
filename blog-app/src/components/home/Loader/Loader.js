import blogLogo from "../../../images/blogLogo.png";
import "./Loader.css";

function Loader() {
    return (
        <div className="loader">
            <img src={blogLogo} alt="Blog Project"></img>
        </div>
    )
}

export default Loader;