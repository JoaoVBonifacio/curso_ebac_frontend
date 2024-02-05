const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numberOneInput = document.getElementById('number-one');
    const numberTwoInput = document.getElementById('number-two');

    const numberOne = parseFloat(numberOneInput.value);
    const numberTwo = parseFloat(numberTwoInput.value);

    const tudoCerto = document.querySelector('.tudoCerto');
    const numInvalido = document.querySelector('.numInvalido');

    if (numberOne < numberTwo) {
        tudoCerto.innerHTML = `Número A: <b>${numberOne}</b> é menor que Número B: <b>${numberTwo}</b>!`;
        tudoCerto.style.display = 'block';
        numInvalido.style.display = 'none';
        
        numberOneInput.value = '';
        numberTwoInput.value = '';
    } else {
        numInvalido.innerHTML = 'O número A deve ser menor que o Número B!';
        tudoCerto.style.display = 'none';
        numInvalido.style.display = 'block';
        
        numberOneInput.value = '';
        numberTwoInput.value = '';
    }
});