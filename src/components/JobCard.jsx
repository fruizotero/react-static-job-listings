/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";

export function JobCard({ data, modifyData }) {
  let { company, role, level, languages, tools } = data;
  let { addValue } = modifyData;

  return (
    <article className="job-card">
      <p>{company}</p>
      <div className="buttons">
        <button
          onClick={() => {
            addValue(role);
          }}
        >
          {role}
        </button>
        <button
          onClick={() => {
            addValue(level);
          }}
        >
          {level}
        </button>
        {languages.map((el, index) => (
          <button
            key={index}
            onClick={() => {
              addValue(el);
            }}
          >
            {el}
          </button>
        ))}
      </div>
    </article>
  );
}
