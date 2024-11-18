document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit',function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatoria = Math.random() * numeroMaximo;
        numeroAleatoria = Math.floor(numeroAleatoria + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatoria;
        document.querySelector('.resultado').style.display = 'block';
    })
})