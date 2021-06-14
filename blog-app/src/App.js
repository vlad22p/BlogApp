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
import LoginComponent from "./components/login/LoginComponent";
import { useEffect, useState } from 'react';

function App() {

  const [isSignedIn, setSignIn] = useState(false);
  const [isLoading, setLoader] = useState(true);
  const [postItems, setPostItems] = useState([]);
  const getPostsUrl = new URL("https://www.googleapis.com/blogger/v3/blogs/1619808215032981870/posts")
  const myKey = "AIzaSyDnd0083ibcmEQ445IZnVgONShVol8ezaQ";


  function getAllPosts() {
    getPostsUrl.searchParams.set("key", myKey);
    getPostsUrl.searchParams.set("maxResults", 500);
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

  function sliceItems(array) {
    const sliced = [];
    for (let i = 0; i < array.length; i += 10) {
      let temporary = array.slice(i, i + 10);
      sliced.push(temporary);
    }
    console.log(sliced);
  }

  useEffect(getAllPosts, []);
  useEffect(checkLogin);

  if (!isLoading) {
    return (
      <div id="root">
        <BrowserRouter>
          <BlogHeader></BlogHeader>
          <Switch>
            <Route path="/posts">
              <PostsComponent />
            </Route>
            <Route path="/login">
              <LoginComponent setSignIn={setSignIn} />
            </Route>
            <Route path="/">
              <HomeComponent sliceItems={sliceItems} postItems={postItems} isSignedIn={isSignedIn} setSignIn={setSignIn} />
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
