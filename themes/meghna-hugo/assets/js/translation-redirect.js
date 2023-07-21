(function goToTranslation() {
  let linkToTranslation = document.getElementById("translation-redirect-link");
  let a = document.createElement("a");
  if (window.location.href === "https://www.futuroreciclagem.com.br/") {
    let linkText = document.createTextNode("Português");
    a.appendChild(linkText);
    a.title = "Português";
    a.href = " https://www.futuroreciclagem.com.br/pt/index.html";

    return linkToTranslation.appendChild(a);
  } else {
    let linkText = document.createTextNode("English");
    a.appendChild(linkText);
    a.title = "English";
    a.href = "https://www.futuroreciclagem.com.br/";
    return linkToTranslation.appendChild(a);
  }
})();
