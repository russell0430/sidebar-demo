import React, { useState, useEffect } from "react"
import "./style.scss"
const choices: number[] = [1, 2, 3, 4]
function Home() {
  const [isShow, setIsShow] = useState(false)
  const toggle = () => {
    setIsShow((v) => !v)
  }
  return (
    <div className="main">
      <nav className={`sidebar ${isShow ? "" : "close"}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src="/assets/pic.jpg" alt="pic" />
            </span>
            <div className="text logo-text">
              <span className="name">Phoenix</span>
              <span className="profession">Web Developer</span>
            </div>
          </div>
          <i
            className={`toggle icon-toggle-${
              isShow ? "left" : "right"
            } iconfont`}
            onClick={toggle}
          ></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className="icon-searchlist iconfont"></i>
              <input type="text" placeholder="search..." />
            </li>
            <ul className="menu-links">
              {choices.map((v) => (
                <li className="nav-link" key={v}>
                  <a href="">
                    <i className="iconfont icon-jinbi"></i>
                    <span className="text">choice {v}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bottom-content">
            <li>
              <a href="">
                <i className="icon-Moon iconfont dark-mode"></i>
                <span className="text">dark mode</span>
              </a>
            </li>
            <li className="mode">
              <div className="sun-moon">
                <i className="icon-Sun iconfont sun"></i>
                <i className="icon-Moon iconfont moon"></i>
              </div>
              <span className="mode-text text">Dark Mode</span>
              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
      <section className="home">
        <div className="text">Dashboard Sidebar</div>
      </section>
    </div>
  )
}

export default Home
