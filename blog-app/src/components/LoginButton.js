import React from "react";
import { GoogleLogin } from "react-google-login";

function LoginButton() {
    const responseSuccess = (response) => {
        console.log(response.accessToken);
        saveToken(response.accessToken);
    }

    const responseFailure = () => {
        console.log("failed");
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
                onFailure={responseFailure}
            ></GoogleLogin>
        </div>
    )
}

export default LoginButton;