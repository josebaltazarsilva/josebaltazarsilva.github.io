let messages = [
    {
        text: 'Mamita linda :) siempre estas en mi corazon!!',
        image: 'imagenes/mama1.jpg'
    },
    {
        text: 'Viajamos y viajaremos simpre....',
        image: 'imagenes/mama2.jpg'
    },
    {
        text: 'Espero tenerte siempre sanita!!! .',
        image: 'imagenes/mama3.jpg'
    },
    {
        text: 'y aunque sea muy viejo!!!',
        image: 'imagenes/mama4.jpg'
    },
    {
        text: 'Siempre sere tu bb!!!, te amo mamita',
        image: 'imagenes/mama5.jpg'
    },
    // ...añade más mensajes aquí...
];

let currentMessageIndex = 0;
let audioPlayer = document.getElementById('backgroundAudio');

document.getElementById('card').addEventListener('click', function() {
    document.getElementById('message').classList.add('active');
    this.classList.add('deactivate');
    audioPlayer.play();
});

document.getElementById('nextButton').addEventListener('click', function() {
    // Avanzar al siguiente mensaje
    currentMessageIndex++;

    // Si hemos llegado al final de la lista de mensajes, volver al inicio
    if (currentMessageIndex >= messages.length) {
        currentMessageIndex = 0;
    }

    // Mostrar el nuevo mensaje
    let message = messages[currentMessageIndex];
    document.getElementById('messageText').innerText = message.text;
    document.getElementById('messageImage').src = message.image;
});

window.onload = function() {
    document.getElementById('backgroundAudio').play();
};
