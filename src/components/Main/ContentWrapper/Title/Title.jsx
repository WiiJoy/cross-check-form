import React from "react";

export default function Title({ title, id }){
  const idTitles = ['burger', 'caurusel', 'testimonials', 'popup', 'amount']

  return <div className={idTitles.includes(id) ? "title title_bold" : "title"} id={id}>
    <h3>{title}</h3>
  </div>
}