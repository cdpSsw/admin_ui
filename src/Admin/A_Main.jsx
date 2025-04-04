import React, { useState, useEffect } from "react";
import "../public/main.css";

// icons + emblem + svg
import Emblem from "../DAssets/emblem/emblem_red.png";
import Home from "../DAssets/icons/icon-home.svg";
import ShowFiles from "../DAssets/icons/icon-showcase-files.svg";
import ShowTiktok from "../DAssets/icons/icon-showcase-tiktok.svg";
import Tools from "../DAssets/icons/icon-tools.svg";
import Members from "../DAssets/icons/icon-members.svg";
import Teams from "../DAssets/icons/icon-team.svg";
import Settings from "../DAssets/icons/icon-settings.svg";
import SignOut from "../DAssets/icons/icon-sign-out.svg";

// Components
import A_App from "./A_App";
import A_Home from "./pages/A_Home";
import A_ShowCase from "./pages/A_ShowCase";
import A_ShowTiktok from "./pages/A_ShowTiktok";
import A_Tools from "./pages/A_Tools";
import A_Members from "./pages/A_Members";
import A_Teams from "./pages/A_Team";

const A_Main = ({ showComp, setSelectComp1 }) => {
  const [selectComp, setSelectComp] = useState("Admin-Home");
  console.log("selectComp: ", selectComp);
  console.log("showComp: ", showComp);

  useEffect(() => {
    if (showComp) {
      setSelectComp(showComp);
    }
  }, [showComp]);

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
    {
      icon: Members,
      name: "Members",
      path: "Admin-Members",
    },
    {
      icon: Teams,
      name: "Teams",
      path: "Admin-Teams",
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
      {/* Sidebar - Desktop */}
      <article className="desktop-view col-md-2">
        <section className="emblem-container">
          <img src={Emblem} alt="Emblem-Comen" className="emblem" />
        </section>

        <section className="nav-container">
          <ul className="nav-list">
            {navListTop.map((list, idx) => (
              <li
                key={idx}
                className={`nav-link ${
                  list.path === selectComp ? "active" : ""
                }`}
                onClick={() => setSelectComp(list.path)}
              >
                {/* <h1>{selectComp}</h1>
                <h1>{list.path}</h1> */}
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

      {/* Sidebar - Mobile */}
      <article className="mobile-view">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container">
            <section className="emblem-container">
              <img src={Emblem} alt="Emblem-Comen" className="emblem" />
            </section>
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#n_bar"
              aria-controls="navbarNavAltMarkup"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="n_bar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  {navListTop.map((list, idx) => (
                    <li
                      key={idx}
                      className={`nav-link
                  ${list.path === selectComp ? "active" : ""}
                `}
                      onClick={() => setSelectComp(list.path)}
                    >
                      <img
                        src={list.icon}
                        alt={list.name}
                        className="nav-icon"
                      />
                      <span className="link-name">{list.name}</span>
                    </li>
                  ))}
                </li>

                <hr />
                <li className="nav-item">
                  {navListBottom.map((list, idx) => (
                    <a
                      key={idx}
                      className={`nav-link
                  ${list.path === selectComp ? "active" : ""}
                `}
                      onClick={() => setSelectComp(list.path)}
                    >
                      <img
                        src={list.icon}
                        alt={list.name}
                        className="nav-icon"
                      />
                      <span className="link-name">{list.name}</span>
                    </a>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </article>

      <article className="select-comp-container col-md-10">
        {selectComp === "Admin-Home" && <A_Home />}
        {selectComp === "Admin-ShowFiles" && <A_ShowCase />}
        {selectComp === "Admin-ShowTiktok" && <A_ShowTiktok />}
        {selectComp === "Admin-Tools" && <A_Tools />}
        {selectComp === "Admin-Members" && <A_Members />}
        {selectComp === "Admin-Teams" && <A_Teams />}
      </article>
    </main>
  );
};

export default A_Main;
