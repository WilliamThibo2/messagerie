// Connexion au serveur Socket.IO
const socket = io("https://server-7v9z.onrender.com");

// Éléments du DOM
const messageContainer = document.getElementById("messageContainer");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

// Fonction pour envoyer un message
function sendMessage() {
    const message = messageInput.value;
    if (message) {
        console.log("Envoi du message :", message); // Log de débogage
        socket.emit("chat message", message);
        messageInput.value = ""; // Effacer l'entrée
    } else {
        console.log("Aucun message à envoyer."); // Log de débogage
    }
}

// Écouter le clic sur le bouton "Envoyer"
sendButton.addEventListener("click", sendMessage);

// Écouter les messages du serveur
socket.on("chat message", function(msg) {
    console.log("Message reçu :", msg); // Log de débogage
    const item = document.createElement("div");
    item.textContent = msg;
    messageContainer.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight); // Faire défiler vers le bas
});

// Gérer les erreurs de connexion
socket.on("connect_error", (error) => {
    console.error("Erreur de connexion :", error);
});
", (error) => {
    console.error("Erreur de connexion :", error);
});
