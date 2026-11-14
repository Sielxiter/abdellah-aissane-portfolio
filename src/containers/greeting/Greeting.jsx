import React from "react";
import {portfolio as p} from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {asset} from "../../components/shared/Shared";
import "./Greeting.scss";
import "../../components/button/Button.scss";
export default function Greeting() {
  return (
    <section
      className="greet-main"
      id="greeting"
      aria-labelledby="greeting-title"
    >
      <div className="greeting-main">
        <div className="greeting-text-div">
          <h1 className="greeting-text" id="greeting-title">
            Bonjour, je suis {p.name}{" "}
            <span className="wave-emoji" aria-hidden="true">
              👋
            </span>
          </h1>
          <p className="greeting-specialty">{p.specialty}</p>
          <p className="greeting-text-p subTitle">{p.intro}</p>
          <p className="pfe-status">{p.status}</p>
          <SocialMedia />
          <div className="button-greeting-div">
            <a className="main-button" href="#projects">
              Voir mes projets
            </a>
            <a className="main-button" href={asset(p.cv)} download>
              Télécharger mon CV
            </a>
            <a className="main-button" href="#contact">
              Me contacter
            </a>
          </div>
        </div>
        <div className="greeting-image-div hero-portrait">
          <img
            src={asset(p.photo)}
            width="1086"
            height="1448"
            alt="Portrait d’Amine Izmaoun"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
