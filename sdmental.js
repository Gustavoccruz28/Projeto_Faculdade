// script.js
document.getElementById('startButton').addEventListener('click', startBreathingExercise);

const messages = [
    "Inspire profundamente por 40 segundos...",
    "Segure a respiração por 40 segundos...",
    "Expire lentamente por 40 segundos...",
    "Tudo bem sentir o que você está sentindo.",
    "Respire fundo, você está no controle.",
    "Você está seguro, isso vai passar."
];

let messageIndex = 0;

function startBreathingExercise() {
    document.getElementById('startButton').classList.add('hidden');
    document.getElementById('instructions').classList.remove('hidden');
    showNextMessage();
}

function showNextMessage() {
    if (messageIndex < messages.length) {
        document.getElementById('message').textContent = messages[messageIndex];
        messageIndex++;
        setTimeout(showNextMessage, 40000); // Espera 40 segundos antes de mostrar a próxima mensagem
    } else {
        document.getElementById('mapsButton').classList.remove('hidden');
        document.getElementById('message').textContent = "Você concluiu o exercício.";
    }
}

document.getElementById('mapsButton').addEventListener('click', function() {
    const url = 'https://www.google.com/maps/search/?api=1&query=hospital+near+me';
    window.open(url, '_blank');
});
