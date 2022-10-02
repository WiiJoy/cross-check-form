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
      <div className="header__nav">
        <a href="#landing" className="header__nav__item other-link">Landing</a>
        <a href="#donate" className="header__nav__item other-link">Donate</a>
      </div>
      <Score/>
    </div>
  </header>
}