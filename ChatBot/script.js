// Configuration
const CONFIG = {
  maxHistoryLength: 50,
  confidenceThreshold: 0.6,
  fallbackResponses: [
      "I'm not sure how to respond.",
      "Could you rephrase that?",
      "Tell me more about that.",
      "Interesting! Can you elaborate?"
  ]
};

// Conversation Data
const CONVERSATIONS = {
  greetings: {
      triggers: ["hi", "hello", "hey"],
      responses: ["Hello!", "Hi there!", "Greetings!"]
  },
  goodbye: {
      triggers: ["bye", "goodbye", "see you"],
      responses: ["Bye!", "See you later!", "Take care!"]
  },
  status: {
      triggers: ["how are you", "what's up"],
      responses: ["I'm doing great!", "Feeling awesome!", "All good here!"]
  }
};

class ChatBot {
  constructor() {
      this.conversationHistory = [];
      this.initializeEventListeners();
  }

  initializeEventListeners() {
      const inputField = document.getElementById("input");
      const sendButton = document.querySelector(".send");

      inputField.addEventListener("keydown", (e) => {
          if (e.key === "Enter") this.handleMessageSend();
      });

      sendButton.addEventListener("click", () => this.handleMessageSend());
  }

  handleMessageSend() {
      const inputField = document.getElementById("input");
      const message = inputField.value.trim();

      if (message) {
          this.processMessage(message);
          inputField.value = "";
      }
  }

  processMessage(message) {
      this.addToHistory("user", message);
      const response = this.generateResponse(message);
      this.addToHistory("bot", response);
      this.renderMessage("user", message);
      this.renderMessage("bot", response);
  }

  generateResponse(message) {
      const processedMessage = this.preprocessMessage(message);
      
      // Prioritize specific conversation sets
      for (let [category, data] of Object.entries(CONVERSATIONS)) {
          const match = this.findBestMatch(processedMessage, data.triggers);
          if (match) {
              return this.selectRandomResponse(data.responses);
          }
      }

      // Fallback to generic responses
      return this.selectRandomResponse(CONFIG.fallbackResponses);
  }

  preprocessMessage(message) {
      return message.toLowerCase()
          .replace(/[^\w\s]/g, '')
          .trim();
  }

  findBestMatch(message, triggers) {
      return triggers.some(trigger => 
          message.includes(trigger)
      );
  }

  selectRandomResponse(responses) {
      return responses[Math.floor(Math.random() * responses.length)];
  }

  addToHistory(role, message) {
      this.conversationHistory.push({ role, message });
      
      // Limit conversation history
      if (this.conversationHistory.length > CONFIG.maxHistoryLength) {
          this.conversationHistory.shift();
      }
  }

  renderMessage(role, message) {
      const messageSection = document.getElementById("message-section");
      const messageDiv = document.createElement("div");
      
      messageDiv.id = role;
      messageDiv.classList.add("message");
      messageDiv.innerHTML = `<span id="${role}-response">${message}</span>`;
      
      messageSection.appendChild(messageDiv);
      messageSection.scrollTop = messageSection.scrollHeight;
  }
}

// Initialize chatbot on page load
document.addEventListener("DOMContentLoaded", () => {
  new ChatBot();
});
