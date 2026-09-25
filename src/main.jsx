import { createRoot } from "react-dom/client";
import "./index.css"
import Child from "./components/child";

let root = createRoot(document.getElementById("root"))
root.render(
 <Child/>
)