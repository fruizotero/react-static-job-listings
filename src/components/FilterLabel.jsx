/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./FilterLabel.css";
import iconRemove from "../assets/images/icon-remove.svg";

export function FilterLabel({ text, modifyData }) {
  let { deleteValue } = modifyData;

  return (
    <div className="label">
      <p className="label_name">{text}</p>
      <button
        className="label_button"
        onClick={() => deleteValue(text.toLowerCase())}
      >
        <div className="label_button_image_container">
          <img
            src={iconRemove}
            alt="Icon remove"
            className="label_button_image"
          />
        </div>
      </button>
    </div>
  );
}
