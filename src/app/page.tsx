import Link from "next/link";
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
                IH LITTLE GUMMIES so this my site its supper cool you can buy
                <strong>little gummy plushies</strong> that are wanted in 49
                states for drinking bones and <strong>look at art</strong> and
                see when I post videos <strong>LEAVE A MESSAGE</strong> i know
                pretty cool that's not the best part you can look at{" "}
                <strong>my lore</strong> what are you waiting for go look
              </p>

              <div className="actions">
                <Link href={"/gallery"} className="btn btn-basic">
                  View gallery
                </Link>
                <Link href={"/lore"} className="btn btn-basic">
                  Learn more
                </Link>
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
