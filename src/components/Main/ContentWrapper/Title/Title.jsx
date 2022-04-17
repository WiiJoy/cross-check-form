import React from "react";

export default function Title({ title, id }){
  return <div className="title" id={id}>
    <h3>{title}</h3>
  </div>
}