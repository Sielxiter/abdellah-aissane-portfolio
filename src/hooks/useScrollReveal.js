import {useEffect} from "react";

// Les éléments restent visibles si les animations ou l’observateur sont indisponibles.
export default function useScrollReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || preference.matches || !("IntersectionObserver" in window)) return;

    const elements = [...root.querySelectorAll([
      ".greeting-text-div", ".greeting-image-div", ".skills-image-div",
      ".skills-text-div", ".skill-domains > article", ".experience-heading",
      ".experience-card", "#projects > h2", "#projects > p", ".project-card",
      ".education-heading", ".education-card-container > div",
      "#engagements > h2", ".engagement-columns > article",
      ".contact-header", ".profile-photo"
    ].join(","))];
    const reveal = element => element.classList.add("is-revealed");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.08, rootMargin: "0px 0px -24px 0px"});

    elements.forEach(element => {
      element.classList.add("scroll-reveal");
      // Léger décalage entre cartes voisines, sans retarder toute une section.
      const siblings = [...element.parentElement.children];
      const index = siblings.indexOf(element);
      element.style.setProperty("--reveal-delay", `${Math.min(index, 2) * 80}ms`);
      observer.observe(element);
    });
    const showAll = () => {
      if (preference.matches) {
        elements.forEach(reveal);
        observer.disconnect();
      }
    };
    const onFocus = event => {
      const element = event.target.closest(".scroll-reveal");
      if (element) reveal(element);
    };
    preference.addEventListener("change", showAll);
    root.addEventListener("focusin", onFocus);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", showAll);
      root.removeEventListener("focusin", onFocus);
      elements.forEach(element => {
        element.classList.remove("scroll-reveal", "is-revealed");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, [rootRef]);
}
