import React from "react";

import "./NavButton.css";

export function NavButton(props) {
  // console.log(props);
  let cssClass = "header-nav-button";

  if (props.selected) {
    cssClass = cssClass + "  selected-nav-button";
  }

  return (
    <button id={props.label} className={cssClass} onClick={props.onClick}>
      {props.label}
    </button>
  );
}

// function NavButton(props) { 
//   let cssClass = "header-nav-button";

//   if (props.selected) {
//     cssClass = cssClass + "  selected-nav-button";
//   }

//   const button = document.createElement('button');
//   button.classList.add(cssClass);
//   button.innerText = props.label;

//   return button;
// }
