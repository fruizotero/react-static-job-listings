/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { FilterLabel } from "./FilterLabel";

export function Filter({ modifyData }) {
  let { empty, filterData } = modifyData;
  //Recibe objeto que contiene el valor y el setState de un array
  return (
    <div className="filter">
      <div className="filter_labels">
        {filterData.map((el, index) => (
          <FilterLabel key={index} text={el} modifyData={modifyData} />
        ))}
      </div>
      <button className="filter_clear" onClick={empty}>
        Clear
      </button>
    </div>
  );
}
