import React from "react";
import style from "./header.module.css"
export default function Header() {

    return (
    < div  className={style.header}>
      <a href="#section1">Section 1 </a>
      <a href="#section2">Section 2</a>
      <a href="#section3">Section 3</a>
      <a href="#section4">Section 4</a>
      <a href="#section5">Section 5</a>
      <a href="#section6">Section 6</a>
      <a href="#section7">Section 7</a>
    </div>
  );
}
