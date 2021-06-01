import React from "react";
import blogLogo from "../../images/blogLogo.png";
import "./BlogHeader.css";

function BlogHeader() {
    return (
        <div className="header-wrapper">
            <img src={blogLogo}></img>
        </div>
    )
}

export default BlogHeader;