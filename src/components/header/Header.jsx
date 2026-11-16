import React, {useRef, useState} from "react";
import usePageNavigation from "../../hooks/usePageNavigation";
import {LanguageSelector, useLanguage} from "../../i18n/LanguageContext";
import "./Header.scss";
const sectionIds = [
  "skills",
  "competences",
  "experience",
  "projects",
  "education",
  "contact"
];
export default function Header({dark, toggleTheme}) {
  const {p, ui} = useLanguage();
  const headerRef = useRef(null);
  const {active, showTop} = usePageNavigation(headerRef);
  const [open, setOpen] = useState(false);
  return (
    <>
      <header ref={headerRef} className={dark ? "header dark-menu" : "header"}>
        <a
          className="logo"
          href="#greeting"
          aria-label={`${p.name}, ${ui.home}`}
        >
          <span className="grey-color">&lt;</span>
          <span className="logo-name">{p.name}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <button
          className="mobile-menu-button"
          type="button"
          aria-controls="navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? ui.close : ui.menu}
        </button>
        <nav aria-label={ui.navigation}>
          <ul id="navigation" className={open ? "menu menu-open" : "menu"}>
            {sectionIds.map((id, index) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "location" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {ui.nav[index]}
                </a>
              </li>
            ))}
            <li className="language-menu-item">
              <LanguageSelector />
            </li>
            <li>
              <button
                className="theme-switch"
                type="button"
                onClick={toggleTheme}
                aria-label={dark ? ui.light : ui.dark}
                aria-pressed={dark}
              >
                <span aria-hidden="true">{dark ? "☀" : "☾"}</span>
              </button>
            </li>
          </ul>
        </nav>
        <div className="reading-progress" aria-hidden="true" />
      </header>
      {showTop && (
        <a
          onClick={event => {
            event.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "instant"
                : "smooth"
            });
          }}
          className="floating-top"
          href="#greeting"
          aria-label={ui.top}
        >
          ↑
        </a>
      )}
    </>
  );
}
