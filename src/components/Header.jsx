/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";

import "./Header.css";

export function Header({children}) {
  return (
    <header className="header">
      <picture className="header_image">
        <source
          media="(min-width: 512px)"
          srcSet="src/assets/images/bg-header-desktop.svg"
        ></source>
        <img
          src="src/assets/images/bg-header-mobile.svg"
          alt="Background image header"
        />
      </picture>
      {children}
    </header>
  );
}
