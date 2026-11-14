import React from "react";
export const asset = path => `${import.meta.env.BASE_URL}${path}`;
export function ExternalLink({href, children, ...props}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> (nouvel onglet)</span>
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
