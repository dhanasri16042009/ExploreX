
document.addEventListener("DOMContentLoaded", function () {

  const chatbot = document.createElement("div");
  chatbot.id = "explorex-chatbot";

  chatbot.innerHTML = `
    <style>
      #explorex-chatbot * {
        box-sizing: border-box;
      }

      #chat-launcher {
        position: fixed;
        right: 25px;
        bottom: 100px;
        width: 60px;
        height: 60px;
        border: none;
        border-radius: 50%;
        background: linear-gradient(135deg,#7c3aed,#2563eb);
        color: white;
        font-size: 27px;
        cursor: pointer;
        z-index: 9998;
        box-shadow: 0 5px 25px #7c3aed66;
      }

      #chat-window {
        display: none;
        position: fixed;
        right: 25px;
        bottom: 170px;
        width: 350px;
        max-width: calc(100vw - 30px);
        height: 470px;
        max-height: 65vh;
        background: #111827;
        color: white;
        border: 1px solid #4b5563;
        border-radius: 18px;
        z-index: 9998;
        overflow: hidden;
        box-shadow: 0 10px 35px #0008;
        font-family: Arial, sans-serif;
      }

      #chat-header {
        padding: 15px;
        background: linear-gradient(135deg,#6d28d9,#2563eb);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      #chat-header h3 {
        margin: 0;
        font-size: 17px;
      }

      #chat-close {
        background: transparent;
        border: none;
        color: white;
        font-size: 22px;
        cursor: pointer;
      }

      #chat-language {
        width: 100%;
        padding: 10px;
        background: #1f2937;
        color: white;
        border: none;
        border-bottom: 1px solid #374151;
      }

      #chat-messages {
        height: 285px;
        overflow-y: auto;
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .chat-message {
        padding: 10px 12px;
        border-radius: 12px;
        max-width: 85%;
        font-size: 14px;
        line-height: 1.5;
        overflow-wrap: anywhere;
      }

      .bot-message {
        background: #293548;
        align-self: flex-start;
      }

      .user-message {
        background: #6d28d9;
        align-self: flex-end;
      }

      #chat-suggestions {
        display: flex;
        gap: 6px;
        padding: 8px 10px;
        overflow-x: auto;
      }

      #chat-suggestions button {
        white-space: nowrap;
        padding: 7px;
        border-radius: 15px;
        border: 1px solid #8b5cf6;
        background: transparent;
        color: white;
        cursor: pointer;
        font-size: 11px;
      }

      #chat-input-area {
        display: flex;
        gap: 7px;
        padding: 10px;
      }

      #chat-input {
        flex: 1;
        min-width: 0;
        padding: 11px;
        border: none;
        border-radius: 8px;
        background: #293548;
        color: white;
      }

      #chat-send {
        padding: 10px 13px;
        background: #7c3aed;
        border: none;
        border-radius: 8px;
        color: white;
        cursor: pointer;
      }

      @media(max-width: 420px) {
        #chat-launcher {
          right: 15px;
          bottom: 90px;
        }

        #chat-window {
          right: 10px;
          bottom: 160px;
        }
      }
    </style>

    <button id="chat-launcher" aria-label="Open travel chatbot">
      💬
    </button>

    <section id="chat-window" aria-label="ExploreX travel assistant">

      <div id="chat-header">
        <h3>🌍 ExploreX AI Assistant</h3>
        <button id="chat-close" aria-label="Close chatbot">×</button>
      </div>

      <select id="chat-language" aria-label="Choose chat language">
        <option value="en">English</option>
        <option value="ta">தமிழ்</option>
        <option value="hi">हिन्दी</option>
        <option value="te">తెలుగు</option>
        <option value="ml">മലയാളം</option>
        <option value="kn">ಕನ್ನಡ</option>
        <option value="mr">मराठी</option>
        <option value="ur">اردو</option>
        <option value="saw">Saurashtra</option>
      </select>

      <div id="chat-messages" aria-live="polite">
        <div class="chat-message bot-message">
          Hello! Welcome to ExploreX. Where would you like to travel?
        </div>
      </div>

      <div id="chat-suggestions">
        <button data-question="Best places to visit in India?">
          🇮🇳 India
        </button>
        <button data-question="Suggest a travel destination">
          ✈️ Destinations
        </button>
        <button data-question="Give me travel tips">
          💡 Travel tips
        </button>
      </div>

      <div id="chat-input-area">
        <input
          id="chat-input"
          type="text"
          placeholder="Ask about your trip..."
          aria-label="Your travel question"
        />

        <button id="chat-send">Send</button>
      </div>

    </section>
  `;

  document.body.appendChild(chatbot);

  const launcher = chatbot.querySelector("#chat-launcher");
  const chatWindow = chatbot.querySelector("#chat-window");
  const closeButton = chatbot.querySelector("#chat-close");
  const messages = chatbot.querySelector("#chat-messages");
  const input = chatbot.querySelector("#chat-input");
  const sendButton = chatbot.querySelector("#chat-send");
  const languageSelect = chatbot.querySelector("#chat-language");

  const translations = {
    en: {
      welcome: "Hello! Welcome to ExploreX. Where would you like to travel?",
      placeholder: "Ask about your trip...",
      send: "Send",
      reply: "Thanks for your question! This is the ExploreX demo assistant. Real AI travel answers will be connected in a later step."
    },
    ta: {
      welcome: "வணக்கம்! ExploreX-க்கு வரவேற்கிறோம். எங்கு பயணம் செய்ய விரும்புகிறீர்கள்?",
      placeholder: "உங்கள் பயணம் பற்றி கேளுங்கள்...",
      send: "அனுப்பு",
      reply: "உங்கள் கேள்விக்கு நன்றி! இது ExploreX மாதிரி உதவியாளர். உண்மையான AI பதில்கள் பின்னர் இணைக்கப்படும்."
    },
    hi: {
      welcome: "नमस्ते! ExploreX में आपका स्वागत है। आप कहाँ यात्रा करना चाहते हैं?",
      placeholder: "अपनी यात्रा के बारे में पूछें...",
      send: "भेजें",
      reply: "आपके सवाल के लिए धन्यवाद! यह ExploreX का डेमो सहायक है। वास्तविक AI जवाब बाद में जोड़े जाएंगे।"
    },
    te: {
      welcome: "నమస్కారం! ExploreX కు స్వాగతం. మీరు ఎక్కడికి ప్రయాణించాలనుకుంటున్నారు?",
      placeholder: "మీ ప్రయాణం గురించి అడగండి...",
      send: "పంపు",
      reply: "మీ ప్రశ్నకు ధన్యవాదాలు! ఇది ExploreX డెమో సహాయకుడు. నిజమైన AI సమాధానాలు తరువాత జోడించబడతాయి."
    },
    ml: {
      welcome: "നമസ്കാരം! ExploreX-ലേക്ക് സ്വാഗതം. നിങ്ങൾ എവിടേക്ക് യാത്ര ചെയ്യാൻ ആഗ്രഹിക്കുന്നു?",
      placeholder: "നിങ്ങളുടെ യാത്രയെക്കുറിച്ച് ചോദിക്കൂ...",
      send: "അയയ്ക്കുക",
      reply: "നിങ്ങളുടെ ചോദ്യത്തിന് നന്ദി! ഇത് ExploreX ഡെമോ അസിസ്റ്റന്റാണ്. യഥാർത്ഥ AI മറുപടികൾ പിന്നീട് ചേർക്കും."
    },
    kn: {
      welcome: "ನಮಸ್ಕಾರ! ExploreX ಗೆ ಸ್ವಾಗತ. ನೀವು ಎಲ್ಲಿಗೆ ಪ್ರಯಾಣಿಸಲು ಬಯಸುತ್ತೀರಿ?",
      placeholder: "ನಿಮ್ಮ ಪ್ರಯಾಣದ ಬಗ್ಗೆ ಕೇಳಿ...",
      send: "ಕಳುಹಿಸಿ",
      reply: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಗೆ ಧನ್ಯವಾದಗಳು! ಇದು ExploreX ಡೆಮೊ ಸಹಾಯಕ. ನಿಜವಾದ AI ಉತ್ತರಗಳನ್ನು ನಂತರ ಸೇರಿಸಲಾಗುತ್ತದೆ."
    },
    mr: {
      welcome: "नमस्कार! ExploreX मध्ये आपले स्वागत आहे. तुम्हाला कुठे प्रवास करायचा आहे?",
      placeholder: "तुमच्या प्रवासाबद्दल विचारा...",
      send: "पाठवा",
      reply: "तुमच्या प्रश्नाबद्दल धन्यवाद! हा ExploreX डेमो सहाय्यक आहे. खरे AI उत्तर नंतर जोडले जातील."
    },
    ur: {
      welcome: "خوش آمدید! آپ کہاں سفر کرنا چاہتے ہیں؟",
      placeholder: "اپنے سفر کے بارے میں پوچھیں...",
      send: "بھیجیں",
      reply: "آپ کے سوال کا شکریہ! یہ ExploreX کا ڈیمو اسسٹنٹ ہے۔ حقیقی AI جوابات بعد میں شامل کیے جائیں گے۔"
    },
    saw: {
      welcome: "Welcome to ExploreX! Where would you like to travel?",
      placeholder: "Ask about your trip...",
      send: "Send",
      reply: "Thank you! This is the ExploreX demo assistant."
    }
  };

  function addMessage(text, type) {
    const message = document.createElement("div");
    message.className = "chat-message " + type;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }

  function updateLanguage() {
    const language = translations[languageSelect.value] || translations.en;

    input.placeholder = language.placeholder;
    sendButton.textContent = language.send;
  }

  function sendMessage() {
    const question = input.value.trim();

    if (!question) return;

    addMessage(question, "user-message");
    input.value = "";

    const language = languageSelect.value;
    const response = translations[language] || translations.en;

    setTimeout(function () {
      addMessage(response.reply, "bot-message");
    }, 500);
  }

  launcher.addEventListener("click", function () {
    chatWindow.style.display =
      chatWindow.style.display === "none" ? "block" : "none";
  });

  closeButton.addEventListener("click", function () {
    chatWindow.style.display = "none";
  });

  sendButton.addEventListener("click", sendMessage);

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  languageSelect.addEventListener("change", updateLanguage);

  chatbot.querySelectorAll("[data-question]").forEach(function (button) {
    button.addEventListener("click", function () {
      input.value = button.dataset.question;
      sendMessage();
    });
  });

  updateLanguage();

  console.log("ExploreX Chatbot Loaded Successfully!");

});
