import './App.css';
import LoginButton from "./components/LoginButton";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Loader from "./components/home/Loader/Loader";
import BlogHeader from "./components/header/BlogHeader";
import BlogFooter from "./components/footer/BlogFooter";
import HomeComponent from "./components/home/HomeComponent";
import { useEffect, useState } from 'react';

function App() {

  const [isSignedIn, setSignIn] = useState(false);
  const [isLoading, setLoader] = useState(true);


  const getAllPosts = () => {
    fetch(
      "https://www.googleapis.com/blogger/v3/blogs/1619808215032981870/posts?key=AIzaSyDnd0083ibcmEQ445IZnVgONShVol8ezaQ&pageToken=CgkIChiD6J3Lmi8Q7tKz6tTfrb0W", {
      method: "GET"
    }
    ).then(response => response.json()
    ).then((result) => {
      console.log(result);
      setLoader(false);
    })
  }

  useEffect(getAllPosts);

  if(!isLoading) {
    return (
      <div id="root">
        <BrowserRouter>
          <BlogHeader></BlogHeader>
          <Switch>
            <Route>
              <HomeComponent isSignedIn={isSignedIn} />
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
