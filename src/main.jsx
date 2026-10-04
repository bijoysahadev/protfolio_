import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import About from '../Pages/About.jsx';
import Projects from '../Pages/Projects.jsx';
import Home from '../Pages/Home.jsx';
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
     <Routes>
      <Route  element={<App/>}>
 <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projetcs" element={<Projects/>} />
      </Route>
     
    </Routes>
  </BrowserRouter>,
)
