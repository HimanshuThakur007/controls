import React, { useState, useEffect } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./Themes/useDarkMode"
import { GlobalStyles } from "./Themes/globalStyles";
import { lightTheme, darkTheme } from "./Themes/themes";
import Toggle from "./Themes/Toggler";
import Navbar from "./Components/SideNavbar";
import "./App.css";
import Home from "./Components/Home";
import ImageGrid from "./Components/ImageGrid";
import Model from "./Components/Model";
import Graph from "./Components/Graph";
import TopNav from "./Components/TopNav";
import Footer from "./Components/Footer";

const App = (props) => {
  
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;


if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <>
      <BrowserRouter>
      <GlobalStyles/> 
      
      {/* <Navbar/> */}
      <TopNav/>
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <Routes>
        <Route exact path="/" element ={<Home/>}/>
        <Route path = '/graph' element = {<Graph/>} />
        <Route path = "/imagegrid" element = {<ImageGrid/>}/>
        <Route path = "/model" element = {<Model/>} />

      </Routes>
      
      </BrowserRouter>
      <Footer/>
      
     
    </>
    {/* <div className="toggel_button"> */}
      
      {/* </div> */}
    </ThemeProvider>
    
  )
}

export default App