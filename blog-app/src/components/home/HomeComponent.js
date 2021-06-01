import React, { useState } from "react";
import SignedInHome from "./SignedInHome";
import NotSignedInHome from "./NotSignedInHome";

function HomeComponent(props) {

    if(!props.isSignedIn) {
        return(
            <NotSignedInHome></NotSignedInHome>
        )
    } else {
        return(
            <SignedInHome></SignedInHome>
        )
    }
}

export default HomeComponent;