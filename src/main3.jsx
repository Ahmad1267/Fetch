import { createRoot } from "react-dom/client";
import "./index.css"
import Home1 from "./components/pages/Home1";

let root = createRoot(document.getElementById("root"))
root.render(
    <Home1/>
)