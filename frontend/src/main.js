function loadContent(pageName) {
  fetch(`pages/${pageName}/index.html`)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const appContainer = document.querySelector('#app');
      while (appContainer.firstChild) {
        appContainer.removeChild(appContainer.firstChild);
      }
      appContainer.appendChild(doc.body.firstChild);
    })
    .catch(error => console.error(error));
}
  
document.querySelector("#home-link").addEventListener("click", (e) => {
e.preventDefault();
loadContent("home");
});

document.querySelector("#about-link").addEventListener("click", (e) => {
e.preventDefault();
loadContent("about");
});

document.querySelector("#contact-link").addEventListener("click", (e) => {
e.preventDefault();
loadContent("contact");
});

document.querySelector("#login-link").addEventListener("click", (e) => {
    e.preventDefault();
    loadContent("login");
    });

loadContent("home");