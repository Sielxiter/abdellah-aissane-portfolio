import React from "react";
import {useLanguage} from "../../i18n/LanguageContext";
import {asset} from "../../components/shared/Shared";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import "./Contact.scss";
export default function Contact() {
  const {p, ui} = useLanguage();
  return (
    <section
      className="main contact-margin-top"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-div-main">
        <div className="contact-header">
          <h2 className="heading contact-title" id="contact-title">
            {ui.contact}
          </h2>
          <p className="subTitle contact-subtitle">{ui.contactSubtitle}</p>
          <address className="contact-text-div">
            <a className="contact-detail" href={p.phoneHref}>
              {p.phone}
            </a>
            <a className="contact-detail-email" href={`mailto:${p.email}`}>
              {p.email}
            </a>
            <p className="subTitle">{p.location}</p>
            <SocialMedia />
          </address>
        </div>
        {p.photo && <div className="contact-image-div profile-photo">
          <img
            src={asset(p.photo)}
            alt={ui.portrait}
            width="1086"
            height="1448"
            loading="lazy"
          />
        </div>}
      </div>
    </section>
  );
}
