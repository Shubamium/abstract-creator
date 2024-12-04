"use client";
import React from "react";
import "./header.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {};

export default function Header({}: Props) {
  const pathname = usePathname();
  return (
    <header id="header">
      <div className="title-text">
        <img src="/de/gummy_red.png" alt="" className="gummy l" />
        <h1 className="main-heading">
          A<span className="purple">B</span>
          <span className="red">ST</span>RA
          <span className="purple">CT</span> <span className="red">C</span>
          <span className="blue">RE</span>
          <span className="red">A</span>
          <span className="purple">TOR</span>
        </h1>
        <img src="/de/gummy_purple.png" alt="" className="gummy r " />
      </div>
      <nav id="nav">
        <Link
          href={"/"}
          className={`btn btn-head-nav ${pathname === "/" ? "active " : ""}`}
        >
          HOME
        </Link>
        <Link
          href={"/lore"}
          className={`btn btn-head-nav ${
            pathname.includes("/lore") ? "active" : ""
          }`}
        >
          LORE
        </Link>
        <Link
          href={"/shop"}
          className={`btn btn-head-nav ${
            pathname.includes("/shop") ? "active" : ""
          }`}
        >
          SHOP
        </Link>
        <Link
          href={"/gallery"}
          className={`btn btn-head-nav ${
            pathname.includes("/gallery") ? "active" : ""
          }`}
        >
          GALLERY
        </Link>
      </nav>
    </header>
  );
}
