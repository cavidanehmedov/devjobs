import React from "react";
import { Switch } from "../Switch";
import "./style.scss";


export const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header">
      <section className="header__top">
        <img
          className="header__logo"
          src="assets/desktop/logo.svg"
          alt="logo"
        />
        <Switch isDark={darkMode} setIsDark={setDarkMode} />
      </section>
      <section className="header__search">
        <div className="filter__title"> <img  src="assets/desktop/icon-search.svg" alt="icon" />Searcing </div>
        <div className="filter__location"><img src="assets/desktop/icon-location.svg" alt="" /> Filter Location</div>
        <div className="filter__searching"><img src="assets/desktop/icon-check" alt="" /><b>Full Time Only</b> <button className="header__button">Search</button> </div>
      </section>
    </header>
  );
};
