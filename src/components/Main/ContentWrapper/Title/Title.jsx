import React from "react";

export default function Title({ title, id }){
  const idTitles = ['main-check', 'mozilla', '1280width', '768width', '320width', 'mandatory']

  return <div className={idTitles.includes(id) ? "title title_bold" : "title"} id={id}>
    <h3>{title}</h3>
  </div>
}