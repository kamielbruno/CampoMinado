let clickCount = 0; // Variável para contar o número de cliques com o botão direito permitidos
const maxClicks = 10; // Limite de cliques
const counterImages = [
    document.getElementById("counterNumber2"), // Segunda imagem (representando a unidade)
    document.getElementById("counterNumber3")  // Terceira imagem (representando as dezenas)
];

function rightClickMouse() {
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // Impede o menu padrão de aparecer
        const newImagePath = "../media/img/bandeira.png";

        // Verifica se o elemento clicado tem a classe 'findTheRightSquare'
        if (event.target.classList.contains("findTheRightSquare")) {
            if (clickCount < maxClicks) { // Verifica se ainda não atingiu o limite de 10 cliques
                event.target.src = newImagePath; // Substitui o atributo src pelo novo caminho
                clickCount++; // Incrementa a contagem de cliques
                updateBandeira(); // Atualiza o display de contagem
            } else {
                console.log("Limite de 10 cliques atingido!"); // Mensagem ao atingir o limite
            }
        }
    });
}

function updateBandeira() {
    let remainingFlags = maxClicks - clickCount; // Contagem restante

    let tens = Math.floor(remainingFlags / 10); // Calcula as dezenas
    let units = remainingFlags % 10; // Calcula as unidades

    // Atualiza as imagens com base no valor restante
    counterImages[1].src = `../media/img/time0${units}.png`; // Atualiza a imagem da unidade
    counterImages[0].src = `../media/img/time0${tens}.png`; // Atualiza a imagem das dezenas
}

// Inicializa o evento de clique direito
rightClickMouse();
