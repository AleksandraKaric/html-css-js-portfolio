// Lista motivacionih poruka
const messages = [
    "Today is a new opportunity!",
    "Stay positive and work hard!",
    "Believe in yourself!",
    "You can achieve anything!",
    "Keep going, you're doing great!"
];

// Prikaz poruke na osnovu dana u nedelji
const today = new Date().getDay();
document.getElementById("daily-message").innerText = messages[today % messages.length];
