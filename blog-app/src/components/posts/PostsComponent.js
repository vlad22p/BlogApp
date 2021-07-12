import React from "react";
import { useState, useEffect } from "react";
import { myKey, getPostsUrl } from "../../App";
import DisplayedPostList from "./DisplayedPostList";
import PostNavbar from "./PostNavbar";

function PostsComponent(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [postList, setPostList] = useState([]);
    const [isNextPage, setIsNextPage] = useState();
    const [isPreviousPage, setIsPreviousPage] = useState(false);
    const [pageTokens, setPageTokens] = useState([]);
    const [pageIndex, setPageIndex] = useState(-1);


    function getFirstPage() {

        getPostsUrl.searchParams.set("key", myKey);
        getPostsUrl.searchParams.set("maxResults", 7);

        fetch(
            getPostsUrl, {
            method: "GET"
        }
        ).then(response => response.json()
        ).then(result => {
            setPageTokens([result.nextPageToken]);
            manageNextOption(result.nextPageToken);
            setPostList(result.items);
        }).finally(
            setIsLoading(false)
        )
    }

    function getNextPage() {

        getPostsUrl.searchParams.set("pageToken", pageTokens[pageIndex + 1]);

        fetch(
            getPostsUrl, {
            method: "GET"
        }
        ).then(response => response.json()
        ).then(result => {
            setPostList(result.items);
            setIsPreviousPage(true);
            manageNextOption(result.nextPageToken);
            managePageTokens(result.nextPageToken);
            setPageIndex((pageIndex) => {
                return pageIndex + 1
            })
        });
    }

    function getPreviousPage() {

        manageBackOption();

        fetch(
            getPostsUrl, {
            method: "GET"
        }
        ).then(response => response.json()
        ).then(result => {
            setPostList(result.items);
            setPageIndex(pageIndex => {
                return pageIndex - 1
            })
        })
    }

    function manageBackOption() {
        setIsNextPage(true);
        if (pageIndex == 0) {
            getPostsUrl.searchParams.delete("pageToken");
            setIsPreviousPage(false);
        } else {
            getPostsUrl.searchParams.set("pageToken", pageTokens[pageIndex - 1]);
        }
    }

    function managePageTokens(pageToken) {
        if (pageToken && !pageTokens.includes(pageToken)) {
            setPageTokens(pageTokens => {
                return [...pageTokens, pageToken]
            })
        }
    }

    function manageNextOption(pageToken) {
        if (pageToken) {
            setIsNextPage(true);
        } else {
            setIsNextPage(false);
        }
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
        if (timeString.length === 1) {
            timeString = "0" + timeString;
        }
        return timeString
    }


    useEffect(getFirstPage, []);

    if (isLoading) {
        return (
            <h1>LOADING</h1>
        )
    } else {
        return (
            <div>
                <button onClick={() => { console.log("isnextpage" + isNextPage + "   " + "ispreviouspage" + isPreviousPage) }}>Page TOKENS</button>
                <PostNavbar
                    isNextPage={isNextPage}
                    isPreviousPage={isPreviousPage}
                    getPreviousPage={getPreviousPage}
                    getNextPage={getNextPage}></PostNavbar>
                <DisplayedPostList postList={postList} />
            </div>
        )
    }
}

export default PostsComponent;