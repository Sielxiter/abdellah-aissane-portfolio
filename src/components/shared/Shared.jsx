import React from "react";
import {useLanguage} from "../../i18n/LanguageContext";
export const asset = path => `${import.meta.env.BASE_URL}${path}`;
export function ExternalLink({href, children, ...props}) {
  const {ui} = useLanguage();
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> ({ui.newTab})</span>
    </a>
  );
}
export function Tags({items}) {
  return (
    <ul className="technology-list">
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
