"use strict";
// Preserve the reference theme's small-screen contact menu.
document.documentElement.classList.replace("no-js", "js");
const toggle = document.getElementById("contact-toggle");
const links = document.getElementById("contact-links");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  links.classList.toggle("is-open", open);
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  }
});
