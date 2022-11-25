import React from "react"
import { createRoot } from "react-dom/client"
import Home from "./src/Home"

import "./global.scss"
function App() {
  return <Home></Home>
}
const container = document.getElementById("app")
const root = createRoot(container!)

root.render(<App />)
