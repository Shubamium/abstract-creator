import React, { CSSProperties } from "react";
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
		*[_type == 'timeline'] | order(_createdAt asc){
		...
		}
	`);
  return (
    <main id="page_lore">
      <section id="lore-figure">
        <div className="ear-panel">
          <img src="/de/ear_r.png" alt="" className={"ear l"} />
          <img src="/de/ear_r.png" alt="" className={"ear r"} />
          <div className="win-panel">
            <div className="panel-head">
              <h2>Lore.exe</h2>
              <img src="/de/closebtn.png" alt="" className="btn close-icon" />
            </div>
            {figures && <Figure figures={figures} />}
          </div>
        </div>
      </section>

      <section id="timeline">
        <div className="confine">
          <div className="heading">
            <h2>TIMELINE</h2>
            <p>Videos every Wednesday at 6:30 PM</p>
            <p>Shopping site will be open 24/7</p>
          </div>
          <div className="time-list">
            {timelines &&
              timelines.map((time) => {
                return (
                  <div
                    className="time eared"
                    key={"timeline" + time._id}
                    style={
                      {
                        background: time.color,
                        "--accent": time.color,
                      } as CSSProperties
                    }
                  >
                    <h3>{time.name}</h3>
                    <p>{time.description}</p>
                    <svg
                      width="55"
                      height="48"
                      viewBox="0 0 55 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="arrow"
                    >
                      <path
                        d="M52.3909 44.36C54.0336 44.1441 55.1903 42.6374 54.9744 40.9947L51.4567 14.2248C51.2408 12.5821 49.7341 11.4254 48.0914 11.6413C46.4487 11.8571 45.292 13.3638 45.5078 15.0065L48.6347 38.802L24.8393 41.9289C23.1965 42.1447 22.0398 43.6514 22.2557 45.2941C22.4716 46.9369 23.9783 48.0936 25.621 47.8777L52.3909 44.36ZM0.173141 5.37962L50.1731 43.7652L53.8269 39.0059L3.82686 0.620381L0.173141 5.37962Z"
                        fill="white"
                      />
                    </svg>
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
