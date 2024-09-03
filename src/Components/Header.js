import React, { useState, useEffect } from "react";
//import menuLinksData from "./data/menu_links.json";

const Header = () => {
  const [menuLinksData, setMenuLinksData] = useState([]);
  const loadMenuLinksData = async () => {
    const resp = await fetch(
      "https://tqbhblyv3l.execute-api.us-east-1.amazonaws.com/Production/getmenulinks"
    );
    let jsonData = await resp.json();
    setMenuLinksData(jsonData);
  };
  useEffect(() => {
    loadMenuLinksData();
  }, []);
  return (
    <header id="intro">
      <article className="fullheight">
        <div className="hgroup">
          <h1>My little book world</h1>
          <p>
            <a href="#welcome"></a>
          </p>
        </div>
      </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand">
            <a href="#welcome">
              <span>About </span>
              <span>me</span>
            </a>
          </div>
          <ul>
            {menuLinksData.map((link) => (
              <li>
                <a className={`icon ${link.class}`} href={link.href}>
                  <span>{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
