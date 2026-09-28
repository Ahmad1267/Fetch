import { createRoot } from "react-dom/client";
import "./index.css"
import Child from "./components/child";
import App from "./App";

let root = createRoot(document.getElementById("root"))
root.render(
 <App/>
)