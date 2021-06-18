import React from "react";
import { useState, useEffect } from "react";
import { myKey, getPostsUrl } from "../../App";

function PostsComponent(props) {

    const [postList, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    function getPosts() {
        getPostsUrl.searchParams.set("key", myKey);
        getPostsUrl.searchParams.set("endDate", getFormatedDate(new Date()));
        getPostsUrl.searchParams.set("maxResults", 10)
        fetch(
            getPostsUrl, {
            method: "GET"
        }
        ).then(response => response.json()
        ).then((result) => {
            console.log("de aici");
            console.log(result);
            setPostList(result.items);
        }).finally(
            setIsLoading(false)
        )
    }

    function renderPost(postItem) {
        return <div dangerouslySetInnerHTML={{ __html: postItem.content }} />
    }

    function getFormatedDate(givenDate) {
        const year = givenDate.getFullYear();
        const month = rfcFormat((givenDate.getMonth() + 1).toString());
        const day = rfcFormat(givenDate.getDate().toString());
        const hour = rfcFormat(givenDate.getHours().toString());
        const minute = rfcFormat(givenDate.getMinutes().toString());
        const second = rfcFormat(givenDate.getSeconds().toString());
        return (year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "Z")
    }

    function rfcFormat(timeString) {
        if (timeString.length == 1) {
            timeString = "0" + timeString;
        }
        return timeString
    }


    useEffect(getPosts, []);

    if (isLoading) {
        return (
            <h1>LOADING</h1>
        )
    } else {
        return (
            <div>
                hey
            </div>
        )
    }
}

export default PostsComponent;