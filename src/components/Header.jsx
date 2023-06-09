/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import bgHeaderDesktop from "../assets/images/bg-header-desktop.svg";
import bgHeaderMobile from "../assets/images/bg-header-mobile.svg";

import "./Header.css";

export function Header({children}) {
  return (
    <header className="header">
      <picture className="header_image">
        <source
          media="(min-width: 512px)"
          srcSet={bgHeaderDesktop}
        ></source>
        <img
          src={bgHeaderMobile}
          alt="Background image header"
        />
      </picture>
      {children}
    </header>
  );
}
