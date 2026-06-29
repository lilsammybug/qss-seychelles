export function initNavbar(activePage) {
  const navbarHTML = `
    <nav>
      <a href="index.html" class="nav-logo">
        <img src="qss_logo.png" alt="QSS Logo" />
        <div class="nav-logo-text">
          Quran & Sunnah Society<span>Seychelles</span>
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="index.html" class="${activePage === "home" ? "active" : ""}">Home</a></li>
        <li><a href="about.html" class="${activePage === "about" ? "active" : ""}">About</a></li>
        <li><a href="events.html" class="${activePage === "events" ? "active" : ""}">Events & Classes</a></li>
        <li><a href="gallery.html" class="${activePage === "gallery" ? "active" : ""}">Gallery</a></li>
        <li><a href="donate.html" class="${activePage === "donate" ? "active" : ""}">Donate</a></li>
        <li><a href="contact.html" class="${activePage === "contact" ? "active" : ""}">Contact</a></li>
        <li><a href="admin.html" style="color: var(--gold)" class="${activePage === "admin" ? "active" : ""}">Dashboard</a></li>
      </ul>
    </nav>
  `;
  document.body.insertAdjacentHTML("afterbegin", navbarHTML);
}
