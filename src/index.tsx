import { Outlet } from "react-router-dom"
import "./index.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}