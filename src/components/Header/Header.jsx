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
        <a href="#burger" className="header__nav__item other-link">Burger</a>
        <a href="#caurusel" className="header__nav__item other-link">Carousel</a>
        <a href="#testimonials" className="header__nav__item other-link">Testimonials</a>
        <a href="#popup" className="header__nav__item other-link">Popup</a>
        <a href="#amount" className="header__nav__item other-link">Amount</a>
      </div>
      <Score/>
    </div>
  </header>
}