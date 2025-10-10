import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Layout from "./Components/Layout";
import Shop from "./Pages/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
