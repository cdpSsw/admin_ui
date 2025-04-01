import React, { useState } from "react";
import "../public/main.css";

// icons + emblem + svg
import Emblem from "../DAssets/emblem/emblem_red.png";
import Home from "../DAssets/icons/icon-home.svg";
import ShowFiles from "../DAssets/icons/icon-showcase-files.svg";
import ShowTiktok from "../DAssets/icons/icon-showcase-tiktok.svg";
import Tools from "../DAssets/icons/icon-tools.svg";
import Settings from "../DAssets/icons/icon-settings.svg";
import SignOut from "../DAssets/icons/icon-sign-out.svg";

// Components
import A_ShowCase from "./pages/A_ShowCase";
import A_ShowTiktok from "./pages/A_ShowTiktok";

const A_Main = () => {
  const [selectComp, setSelectComp] = useState("Admin-ShowCase");
  const navListTop = [
    {
      icon: Home,
      name: "Home",
      path: "Admin-Home",
    },
    {
      icon: ShowFiles,
      name: "Showcase (Files)",
      path: "Admin-ShowFiles",
    },
    {
      icon: ShowTiktok,
      name: "Showcase (Tiktok)",
      path: "Admin-ShowTiktok",
    },
    {
      icon: Tools,
      name: "Tools",
      path: "Admin-Tools",
    },
  ];
  const navListBottom = [
    {
      icon: Settings,
      name: "Settings",
      path: "Admin-Settings",
    },
    {
      icon: SignOut,
      name: "Sign Out",
      path: "Admin-SignOut",
    },
  ];

  return (
    <main className="a-main-container row m-0">
      <article className="desktop-view col-md-2">
        <section className="emblem-container">
          <img src={Emblem} alt="Emblem-Comen" className="emblem" />
        </section>

        <section className="nav-container">
          <ul className="nav-list">
            {navListTop.map((list, idx) => (
              <li
                key={idx}
                className={`nav-link
                  ${list.path === selectComp ? "active" : ""}
                `}
                onClick={() => setSelectComp(list.path)}
              > 
                <img src={list.icon} alt={list.name} />
                <span className="link-name">{list.name}</span>
              </li>
            ))}
          </ul>
          <hr />
          <ul className="nav-list">
            {navListBottom.map((list, idx) => (
              <li
                key={idx}
                className={`nav-link
                  ${list.path === selectComp ? "active" : ""}
                `}
                onClick={() => setSelectComp(list.path)}
              >
                <img src={list.icon} alt={list.name} />
                <span className="link-name">{list.name}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <article className="select-comp-container col-md-10">
        {selectComp === "Admin-ShowFiles" && <A_ShowCase />}
        {selectComp === "Admin-ShowTiktok" && <A_ShowTiktok />}
      </article>
    </main>
  );
};

export default A_Main;
