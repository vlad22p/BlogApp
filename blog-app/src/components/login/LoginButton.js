import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";

function LoginButton(props) {

    let history = useHistory();

    const responseSuccess = (response) => {
        console.log(response);
        if (response.profileObj.email === "vladpopdev@gmail.com") {
            saveToken(response.tokenObj.access_token);
            props.setSignIn(true);
            history.push("/");
        } else {
            props.setWrongUser(true);
        }
    }

    const saveToken = (token) => {
        localStorage.setItem("accessToken", token);
    }

    return (
        <div>
            <GoogleLogin
                clientId="2720527248-n5p47glnsq12vdmn05cpftujt83sf4if.apps.googleusercontent.com"
                scope="https://www.googleapis.com/auth/blogger"
                onSuccess={responseSuccess}
            ></GoogleLogin>
        </div>
    )
}

export default LoginButton;