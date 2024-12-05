import "./home.scss";
export default function Home() {
  return (
    <main id="page_home" className={""}>
      <section id={"main-section"}>
        <div className="ear-panel">
          <img src="/de/ear_r.png" alt="" className={"ear l"} />
          <img src="/de/ear_r.png" alt="" className={"ear r"} />
          <article className="win-panel">
            <div className="panel-head">
              <h2>main_section.exe</h2>
              <img src="/de/closebtn.png" alt="" className="btn close-icon" />
            </div>
            <div className="panel-content">
              <h3>WELCOME TO MY SITE</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillu.
              </p>

              <div className="actions">
                <button className="btn btn-basic">Button Here</button>
                <button className="btn btn-basic">Learn more</button>
              </div>
            </div>
          </article>
        </div>
        <figure>
          <img src="/gfx/hero_art.png" alt="" />
        </figure>
      </section>
    </main>
  );
}
