import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from ".";
import Home from "./screens/Home";
import About from "./screens/About";
import Cartigrace from "./screens/cartigrace";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cartigras" element={<Cartigrace/>} />
        </Route>
    )
)