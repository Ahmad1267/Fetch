import { createRoot } from "react-dom/client";
import Header from "./components/common/header";
import Home from "./components/pages/home";
import Footer from "./components/common/Footer";
import "./index.css"

const create = createRoot(document.getElementById("root"))
create.render(
    <>
    <Header/>
    <Home/>
    <Footer/>
    
</>
)
