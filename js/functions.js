function say(){
    alert("oi")
}


document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Impede o menu padrão de aparecer
    const customMenu = document.getElementById('custom-menu');

    if (event.target.classList.contains("findTheRightSquare")) {
        const cell = event.target;
        cell.style.display = "none"; // Oculta o elemento clicado
      }

});