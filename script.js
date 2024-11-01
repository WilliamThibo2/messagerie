// Connexion au serveur Socket.IO
const socket = io("https://server-7v9z.onrender.com"); // Utilisez simplement l'URL sans le port

// Éléments du DOM
const messageContainer = document.getElementById("messageContainer");
const messageInput = document.getElementById("messageInput");

// Fonction pour envoyer un message
function sendMessage() {
    const message = messageInput.value;
    if (message) {
        // Émettre le message au serveur
        socket.emit("chat message", message);
        messageInput.value = ""; // Effacer l'entrée
    }
}

// Écouter les messages du serveur
socket.on("chat message", function(msg) {
    const item = document.createElement("div");
    item.textContent = msg;
    messageContainer.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight); // Faire défiler vers le bas
});

// Gérer les erreurs de connexion
socket.on("connect_error", (error) => {
    console.error("Erreur de connexion :", error);
});
