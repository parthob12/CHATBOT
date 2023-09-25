

document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("user-input");
    const chatLog = document.getElementById("chat-log");
    const sendButton = document.getElementById("send-button");
    const clearButton = document.getElementById("clear-button");
    const typingIndicator = document.getElementById("typing-indicator");

    sendButton.addEventListener("click", () => {
        sendMessage(userInput.value);
    });

    clearButton.addEventListener("click", () => {
        clearChat();
    });

    userInput.addEventListener("input", () => {
        if (userInput.value.trim() !== "") {
            showTypingIndicator(true);
        } else {
            showTypingIndicator(false);
        }
    });

    userInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            sendMessage(userInput.value);
        }
    });

    function sendMessage(message) {
        if (!message) return;

        // Display user message with timestamp
        const userTimestamp = getTimestamp();
        chatLog.innerHTML += `<div class="message user"><span class="timestamp">${userTimestamp}</span>${message}</div>`;
        userInput.value = "";

        // Simulate a bot response (you should replace this with your AI logic)
        setTimeout(() => {
            const botResponse = generateBotResponse(message);
            const botTimestamp = getTimestamp();
            chatLog.innerHTML += `<div class="message bot"><span class="timestamp">${botTimestamp}</span>${botResponse}</div>`;
            chatLog.scrollTop = chatLog.scrollHeight;
            showTypingIndicator(false);
        }, 500);
    }

    function generateBotResponse(userMessage) {
        // Randomized greetings
        const greetings = ["Hello!", "Hi there!", "Hey!", "Greetings!"];
        if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
            return getRandomElement(greetings);
        }

        // Handle common questions
        if (userMessage.toLowerCase().includes("how are you")) {
            return "I'm just a computer program, but I'm here to help you!";
        }

        if (userMessage.toLowerCase().includes("what's your name")) {
            return "I'm your friendly AI assistant.";
        }

        // Echo the user's message
        return `You said: "${userMessage}"`;
    }

    function getRandomElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    function getTimestamp() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    }

    function showTypingIndicator(isTyping) {
        typingIndicator.style.display = isTyping ? "block" : "none";
    }

    function clearChat() {
        chatLog.innerHTML = "";
    }
});



// Editable addtional code 
// // script.js
// const userInput = document.getElementById("user-input");
// const chatLog = document.getElementById("chat-log");

// userInput.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//         sendMessage(userInput.value);
//     }
// });

// function sendMessage(message) {
//     // Display user message in the chat log
//     chatLog.innerHTML += `<div class="user-message">${message}</div>`;
//     userInput.value = "";

//     // Send the message to the server (implement this in the next steps)
//     // Receive and display the bot's response
// }

// // script.js (continued)
// async function sendMessage(message) {
//     chatLog.innerHTML += `<div class="user-message">${message}</div>`;
//     userInput.value = "";

//     const response = await fetch("/api/message", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message }),
//     });

//     const data = await response.json();
//     const botMessage = data.botResponse;

//     chatLog.innerHTML += `<div class="bot-message">${botMessage}</div>`;
// }

// // script.js
// document.addEventListener("DOMContentLoaded", function () {
//     const userInput = document.getElementById("user-input");
//     const chatLog = document.getElementById("chat-log");
//     const sendButton = document.getElementById("send-button");
//     const clearButton = document.getElementById("clear-button");

//     sendButton.addEventListener("click", () => {
//         sendMessage(userInput.value);
//     });

//     clearButton.addEventListener("click", () => {
//         clearChat();
//     });

//     userInput.addEventListener("keydown", (event) => {
//         if (event.key === "Enter") {
//             sendMessage(userInput.value);
//         }
//     });

//     function sendMessage(message) {
//         if (!message) return;

//         // Display user message in the chat log
//         chatLog.innerHTML += `<div class="user-message">${message}</div>`;
//         userInput.value = "";

//         // Simulate a bot response (you should replace this with your AI logic)
//         setTimeout(() => {
//             const botResponse = generateBotResponse(message);
//             chatLog.innerHTML += `<div class="bot-message">${botResponse}</div>`;
//             chatLog.scrollTop = chatLog.scrollHeight;
//         }, 500);
//     }

//     function generateBotResponse(userMessage) {
//         // Randomized greetings
//         const greetings = ["Hello!", "Hi there!", "Hey!", "Greetings!"];
//         if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
//             return getRandomElement(greetings);
//         }

//         // Handle common questions
//         if (userMessage.toLowerCase().includes("how are you")) {
//             return "I'm just a computer program, but I'm here to help you!";
//         }

//         if (userMessage.toLowerCase().includes("what's your name")) {
//             return "I'm your friendly AI assistant.";
//         }

//         // Echo the user's message
//         return `You said: "${userMessage}"`;
//     }

//     function getRandomElement(array) {
//         const randomIndex = Math.floor(Math.random() * array.length);
//         return array[randomIndex];
//     }

//     function clearChat() {
//         chatLog.innerHTML = "";
//     }
// });
// // script.js
// document.addEventListener("DOMContentLoaded", function () {
//     const userInput = document.getElementById("user-input");
//     const chatLog = document.getElementById("chat-log");
//     const sendButton = document.getElementById("send-button");
//     const clearButton = document.getElementById("clear-button");
//     const typingIndicator = document.getElementById("typing-indicator");

//     sendButton.addEventListener("click", () => {
//         sendMessage(userInput.value);
//     });

//     clearButton.addEventListener("click", () => {
//         clearChat();
//     });

//     userInput.addEventListener("input", () => {
//         if (userInput.value.trim() !== "") {
//             showTypingIndicator(true);
//         } else {
//             showTypingIndicator(false);
//         }
//     });

//     userInput.addEventListener("keydown", (event) => {
//         if (event.key === "Enter") {
//             sendMessage(userInput.value);
//         }
//     });

//     function sendMessage(message) {
//         if (!message) return;

//         // Display user message with timestamp
//         const userTimestamp = getTimestamp();
//         chatLog.innerHTML += `<div class="message user"><span class="timestamp">${userTimestamp}</span>${message}</div>`;
//         userInput.value = "";

//         // Simulate a bot response (you should replace this with your AI logic)
//         setTimeout(() => {
//             const botResponse = generateBotResponse(message);
//             const botTimestamp = getTimestamp();
//             chatLog.innerHTML += `<div class="message bot"><span class="timestamp">${botTimestamp}</span>${botResponse}</div>`;
//             chatLog.scrollTop = chatLog.scrollHeight;
//             showTypingIndicator(false);
//         }, 500);
//     }

//     function generateBotResponse(userMessage) {
//         // Add your bot's responses here
//     }

//     function getTimestamp() {
//         const now = new Date();
//         const hours = now.getHours().toString().padStart(2, "0");
//         const minutes = now.getMinutes().toString().padStart(2, "0");
//         return `${hours}:${minutes}`;
//     }

//     function showTypingIndicator(isTyping) {
//         typingIndicator.style.display = isTyping ? "block" : "none";
//     }

//     function clearChat() {
//         chatLog.innerHTML = "";
//     }
// });