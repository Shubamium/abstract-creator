import React from "react";
import "./footer.scss";
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer id="footer" className="ni">
      <img src="/de/footer-l.png" alt="" className="footer-g l" />
      <img src="/de/footer-r.png" alt="" className="footer-g r" />
    </footer>
  );
}
