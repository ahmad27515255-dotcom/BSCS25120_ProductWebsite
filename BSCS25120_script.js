
window.onload = function () {
    if (document.body.contains(document.querySelector(".hero"))) {
        alert("Welcome to Cricket Gear Hub!");
    }

    // Footer Year
    let year = new Date().getFullYear();
    let footer = document.getElementById("footer-year");
    if (footer) {
        footer.textContent = "© " + year + " Cricket Gear Hub | All Rights Reserved";
    }
};


function checkStock(productName, inStock) {
    if (inStock) {
        alert(productName + " is available in stock ✅");
    } else {
        alert(productName + " is out of stock ❌");
    }
}


function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill all fields.");
        return false;
    }

   
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("⚠️ Please enter a valid email.");
        return false;
    }

    alert("✅ Message sent successfully!");
    return true;
}

function sendMessage() {
    let input = document.getElementById("user-input").value.toLowerCase();
    let chatLog = document.getElementById("chat-log");

    if (input.trim() === "") return;

   
    let userMsg = document.createElement("p");
    userMsg.textContent = "You: " + input;
    userMsg.classList.add("user-msg");
    chatLog.appendChild(userMsg);


    let botReply = getBotResponse(input);
    let botMsg = document.createElement("p");
    botMsg.textContent = "Bot: " + botReply;
    botMsg.classList.add("bot-msg");
    chatLog.appendChild(botMsg);

    document.getElementById("user-input").value = "";
    chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotResponse(input) {
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I help you today?";
    } else if (input.includes("how are you")) {
        return "I'm just a bot, but I'm doing fine! 😊";
    } else if (input.includes("bye")) {
        return "Goodbye! Have a nice day!";
    } else if (input.includes("help")) {
        return "Sure! You can ask me about products, contact info, or just chat!";
    } else if (input.includes("what type of products") || input.includes("products are you selling")) {
        return "CRICKET PRODUCTS";
    } else {
        return "Sorry, I didn't understand that. Can you rephrase?";
    }
}


document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
        event.preventDefault();   
        sendMessage();            
    }
});
