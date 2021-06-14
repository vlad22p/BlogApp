import LoginButton from "./LoginButton";

function InitialLoginComponent(props) {
    return (
        <div className="login-main-wrapper">
            <div className="central-wrapper">
                <p>In order to gain access to all the features of the blog, like adding or removing posts, please sign in with the Google Account.</p>
                <LoginButton setWrongUser={props.setWrongUser} setSignIn={props.setSignIn}></LoginButton>
            </div>
        </div>
    )
}

export default InitialLoginComponent;