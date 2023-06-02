/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { JobCard } from "./JobCard";

export function ListJobs({ dataRender, modifyData }) {
  return (
    <div className="list-jobs">
      {dataRender.map((el, index) => (
        <JobCard key={index} data={el} modifyData={modifyData} />
      ))}
    </div>
  );
}
