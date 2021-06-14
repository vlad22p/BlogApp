import { useState } from "react";
import InitialLoginComponent from "./InitialLoginComponent";

function LoginComponent(props) {

    const [wrongUser, setWrongUser] = useState(false);

    if (!wrongUser) {
        return (
            <InitialLoginComponent setWrongUser={setWrongUser} setSignIn={props.setSignIn} />
        )
    } else {
        return (
            <div>sorry </div>
        )
    }
}

export default LoginComponent;