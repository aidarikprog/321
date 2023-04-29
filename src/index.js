import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "../src/components/reset.css"
// import { BrowserRouter, HashRouter, RouterProvider } from "react-router-dom"
// import {router} from './App'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    {/* { <HashRouter> */}
      <App />
    {/* </HashRouter>} */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
)
// "homepage": "https://aidarikprog.github.io/yogaSite",
