"use client";
import "./ProjectsCard.css";
import Image from "next/image";
import logo from "./ImagesProjects/link-outline.svg";
import darbell from "./ImagesProjects/barbell-outline.svg";

import React from "react";

function ProjectsCard() {
  return (
    <div>
      <div className="each-card">
        <div className="icon-back">
          <Image src={darbell} className="dar-bell" alt="" />
        </div>
        <h1>Company</h1>
        <p className="each-card-p">Creating technology to empower civillians to expore space on their own terms</p>
        <a href="https://tailwindcss.com/docs/fill" className="link-show">
          <Image src={logo} alt="" className="link-icon" />
          <p>https://company.com</p>
        </a>
      </div>
    </div>
  );
}

export default ProjectsCard;
