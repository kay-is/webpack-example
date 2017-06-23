import "./main.css";
import * as home from "./pages/home";
import * as loading from "./pages/loading";

function loadPage() {
  const nameOfCurrentPage = document.location.hash.substr(1) || "home";

  if (nameOfCurrentPage === "home") return renderPage(home);

  renderPage(loading);

  import("./pages/" + nameOfCurrentPage).then(renderPage);
}

function renderPage(page) {
  const applicationRoot = document.getElementById("application");
  applicationRoot.innerHTML = `
    <div>
      <h1>Hello, World</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <hr>
    ${page.render()}
  `;
}

window.addEventListener("load", loadPage);
window.addEventListener("hashchange", loadPage);
