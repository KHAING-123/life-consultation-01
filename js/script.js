// FAQ accordion
document.querySelectorAll(".faq-item__q").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const answer = item.querySelector(".faq-item__a");
    const isOpen = item.getAttribute("data-open") === "true";

    document.querySelectorAll(".faq-item").forEach((other) => {
      other.setAttribute("data-open", "false");
      other.querySelector(".faq-item__q").setAttribute("aria-expanded", "false");
      other.querySelector(".faq-item__a").style.maxHeight = null;
    });

    if (!isOpen) {
      item.setAttribute("data-open", "true");
      btn.setAttribute("aria-expanded", "true");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

// Mobile sticky CTA: ヒーロー(FVのCTA)が見えている間は隠す
const stickyCta = document.getElementById("stickyCta");
const heroSection = document.querySelector(".hero");

if (stickyCta && heroSection && "IntersectionObserver" in window) {
  new IntersectionObserver(
    ([entry]) => {
      stickyCta.classList.toggle("is-hidden", entry.isIntersecting);
    },
    { threshold: 0.2 }
  ).observe(heroSection);
}
