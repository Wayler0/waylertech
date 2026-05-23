const particlesContainer = document.getElementById("particles");
const count = 42;

for (let i = 0; i < count; i += 1) {
  const dot = document.createElement("span");
  dot.className = "particle";
  dot.style.left = `${Math.random() * 100}%`;
  dot.style.top = `${100 + Math.random() * 30}%`;
  dot.style.opacity = (0.25 + Math.random() * 0.65).toString();
  dot.style.animationDuration = `${18 + Math.random() * 22}s`;
  dot.style.animationDelay = `${Math.random() * 6}s`;
  particlesContainer.appendChild(dot);
}

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle (three-dot button)
const mobileBtn = document.getElementById("mobile-menu-btn");
const topNav = document.querySelector(".topbar nav");
if (mobileBtn && topNav) {
  mobileBtn.addEventListener("click", () => {
    topNav.classList.toggle("open");
    mobileBtn.setAttribute(
      "aria-expanded",
      topNav.classList.contains("open") ? "true" : "false"
    );
  });

  // Close nav when a link is clicked (mobile)
  topNav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => topNav.classList.remove("open"))
  );
}
