import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"
import './App.css'
import Posts from './components/Post';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {


  return (
    <>
    <BrowserRouter>
    <Navigation />
    <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route path="/socialmedia" element={<Posts/>} />
       </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
