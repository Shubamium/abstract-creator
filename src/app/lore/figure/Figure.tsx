"use client";
import { urlFor } from "@/db/sanity";
import React, { useState } from "react";

type Props = {
  figures: any[];
};

export default function Figure({ figures }: Props) {
  const [activeFig, setActiveFig] = useState(0);

  let active = figures[activeFig];

  const prev = () => {
    setActiveFig(Math.max(activeFig - 1, 0));
  };
  const next = () => {
    setActiveFig(Math.min(activeFig + 1, figures.length - 1));
  };
  return (
    <div className="panel-content">
      <div className="main-part">
        <div className="figure-img">
          <img
            src={active.image && urlFor(active.image).url()}
            alt=""
            className="figure-art"
          />
        </div>
        <article className="figure-data">
          <div className="figure-main-info">
            <h2>{active.name}</h2>
            <p>{active.bio}</p>
          </div>

          <div className="figure-infos">
            {active.details &&
              active.details.map((detail: any) => {
                return (
                  <div className="info" key={detail._key}>
                    <h3>{detail.title}</h3>
                    <p>{detail.info}</p>
                  </div>
                );
              })}
            {/* <div className="info">
              <h3>DETAIL TITLE</h3>
              <p>DETAIL EXPLANATION</p>
            </div>
            <div className="info">
              <h3>DETAIL TITLE</h3>
              <p>DETAIL EXPLANATION</p>
            </div>
            <div className="info">
              <h3>DETAIL TITLE</h3>
              <p>DETAIL EXPLANATION</p>
            </div> */}
          </div>

          <div className="lore-text">
            <h2>LORE</h2>
            <p>{active.lore}</p>
          </div>
        </article>
      </div>
      <div className="actions">
        <button className="btn btn-basic" onClick={prev}>
          {"<-----Prev"}
        </button>
        <p>{activeFig + 1}</p>
        <button className="btn btn-basic" onClick={next}>
          {"Next----->"}
        </button>
      </div>
    </div>
  );
}
