import React from "react";
import {portfolio as p} from "../../portfolio";
import {asset} from "../../components/shared/Shared";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import "./Contact.scss";
export default function Contact() {
  return (
    <section
      className="main contact-margin-top"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-div-main">
        <div className="contact-header">
          <h2 className="heading contact-title" id="contact-title">
            Me contacter
          </h2>
          <p className="subTitle contact-subtitle">
            Pour un stage PFE en génie logiciel et DevOps
          </p>
          <address className="contact-text-div">
            <a className="contact-detail" href={p.phoneHref}>
              {p.phone}
            </a>
            <a className="contact-detail-email" href={`mailto:${p.email}`}>
              {p.email}
            </a>
            <p className="subTitle">{p.location}</p>
            <SocialMedia />
            <a className="main-button" href={asset(p.cv)} download>
              Télécharger mon CV
            </a>
          </address>
        </div>
        <div className="contact-image-div profile-photo">
          <img
            src={asset(p.photo)}
            alt="Portrait d’Amine Izmaoun"
            width="1086"
            height="1448"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
