import './App.css';
import LoginButton from "./components/LoginButton";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import BlogHeader from "./components/header/BlogHeader";
import BlogFooter from "./components/footer/BlogFooter";
import HomeComponent from "./components/home/HomeComponent";
import { useState } from 'react';

function App() {

  const [isSignedIn, setSignIn] = useState(false);

  return (
    <div id="root">
      <BrowserRouter>
        <BlogHeader></BlogHeader>
        <Switch>
          <Route>
            <HomeComponent isSignedIn={isSignedIn}/>
          </Route>
        </Switch>
        <BlogFooter></BlogFooter>
      </BrowserRouter>
    </div>
  )
}

export default App;
