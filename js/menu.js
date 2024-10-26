// Adicionar eventos aos itens do menu
function addMenuEventListeners() {
  var menuItems = document.querySelectorAll(".side-item");
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var page = this.getAttribute("data-page");
      updateMenu(page);
      loadContent(page);
    });
  });

  document.getElementById("open_btn").addEventListener("click", function () {
    document.getElementById("Barra-Lateral").classList.toggle("open-sidebar");
  });
}

// Função para carregar o conteúdo da página
function loadContent(page) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../paginas/" + page, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("main-content").innerHTML = xhr.responseText;
      updateMenu(page);
    }
  };
  xhr.send();
}

// Adicionar eventos ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  addMenuEventListeners();
});