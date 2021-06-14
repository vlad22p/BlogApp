import { Link, withRouter } from "react-router-dom";
import LoginGraphic from "./nav options svg/LoginGraphic";
import LogoutGraphic from "./nav options svg/LogoutGraphic";
import "./NavOption.css";

function AuthenticationOption(props) {

    function logout() {
        localStorage.removeItem("accessToken");
        props.setSignIn(false);
    }

    if (props.isSignedIn === false) {
        return (
            <Link to="/login">
                <div className="login-option home-option">
                    <div className="option-title">
                        Log in
                    </div>
                    <div className="option-graphic">
                        <LoginGraphic />
                    </div>
                </div>
            </Link>
        )
    } else {
        return (
            <div className="logout-option home-option" onClick={logout}>
                <div className="option-title">
                    Log out
                </div>
                <div className="option-graphic">
                    <LogoutGraphic />
                </div>
            </div>
        )
    }
}

export default AuthenticationOption;