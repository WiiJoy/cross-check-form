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
        <a href="#minimal" className="header__nav__item other-link">Minimal scope</a>
        <a href="#basic" className="header__nav__item other-link">Basic scope</a>
        <a href="#extra" className="header__nav__item other-link">Extra scope</a>
        <a href="#technical" className="header__nav__item other-link">Technical requirements</a>
        <a href="#penalties" className="header__nav__item other-link">Penalties</a>
      </div>
  </header>
}