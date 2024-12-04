import React from "react";
import "./lore.scss";
import { fetchData } from "@/db/sanity";
import Figure from "./figure/Figure";
import Message from "./message/Message";
type Props = {};

export default async function LorePage({}: Props) {
  const figures = await fetchData<any[]>(`
		*[_type == 'figure']{
			...
		}
	`);

  const timelines = await fetchData<any[]>(`
		*[_type == 'timeline']{
		...
		}
	`);
  return (
    <main id="page_lore">
      <section id="lore-figure">
        <div className="win-panel">
          <div className="panel-head">
            <h2>Lore.exe</h2>
            <img src="/de/closebtn.png" alt="" className="btn close-icon" />
          </div>
          {figures && <Figure figures={figures} />}
        </div>
      </section>

      <section id="timeline">
        <div className="confine">
          <div className="heading">
            <h2>TIMELINE</h2>
            <p>
              TIMELINE Description ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              labor
            </p>
          </div>
          <div className="time-list">
            {timelines &&
              timelines.map((time) => {
                return (
                  <div
                    className="time"
                    key={"timeline" + time._id}
                    style={{ background: time.color }}
                  >
                    <h3>{time.name}</h3>
                    <p>{time.description}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <Message />
    </main>
  );
}
