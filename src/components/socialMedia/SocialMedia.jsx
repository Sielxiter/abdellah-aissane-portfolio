import React from "react";
import {useLanguage} from "../../i18n/LanguageContext";
import {ExternalLink} from "../shared/Shared";
import "./SocialMedia.scss";
export default function SocialMedia() {
  const {p, ui} = useLanguage();
  return (
    <div className="social-media-div">
      <ExternalLink
        href={p.github}
        className="icon-button github"
        aria-label="GitHub"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.08c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.5-.29-5.13-1.25-5.13-5.54 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.97 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.69.11 2.97.72.78 1.16 1.78 1.16 3 0 4.3-2.64 5.25-5.15 5.53.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"
          />
        </svg>
      </ExternalLink>
      <ExternalLink
        href={p.linkedin}
        className="icon-button linkedin"
        aria-label="LinkedIn"
      >
        <span aria-hidden="true">in</span>
      </ExternalLink>
      <a
        href={`mailto:${p.email}`}
        className="icon-button google"
        aria-label={ui.email}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="m3 6 9 7 9-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </a>
    </div>
  );
}
