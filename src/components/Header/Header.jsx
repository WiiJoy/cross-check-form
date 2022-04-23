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
      <a href="#burger" className="header__nav__item">Burger menu</a>
      <a href="#popup" className="header__nav__item">Popup</a>
      <a href="#carousel" className="header__nav__item">Carousel</a>
      <a href="#pagination" className="header__nav__item">Pagination</a>
    </div>
  </header>
}