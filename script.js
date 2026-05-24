const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Simple welcome message
window.onload = () => {
  console.log("Portfolio Loaded Successfully");
};

document.addEventListener("DOMContentLoaded", () => {

  const chatToggle = document.getElementById("chatToggle");
  const chatBox = document.getElementById("chatBox");
  const closeChat = document.getElementById("closeChat");
  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");

  // Open Chat
  chatToggle.addEventListener("click", () => {
    chatBox.style.display = "flex";
  });

  // Close Chat
  closeChat.addEventListener("click", () => {
    chatBox.style.display = "none";
  });

  // Send Message Button
  sendBtn.addEventListener("click", sendMessage);

  // Enter Key Support
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") return;

    // User Message
    const userMsg = document.createElement("div");
    userMsg.classList.add("user-message");
    userMsg.innerText = message;

    chatBody.appendChild(userMsg);

    // Bot Reply
    const botMsg = document.createElement("div");
    botMsg.classList.add("bot-message");

    let reply = "Sorry, I don't understand 😅";

    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
      reply = "Hello 👋 Welcome to my portfolio!";
    }
    else if (lowerMsg.includes("skills")) {
      reply = "I know HTML, CSS, JavaScript and Frontend Development 🚀";
    }
    else if (lowerMsg.includes("project")) {
      reply = "Check out my Projects section above 😄";
    }
    else if (lowerMsg.includes("contact")) {
      reply = "You can contact me through email or LinkedIn.";
    }
    else if (lowerMsg.includes("name")) {
      reply = "My name is Pratiksha Bobde 😊";
    }

    setTimeout(() => {

      botMsg.innerText = reply;

      chatBody.appendChild(botMsg);

      chatBody.scrollTop = chatBody.scrollHeight;

    }, 500);

    userInput.value = "";
  }

});
