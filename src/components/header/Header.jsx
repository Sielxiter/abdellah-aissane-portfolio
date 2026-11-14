import React, {useRef, useState} from "react";
import usePageNavigation from "../../hooks/usePageNavigation";
import {portfolio as p} from "../../portfolio";
import "./Header.scss";
const links = [
  ["skills", "À propos"],
  ["competences", "Compétences"],
  ["experience", "Expérience"],
  ["projects", "Projets"],
  ["education", "Formation"],
  ["contact", "Contact"]
];
export default function Header({dark, toggleTheme}) {
  const headerRef = useRef(null);
  const {active, showTop} = usePageNavigation(headerRef);
  const [open, setOpen] = useState(false);
  return (
    <>
      <header ref={headerRef} className={dark ? "header dark-menu" : "header"}>
        <a
          className="logo"
          href="#greeting"
          aria-label="Amine Izmaoun, accueil"
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
          {open ? "Fermer" : "Menu"}
        </button>
        <nav aria-label="Navigation principale">
          <ul id="navigation" className={open ? "menu menu-open" : "menu"}>
            {links.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "location" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <button
                className="theme-switch"
                type="button"
                onClick={toggleTheme}
                aria-label={
                  dark ? "Activer le thème clair" : "Activer le thème sombre"
                }
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
          onClick={event => { event.preventDefault(); window.scrollTo({top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"}); }}
          className="floating-top"
          href="#greeting"
          aria-label="Retour en haut de la page"
        >
          ↑
        </a>
      )}
    </>
  );
}
