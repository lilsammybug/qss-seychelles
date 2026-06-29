/**
 * QSS Theme Manager
 * - Reads system preference via prefers-color-scheme
 * - Persists manual override to localStorage
 * - Sets data-theme on <html> before paint to prevent flash
 */

(function () {
  const stored = localStorage.getItem("qss-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
})();

function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") || "light";
  }

  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("qss-theme", t);
    btn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
    btn.title = t === "dark" ? "Switch to light mode" : "Switch to dark mode";
    btn.textContent = t === "dark" ? "☀️" : "🌙";
  }

  // Init button state
  setTheme(getTheme());

  btn.addEventListener("click", () => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  });

  // Sync if system preference changes and user hasn't overridden
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("qss-theme")) {
      setTheme(e.matches ? "dark" : "light");
    }
  });
}

// Run after DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initThemeToggle);
} else {
  initThemeToggle();
}
