document.getElementById('abrirMenu').addEventListener('click', function() {
    document.getElementById('menu').style.left = '0';  // Exibe o menu ao clicar
});

document.getElementById('fecharMenu').addEventListener('click', function() {
    document.getElementById('menu').style.left = '-100%';  // Esconde o menu ao clicar
});
