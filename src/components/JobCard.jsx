/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, useEffect, useState } from "react";
import "./JobCard.css";

export function JobCard({ data, modifyData }) {
  const [imgSrc, setImgSrc] = useState(null);
  let {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = data;
  let { addValue } = modifyData;

  useEffect(() => {
    const getImage = async (name) => {
      try {
        let resp = await import(`../assets/images/${name}.svg`);

        setImgSrc(resp.default);
      } catch (error) {
        console.log(error);
      }
    };

    getImage(logo);
  }, [imgSrc]);

  return (
    <article className="job-card ">
      <div className={`job-card_content ${isNew && featured ? "border" : ""}`}>
        <div className="job-card_left">
          <div className="job-card_image-container">
            <img src={imgSrc} alt="Company logo" className="job-card_image" />
          </div>
          <div className="job-card_info">
            <div className="job-card_top">
              <p className="job-card_company">{company}</p>
              <div className="job-card_info_labels">
                {isNew && <p className="job-card_new">new!</p>}
                {featured && <p className="job-card_featured">featured</p>}
              </div>
            </div>
            <p className="job-card_position">{position}</p>
            <div className="job-card_bottom">
              <p className="job-card_postedat">{postedAt}</p>
              <p className="job-card_contract">{contract}</p>
              <p className="job-card_location">{location}</p>
            </div>
          </div>
        </div>
        <div className="job-card_right">
          <div className="job-card_right_content">
            <button
              onClick={() => {
                addValue(role);
              }}
              className="job-card_label"
            >
              {role}
            </button>
            <button
              onClick={() => {
                addValue(level);
              }}
              className="job-card_label"
            >
              {level}
            </button>
            {languages.map((el, index) => (
              <button
                key={index}
                onClick={() => {
                  addValue(el);
                }}
                className="job-card_label"
              >
                {el}
              </button>
            ))}
            {tools.map((el, index) => (
              <button
                key={index}
                onClick={() => {
                  addValue(el);
                }}
                className="job-card_label"
              >
                {el}
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
