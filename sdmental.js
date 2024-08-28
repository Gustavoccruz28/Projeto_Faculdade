// script.js
document.getElementById('startButton').addEventListener('click', startBreathingExercise);

const messages = [
    "Inspire profundamente por 10 segundos...",
    "Segure a respiração por 10 segundos...",
    "Expire lentamente por 10 segundos...",
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
        setTimeout(showNextMessage, 10000); // Espera 10 segundos antes de mostrar a próxima mensagem
    } else {
        document.getElementById('mapsButton').classList.remove('hidden');
        document.getElementById('message').textContent = "Ainda está se sentindo mal? Clique aqui para encontrarmos um hospital.";
    }
}

document.getElementById('mapsButton').addEventListener('click', function() {
    const url = 'https://www.google.com/maps/search/?api=1&query=hospital+near+me';
    window.open(url, '_blank');
});
