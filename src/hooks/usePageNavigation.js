import {useEffect, useState} from "react";

export default function usePageNavigation(headerRef) {
  const [active, setActive] = useState("greeting");
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const header = headerRef.current;
    let frame = 0;
    const sections = [...document.querySelectorAll("main section[id]")];
    const update = () => {
      frame = 0;
      const height = header.getBoundingClientRect().height;
      const available =
        document.documentElement.scrollHeight - window.innerHeight;
      header.style.setProperty(
        "--reading-progress",
        available > 0 ? Math.min(1, Math.max(0, window.scrollY / available)) : 0
      );
      let current = "greeting";
      sections.forEach(section => {
        if (section.getBoundingClientRect().top <= height + 90)
          current = section.id;
      });
      if (current === "engagements") current = "education";
      if (available > 0 && window.scrollY >= available - 4) current = "contact";
      setActive(current);
      setShowTop(window.scrollY > 500);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const resize = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight + 24}px`
      );
      schedule();
    });
    resize.observe(header);
    window.addEventListener("scroll", schedule, {passive: true});
    window.addEventListener("resize", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.documentElement.style.removeProperty("--header-height");
    };
  }, [headerRef]);
  return {active, showTop};
}
