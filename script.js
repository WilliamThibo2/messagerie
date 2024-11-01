function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const messageContainer = document.getElementById("messageContainer");

    if (messageInput.value.trim() !== "") {
        const message = document.createElement("div");
        message.classList.add("message");
        message.textContent = messageInput.value;
        messageContainer.appendChild(message);
        messageInput.value = "";
        messageContainer.scrollTop = messageContainer.scrollHeight; // Scroll vers le bas
    }
}
