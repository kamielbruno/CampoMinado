// Função para carregar o menu dinamicamente
function loadMenu(page) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../parte/menu.html", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("carregar-menu").innerHTML = xhr.responseText;
      addMenuEventListeners();
      updateMenu(page);
    }
  };
  xhr.send();
}
// Função para adicionar eventos aos itens do menu
function addMenuEventListeners() {
  var menuItems = document.querySelectorAll(".side-item");
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var page = this.getAttribute("data-page");
      loadContent(page);
    });
  });
  document.getElementById("open_btn").addEventListener("click", function () {
    document.getElementById("Barra-Lateral").classList.toggle("open-sidebar");
  });
}

document.getElementById("open_btn").addEventListener("click", function () {
  document.getElementById("Barra-Lateral").classList.toggle("open-sidebar");
});

// Função para atualizar o menu com base na página atual
function updateMenu(page) {
  var menuItems = document.querySelectorAll(".side-item");
  menuItems.forEach(function (item) {
    item.classList.remove("active");
    if (item.getAttribute("data-page") === page) {
      item.classList.add("active");
    }
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
