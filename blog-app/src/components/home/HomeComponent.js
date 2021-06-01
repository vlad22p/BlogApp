import React, { useState } from "react";
import PostPreview from "../PostPreview";
import "./HomeComponent.css";

function HomeComponent(props) {

    return (
        <div className="home-main-wrapper">
            <div className="home-left-wrapper">
                <PostPreview></PostPreview>
            </div>
            <div className="home-right-wrapper">
                <div className="flex-column">
                    <div className="home-option">all posts option</div>
                    <div className="home-option">search posts option</div>
                </div>
                <div className="flex-column">
                    <div className="home-option">more/about option</div>
                    <div className="home-option">authentication opton</div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent;