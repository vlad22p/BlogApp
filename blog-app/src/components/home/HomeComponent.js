import React, { useState } from "react";
import PostPreview from "../PostPreview";
import NavOption from "./nav options/NavOption";
import AuthenticationOption from "./nav options/AuthenticationOption";
import "./HomeComponent.css";


function HomeComponent(props) {

    return (
        <div className="home-main-wrapper">
            <div className="home-left-wrapper">
                <PostPreview></PostPreview>
            </div>
            <nav className="home-right-wrapper">
                <div className="flex-column">
                    <NavOption title="All posts" />
                    <NavOption title="Search" />
                </div>
                <div className="flex-column">
                    <NavOption title="About" />
                    <AuthenticationOption isSignedIn={props.isSignedIn} />
                </div>
            </nav>
        </div>
    )
}

export default HomeComponent;