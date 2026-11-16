// DeveloperFolio : structure et styles du template original, adaptés en français.
import React, {useRef, useState} from "react";
import useScrollReveal from "./hooks/useScrollReveal";
import {useLanguage} from "./i18n/LanguageContext";
import LegalPage from "./components/legal/LegalPage";
import Header from "./components/header/Header";
import Greeting from "./containers/greeting/Greeting";
import Skills from "./containers/skills/Skills";
import WorkExperience from "./containers/workExperience/WorkExperience";
import StartupProject from "./containers/StartupProjects/StartupProject";
import Education from "./containers/education/Education";
import Contact from "./containers/contact/Contact";
import "./personalization.scss";

export default function App() {
  const {ui} = useLanguage();
  const rootRef = useRef(null);
  useScrollReveal(rootRef);
  const [dark, setDark] = useState(false);
  if (location.pathname.endsWith("mentions.html")) return <LegalPage />;
  return (
    <div ref={rootRef} className={dark ? "portfolio dark-mode" : "portfolio"}>
      <a className="skip-link" href="#contenu">
        {ui.skip}
      </a>
      <Header dark={dark} toggleTheme={() => setDark(!dark)} />
      <main id="contenu">
        <Greeting />
        <Skills />
        <WorkExperience />
        <StartupProject />
        <Education />
        <Contact />
      </main>
      <footer className="footer-div footer-minimal">
        <a href={`${import.meta.env.BASE_URL}mentions.html`}>{ui.credits}</a>
      </footer>
    </div>
  );
}
