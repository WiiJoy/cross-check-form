import React from "react";

export default function Title({ title, id }){
  const idTitles = ['minimal', 'basic', 'extra', 'technical', 'penalties']

  return <div className={idTitles.includes(id) ? "title title_bold" : "title"} id={id}>
    <h3>{title}</h3>
  </div>
}