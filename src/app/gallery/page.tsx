"use client";
import React, { useEffect, useState } from "react";
import "./gallery.scss";
import { getGallery, PostComment } from "@/db/gallery";
import { urlFor } from "@/db/sanity";
type Props = {};
const colors = {
  list: [
    { title: "Pink", value: "#E4009F" },
    { title: "Red", value: "#E6356C" },
    { title: "Purple", value: "#B400FF" },
    { title: "Green", value: "#00DF73" },
    { title: "Yellow", value: "#F1E53D" },
    { title: "Blue", value: "#8ADCEC" },
  ],
};
export default function GalleryPage({}: Props) {
  const [gallery, setGallery] = useState<any[]>([]);
  const [selectedArt, setSelectedArt] = useState<any | null>(null);

  const [changes, setChanges] = useState(true);
  useEffect(() => {
    const loadGallery = async () => {
      const galleryData = await getGallery();
      console.log("reloaded");
      setGallery(galleryData);

      if (selectedArt) {
        let curr = galleryData.find((gal) => gal._id === selectedArt._id);
        setSelectedArt(curr);
      }
    };
    if (changes) {
      loadGallery();
      setChanges(false);
    }
  }, [changes]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedColor, setSelectedColors] = useState(colors.list[0].value);

  const comment = async () => {
    const data = await PostComment(
      selectedArt._id,
      name,
      selectedColor,
      message
    );

    alert("Comment succesfully posted!");
    setChanges(true);
  };
  return (
    <main id="page_gallery">
      <section id="gallery-selection">
        <article className="title-part">
          <img src="/de/ampinksparkles.gif" alt="" className="decor_sparkles" />
          <h2>GALLERY</h2>
          <p>
            showcases a variety of artistic designs with pics of my everyday
            Gummy bear life like when i sleep or just vibing in the void of
            space
          </p>
          <img src="/de/gummy_set.png" alt="" />
        </article>
        <figure>
          <img src="/gfx/gallery_px.png" alt="" className="gallery" />
          <img src="/de/ampinksparkles.gif" alt="" className="decor_sparkles" />
          <img src="/de/ampinksparkles.gif" alt="" className="decor_sparkles" />
          <img src="/de/ampinksparkles.gif" alt="" className="decor_sparkles" />
          <img src="/de/ampinksparkles.gif" alt="" className="decor_sparkles" />
          <img src="/de/ampinksparkles.gif" alt="" className="decor_sparkles" />
          <img src="/de/ampinksparkles.gif" alt="" className="decor_sparkles" />
          <img src="/de/ampinksparkles.gif" alt="" className="decor_sparkles" />
          <img src="/de/ampinksparkles.gif" alt="" className="decor_sparkles" />
          <img src="/de/ampinksparkles.gif" alt="" className="decor_sparkles" />

          <img src="/de/sparklestars.gif" alt="" className="decor_stars" />
          <img src="/de/bearbal.gif" alt="" className="decor_bear" />
          <img src="/de/top-gallerydecor.png" alt="" className="decor_ac" />
        </figure>
      </section>
      <section id="explanation">
        <img src="/de/pink_star.gif" alt="" />
        <p>{"(click the image to view comments)"}</p>
      </section>
      <section id="gallery_list">
        {gallery &&
          gallery.map((gal) => {
            return (
              <div
                className="btn gallery-item"
                key={gal._id}
                onClick={() => {
                  setSelectedArt(gal);
                }}
              >
                <img src="/de/strip-b.png" alt="" className="strip b" />
                <img src="/de/strip-t.png" alt="" className="strip t" />
                <div className="img-container">
                  <img src={gal.image && urlFor(gal.image).url()} alt="" />
                </div>
              </div>
            );
          })}
        {/* <div className="btn gallery-item">
          <img src="/de/strip-b.png" alt="" className="strip b" />
          <img src="/de/strip-t.png" alt="" className="strip t" />
          <div className="img-container">
            <img src="/awdawd" alt="" />
          </div>
        </div>
        <div className="btn gallery-item">
          <img src="/de/strip-b.png" alt="" className="strip b" />
          <img src="/de/strip-t.png" alt="" className="strip t" />
          <div className="img-container">
            <img src="/awdawd" alt="" />
          </div>
        </div>
        <div className="btn gallery-item">
          <img src="/de/strip-b.png" alt="" className="strip b" />
          <img src="/de/strip-t.png" alt="" className="strip t" />
          <div className="img-container">
            <img src="/awdawd" alt="" />
          </div>
        </div>
        <div className="btn gallery-item">
          <img src="/de/strip-b.png" alt="" className="strip b" />
          <img src="/de/strip-t.png" alt="" className="strip t" />
          <div className="img-container">
            <img src="/awdawd" alt="" />
          </div>
        </div>
        <div className="btn gallery-item">
          <img src="/de/strip-b.png" alt="" className="strip b" />
          <img src="/de/strip-t.png" alt="" className="strip t" />
          <div className="img-container">
            <img src="/awdawd" alt="" />
          </div>
        </div> */}
      </section>

      <section
        className={`fs-view ${selectedArt ? "active" : "hidden"}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setSelectedArt(null);
        }}
      >
        <div className="overlay"></div>
        <div className="panel">
          <div className="art-part">
            <img src={selectedArt && urlFor(selectedArt.image).url()} alt="" />
          </div>
          <div className="infos">
            <h2>SCROLL DOWN TO SEE COMMENTS</h2>
            <p>CLICK OUTSIDE TO CLOSE</p>
          </div>

          <div className="comments">
            <div
              className="reply-bar"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <h2>LEAVE A COMMENT</h2>
              <div className="input ">
                <label htmlFor="replies">Name</label>
                <input
                  name="name"
                  placeholder="Your name here!"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="input textarea">
                <label htmlFor="replies">Message</label>
                <textarea
                  name="replies"
                  placeholder="Write your replies here!"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>

              <div className="action color">
                <div className="color-select">
                  <p>PICK A COLOR</p>
                  <div className="colors">
                    {colors.list.map((clr) => {
                      return (
                        <div
                          className={`color ${
                            selectedColor === clr.value ? "selected" : ""
                          }`}
                          key={"color-select" + clr.title}
                          onClick={() => {
                            setSelectedColors(clr.value);
                          }}
                          style={{ background: clr.value }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
                <button className="btn btn-basic" onClick={comment}>
                  POST
                </button>
              </div>
            </div>
            {selectedArt &&
              selectedArt.comments &&
              selectedArt.comments.map((comm: any) => {
                return (
                  <div
                    className="comment"
                    key={comm._key}
                    style={{ background: comm.color }}
                  >
                    <h2>@{comm.name} SAYS:</h2>
                    <p>{comm.message}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <section className="back">
        <a href="#">
          <img src="/de/back_bear.gif" alt="" />
        </a>
      </section>
    </main>
  );
}
