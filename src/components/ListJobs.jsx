/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { JobCard } from "./JobCard";

export function ListJobs({ dataRender, modifyData }) {
  let { filterData } = modifyData;
  // [].length
  let style = {
    paddingTop: filterData.length == 0 ? "3rem" : "12vh",
  };

  return (
    <div className="list-jobs" style={style}>
      {dataRender.map((el, index) => (
        <JobCard key={index} data={el} modifyData={modifyData} />
      ))}
    </div>
  );
}
