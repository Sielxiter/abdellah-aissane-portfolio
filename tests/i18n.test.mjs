// Tests de composants dans un DOM en mémoire : aucun navigateur ni serveur HTTP.
import {test, after} from "node:test";
import assert from "node:assert/strict";
import React, {act} from "react";
import {createRoot} from "react-dom/client";
import {Window} from "happy-dom";
import {createServer} from "vite";
import {portfolio} from "../src/portfolio.js";
import {englishProfile} from "../src/i18n/en.js";
import {messages} from "../src/i18n/messages.js";

const window = new Window({url: "http://portfolio.test/"});
for (const name of [
  "document",
  "localStorage",
  "location",
  "history",
  "HTMLElement",
  "Event",
  "ResizeObserver",
  "IntersectionObserver"
])
  globalThis[name] = window[name];
globalThis.window = window;
globalThis.requestAnimationFrame = window.requestAnimationFrame.bind(window);
globalThis.cancelAnimationFrame = window.cancelAnimationFrame.bind(window);
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
const vite = await createServer({
  server: {middlewareMode: true},
  appType: "custom"
});
const {LanguageProvider} = await vite.ssrLoadModule(
  "/src/i18n/LanguageContext.jsx"
);
const {default: App} = await vite.ssrLoadModule("/src/App.jsx");
after(async () => {
  await vite.close();
  await window.happyDOM.abort();
});
let root;
async function mount(path = "/") {
  history.replaceState(null, "", path);
  document.body.innerHTML = '<div id="root"></div>';
  document.head.innerHTML = '<meta name="description" content="">';
  root = createRoot(document.getElementById("root"));
  await act(async () =>
    root.render(
      React.createElement(LanguageProvider, null, React.createElement(App))
    )
  );
}
async function unmount() {
  await act(async () => root.unmount());
}
async function choose(value) {
  const selector = document.querySelector(".language-selector select");
  assert.ok(selector);
  await act(async () => {
    selector.value = value;
    selector.dispatchEvent(new window.Event("change", {bubbles: true}));
  });
}

test("les traductions couvrent les mêmes libellés, missions et fonctionnalités", () => {
  assert.deepEqual(
    Object.keys(messages.fr).sort(),
    Object.keys(messages.en).sort()
  );
  assert.equal(englishProfile.experience.length, portfolio.experience.length);
  assert.equal(englishProfile.projects.length, portfolio.projects.length);
  portfolio.projects.forEach((project, index) =>
    assert.equal(
      englishProfile.projects[index].features.length,
      project.features.length
    )
  );
  assert.equal(
    englishProfile.experience[0].missions.length,
    portfolio.experience[0].missions.length
  );
});

test("FR → EN → FR traduit l’interface et le profil sans modifier les liens", async () => {
  localStorage.clear();
  await mount();
  assert.equal(document.documentElement.lang, "fr");
  assert.match(document.querySelector("h1").textContent, /Bonjour/);
  const githubLinks = () =>
    [...document.querySelectorAll(".project-card a")].map(link => link.href);
  const before = githubLinks();
  await choose("en");
  assert.equal(document.documentElement.lang, "en");
  assert.match(document.title, /Software Engineering/);
  assert.match(
    document.querySelector('meta[name="description"]').content,
    /Seeking a final-year internship/
  );
  assert.match(document.querySelector("h1").textContent, /Hello/);
  assert.equal(
    document.querySelector("#skills-title").textContent.trim(),
    "Skills"
  );
  assert.equal(
    document.querySelector("#education-title").textContent.trim(),
    "Education"
  );
  assert.match(
    document.querySelector("#interests-title").textContent,
    /Interests/
  );
  assert.match(
    document.querySelector("#qualities-title").textContent,
    /Professional strengths/
  );
  assert.match(
    document.querySelector(".experience-text-date").textContent,
    /June/
  );
  assert.match(
    document.querySelector("#contact").textContent,
    /Casablanca, Morocco/
  );
  assert.match(document.querySelector("a[download]").textContent, /French/);
  assert.match(
    document.querySelector("nav").getAttribute("aria-label"),
    /Main navigation/
  );
  assert.deepEqual(githubLinks(), before);
  assert.equal(document.querySelectorAll(".skill-icon-grid li").length, 30);
  assert.equal(localStorage.getItem("portfolio-language"), "en");
  await choose("fr");
  assert.match(document.querySelector("h1").textContent, /Bonjour/);
  assert.equal(document.documentElement.lang, "fr");
  await unmount();
});

test("le choix survit au remontage et à la navigation vers les crédits", async () => {
  localStorage.setItem("portfolio-language", "en");
  await mount();
  assert.match(document.querySelector("h1").textContent, /Hello/);
  await unmount();
  await mount("/mentions.html");
  assert.equal(
    document.querySelector("h1").textContent,
    "Legal notice & credits"
  );
  assert.match(document.body.textContent, /without warranty/);
  assert.match(document.title, /Legal notice/);
  await choose("fr");
  assert.equal(document.querySelector("h1").textContent, "Mentions et crédits");
  await unmount();
});

test("le choix fonctionne avec un stockage bloqué ou une valeur inconnue", async () => {
  localStorage.setItem("portfolio-language", "xx");
  await mount();
  assert.equal(document.documentElement.lang, "fr");
  await unmount();
  const descriptor = Object.getOwnPropertyDescriptor(
    globalThis,
    "localStorage"
  );
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    get() {
      throw new Error("Storage blocked");
    }
  });
  try {
    await mount();
    await choose("en");
    assert.match(document.querySelector("h1").textContent, /Hello/);
    await unmount();
  } finally {
    Object.defineProperty(globalThis, "localStorage", descriptor);
  }
});
