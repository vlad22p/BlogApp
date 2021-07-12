import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Loader from "./components/home/Loader/Loader";
import BlogHeader from "./components/header/BlogHeader";
import BlogFooter from "./components/footer/BlogFooter";
import HomeComponent from "./components/home/HomeComponent";
import PostsComponent from "./components/posts/PostsComponent";
import FullPost from "./components/posts/FullPost";
import LoginComponent from "./components/login/LoginComponent";
import { useEffect, useState } from 'react';

export const myBlogId = "1619808215032981870";
export const myKey = "AIzaSyDnd0083ibcmEQ445IZnVgONShVol8ezaQ";
export const getPostsUrl = new URL("https://www.googleapis.com/blogger/v3/blogs/" + myBlogId + "/posts")

function App() {

  const [isSignedIn, setSignIn] = useState(false);
  const [isLoading, setLoader] = useState(true);
  const [postItems, setPostItems] = useState([]);

  function getRecentPosts() {
    getPostsUrl.searchParams.set("key", myKey);
    getPostsUrl.searchParams.set("maxResults", 5);
    fetch(
      getPostsUrl, {
      method: "GET"
    }
    ).then(response => response.json()
    ).then((result) => {
      console.log(result)
      setPostItems(result.items);
    }).finally(
      setLoader(false)
    )
  }

  function checkLogin() {
    if (localStorage.getItem("accessToken")) {
      setSignIn(true);
    }
  }

  useEffect(checkLogin);
  useEffect(getRecentPosts, [])

  if (!isLoading) {
    return (
      <div id="root">
        <BrowserRouter>
          <BlogHeader></BlogHeader>
          <Switch>
            <Route path="/posts/:id">
              <FullPost></FullPost>
            </Route>
            <Route path="/posts">
              <PostsComponent />
            </Route>
            <Route path="/login">
              <LoginComponent setSignIn={setSignIn} />
            </Route>
            <Route path="/">
              <HomeComponent postItems={postItems} isSignedIn={isSignedIn} setSignIn={setSignIn} />
            </Route>
          </Switch>
          <BlogFooter></BlogFooter>
        </BrowserRouter>
      </div>
    )
  } else {
    return (
      <Loader></Loader>
    )
  }
}

export default App;
