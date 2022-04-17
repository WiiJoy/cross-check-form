import React from "react";

import Score from "./Score/Score";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header(){
  const { taskName } = useSelector(state=>state.mainReducer);
  const [headerClassName, setHeaderClassName] = useState('');

  function stickyHeader() {
    const offsetTop = 50;
    if (window.pageYOffset > offsetTop + 100) {
      setHeaderClassName("sticky");
    } else {
      setHeaderClassName("");
    }
  }

  useEffect(() => {
    const onScroll = () => stickyHeader();
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, []);

  return <header className={headerClassName}>
    <div className="header__main">
      <h1 className="title">{taskName}</h1>
      <Score/>
    </div>
    <div className="header__nav">
      <a href="#main-check" className="header__nav__item">Изменение ширины в Chrome</a>
      <a href="#mozilla" className="header__nav__item">Изменение ширины в Firefox</a>
      <a href="#1280width" className="header__nav__item">1280px+</a>
      <a href="#768width" className="header__nav__item">768px - 1279px</a>
      <a href="#320width" className="header__nav__item">320px - 767px</a>
    </div>
  </header>
}