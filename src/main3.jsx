import { createRoot } from "react-dom/client";
import "./index.css"
import App from "./App";
import Home1 from "./components/pages/Home1";
import About from "./components/pages/About";
import Product from "./components/pages/Product";

let root = createRoot(document.getElementById("root"))
root.render(
 <App/>
)