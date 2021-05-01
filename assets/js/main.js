function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {hou12: false, timeZone: 'GMT'});
}

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciarRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function (event) {
    const element = event.target;
    
    if(element.classList.contains('iniciar')) {
        clearInterval(timer);
        relogio.classList.remove('text-red');
        iniciarRelogio();
    }
    
    if(element.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('text-red');
    }

    if(element.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('text-red');
        segundos = 0;
    }
})