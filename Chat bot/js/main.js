import { generateResponse } from './chatbot.js';
import { addMessage } from './messageRenderer.js';
import { delay } from './utils.js';

// DOM elements
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const messagesContainer = document.getElementById('chat-messages');

addMessage(messagesContainer, 'Hello! How can I help you today?', 'bot');


async function handleSubmit(e) {
    e.preventDefault();
    const message = userInput.value.trim();
    
    if (!message) return;

    addMessage(messagesContainer, message, 'user');
    userInput.value = '';
    await delay(500);
    const response = generateResponse(message);
    addMessage(messagesContainer, response, 'bot');
}

chatForm.addEventListener('submit', handleSubmit);