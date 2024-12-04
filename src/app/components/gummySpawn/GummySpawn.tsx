"use client";
import React, { useEffect, useRef, useState } from "react";
import "./gummySpawn.scss";
import { v4 as uuid } from "uuid";
type Props = {};

const gumImgs = [
  "/de/gummy_blue.png",
  "/de/gummy_green.png",
  "/de/gummy_purple.png",
  "/de/gummy_yellow.png",
  "/de/gummy_red.png",
  "/de/gummy_pink.png",
];
export default function GummySpawn({}: Props) {
  const [inputs, setInputs] = useState<string[]>([]);
  const [gummies, setGummies] = useState<any[]>([]);
  const soundRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      setInputs((inp) => {
        const newInp = [...inp];
        newInp.push(e.key);
        if (newInp.length >= 6) {
          newInp.shift();
        }
        console.log(newInp);

        return newInp;
      });
    });
  }, []);

  const spawnGummy = () => {
    setGummies((gumms) => {
      const gummse = [...gumms];
      gummse.push({
        type: Math.floor(Math.random() * gumImgs.length),
        x: Math.floor(Math.random() * 80),
        id: uuid(),
      });
      return gummse;
    });
  };

  const removeThis = (id: string) => {
    setGummies((gums) => {
      const newGums = [...gums];
      return newGums.filter((g) => g.id != id);
    });
  };
  useEffect(() => {
    console.log(inputs.join(""));
    if (inputs.join("") === "gummy") {
      spawnGummy();
    }
  }, [inputs]);

  const playSound = () => {
    if (soundRef.current) {
      const audio = document.createElement("audio");
      audio.src = "/sn/much.mp3";
      audio.play();
    }
    // if (soundRef.current) {

    //   let audio = soundRef.current;
    //   if (audio.paused) {
    //     audio.currentTime = 0;
    //     audio.play();
    //   } else {
    //   }
    // }
  };
  return (
    <div className="gummy-spawner">
      {gummies.map((gum: any, index: number) => {
        return (
          <img
            src={gumImgs[gum.type]}
            alt=""
            key={"gumfall" + index}
            className="gummy"
            style={{
              left: `${gum.x}%`,
            }}
            onClick={(e) => {
              playSound();
              removeThis(gum.id);
            }}
          />
        );
      })}
      <div className="audio-list" ref={soundRef}></div>
      {/* <audio src="/sn/much.mp3" ref={soundRef}></audio> */}
    </div>
  );
}
