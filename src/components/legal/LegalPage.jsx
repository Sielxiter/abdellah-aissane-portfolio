import React from "react";
import {LanguageSelector, useLanguage} from "../../i18n/LanguageContext";
import {asset} from "../shared/Shared";
export default function LegalPage() {
  const {ui} = useLanguage();
  return (
    <main className="legal-page">
      <div className="legal-navigation">
        <a href={import.meta.env.BASE_URL}>← {ui.back}</a>
        <LanguageSelector />
      </div>
      <h1>{ui.credits}</h1>
      <p>{ui.legal[0]}</p>
      <p>
        <a href="https://github.com/saadpasta/developerFolio">
          {ui.template}: DeveloperFolio
        </a>
      </p>
      <p>{ui.legal[1]}</p>
      <p>
        <a href={asset("LICENSE")}>{ui.license}</a>
      </p>
      <p>
        <a href="https://github.com/Sielxiter/abdellah-aissane-portfolio/archive/refs/heads/main.zip">
          {ui.source}
        </a>
      </p>
      <p>{ui.legal[2]}</p>
      <p>
        <a href={asset("icons/technologies/DEVICON-LICENSE")}>
          {ui.iconLicense}
        </a>
      </p>
      <p>{ui.legal[3]}</p>
    </main>
  );
}
