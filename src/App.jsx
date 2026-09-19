import { useState } from "react";
import { BrowserRouter, Route, Router, Routes} from "react-router";
import Product from "./components/pages/Product";
import Home1 from "./components/pages/Home1";
import About from "./components/pages/About";
import { HiH1 } from "react-icons/hi2";
import RootLayout from "./components/common/Rootlayout";
import Login from "./components/pages/Login";

export default function App() {
  return (
<>
<BrowserRouter>
<Routes>
    <Route element={<RootLayout/>}>
    <Route path="/" element={<Home1/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/product" element={<Product/>}/>
    </Route>
    <Route path="login" element={<Login/>}/>
</Routes>
</BrowserRouter>
</>
  )
}