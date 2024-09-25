document.getElementById('abrirMenu').addEventListener('click', function() {
    document.getElementById('menu').style.left = '0';  // Exibe o menu ao clicar
});

document.getElementById('fecharMenu').addEventListener('click', function() {
    document.getElementById('menu').style.left = '-100%';  // Esconde o menu ao clicar
});

document.querySelector('form').addEventListener('submit', function (event) {
    if (!this.checkValidity()) {
        event.preventDefault(); 
        alert('Por favor, preencha todos os campos corretamente.'); 
    }
});
