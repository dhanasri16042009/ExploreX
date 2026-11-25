
// ==================================
// EXPLOREX - JAVASCRIPT
// ==================================

// 1. DESTINATION SEARCH

function searchDestination() {
    const destination = document.getElementById("destinationSearch").value.trim();

    if (!destination) {
        alert("Please enter a destination!");
        return;
    }

    window.open(
        "https://www.google.com/maps/search/" +
        encodeURIComponent(destination + " tourist attractions"),
        "_blank"
    );
}


// 2. TOURIST PLACE INFORMATION

function getPlaceInfo() {

    const place = document.getElementById("placeSearch").value.trim();
    const result = document.getElementById("placeResult");

    if (!place) {
        result.textContent = "Please enter a tourist place.";
        return;
    }

    result.replaceChildren();

    const heading = document.createElement("h3");
    heading.textContent = place;

    const description = document.createElement("p");
    description.textContent =
        "Explore location, visiting hours, entry fees and seasonal information through verified sources.";

    const link = document.createElement("a");
    link.textContent = "Open Location Map";
    link.href = "https://www.google.com/maps/search/" +
        encodeURIComponent(place);
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const infoLink = document.createElement("a");
    infoLink.textContent = "Find Official Tourist Information";
    infoLink.href = "https://www.google.com/search?q=" +
        encodeURIComponent(place + " official opening hours entry fee");
    infoLink.target = "_blank";
    infoLink.rel = "noopener noreferrer";

    result.append(heading, description, link, document.createElement("br"),
        infoLink);
}


// 3. TOUR GUIDE SEARCH

function findGuides() {

    const location = document.getElementById("guideLocation").value.trim();
    const result = document.getElementById("guideResult");

    if (!location) {
        result.textContent = "Please enter a location.";
        return;
    }

    result.replaceChildren();

    const message = document.createElement("p");
    message.textContent = "Find local tourist guides in " + location;

    const link = document.createElement("a");
    link.textContent = "Find Local Guides on Google Maps";
    link.href = "https://www.google.com/maps/search/" +
        encodeURIComponent("tourist guides in " + location);
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    result.append(message, link);
}


// 4. CHATBOT LANGUAGE RESPONSES

const translations = {

    "en-US": {
        welcome: "Hello! Welcome to ExploreX. How can I help you?",
        destination: "I can help you explore destinations. Which country or city would you like to visit?",
        hotel: "You can discover hotels, resorts and accommodation using our Hotels section.",
        food: "Explore local restaurants and traditional foods in our Native Food section.",
        places: "Tell me your destination. I can help you find tourist attractions and maps.",
        guide: "You can search for local tour guides using our Tour Guide section.",
        default: "I can help with destinations, hotels, local foods, tourist places and tour guides. Please tell me what you need."
    },

    "hi-IN": {
        welcome: "नमस्ते! ExploreX में आपका स्वागत है। मैं आपकी कैसे मदद कर सकता हूँ?",
        destination: "मैं आपको यात्रा के लिए शहर और देश खोजने में मदद कर सकता हूँ।",
        hotel: "आप हमारे होटल सेक्शन में होटल और रिसॉर्ट खोज सकते हैं।",
        food: "हमारे फूड सेक्शन में स्थानीय और पारंपरिक भोजन खोजें।",
        places: "अपनी जगह बताएं। मैं आपको पर्यटन स्थलों और नक्शों को खोजने में मदद कर सकता हूँ।",
        guide: "आप हमारे टूर गाइड सेक्शन में स्थानीय गाइड खोज सकते हैं।",
        default: "मैं आपको यात्रा स्थलों, होटल, भोजन और टूर गाइड के बारे में मदद कर सकता हूँ।"
    },

    "te-IN": {
        welcome: "నమస్కారం! ExploreX కు స్వాగతం. నేను మీకు ఎలా సహాయం చేయగలను?",
        destination: "మీ ప్రయాణానికి నగరాలు మరియు దేశాలను కనుగొనడంలో నేను సహాయం చేస్తాను.",
        hotel: "మా హోటల్ విభాగంలో హోటల్స్ మరియు రిసార్ట్స్ చూడవచ్చు.",
        food: "మా ఫుడ్ విభాగంలో స్థానిక మరియు సంప్రదాయ ఆహారాన్ని కనుగొనండి.",
        places: "మీ ప్రదేశాన్ని చెప్పండి. పర్యాటక ప్రదేశాలు మరియు మ్యాప్స్ కనుగొనడంలో సహాయం చేస్తాను.",
        guide: "మా టూర్ గైడ్ విభాగంలో స్థానిక గైడ్స్‌ను కనుగొనండి.",
        default: "ప్రయాణ ప్రదేశాలు, హోటల్స్, ఆహారం మరియు టూర్ గైడ్స్ గురించి నేను సహాయం చేయగలను."
    },

    "ta-IN": {
        welcome: "வணக்கம்! ExploreX-க்கு வரவேற்கிறோம். நான் உங்களுக்கு எப்படி உதவலாம்?",
        destination: "உங்கள் பயணத்திற்கான நகரங்கள் மற்றும் நாடுகளைக் கண்டறிய உதவுகிறேன்.",
        hotel: "எங்கள் ஹோட்டல் பகுதியில் ஹோட்டல்கள் மற்றும் ரிசார்ட்களைக் காணலாம்.",
        food: "எங்கள் உணவுப் பகுதியில் உள்ளூர் மற்றும் பாரம்பரிய உணவுகளைக் கண்டறியலாம்.",
        places: "உங்கள் இடத்தைச் சொல்லுங்கள். சுற்றுலாத் தலங்கள் மற்றும் வரைபடங்களைக் கண்டறிய உதவுகிறேன்.",
        guide: "எங்கள் Tour Guide பகுதியில் உள்ளூர் வழிகாட்டிகளைக் கண்டறியலாம்.",
        default: "சுற்றுலாத் தலங்கள், ஹோட்டல்கள், உள்ளூர் உணவுகள் மற்றும் வழிகாட்டிகள் பற்றிய தகவல்களை வழங்க உதவுகிறேன்."
    }

};


// 5. CHATBOT RESPONSE SYSTEM

function getBotResponse(message, language) {

    const text = message.toLowerCase();

    const responses = translations[language] || translations["en-US"];

    if (/hotel|stay|resort|room|होटल|హోటల్|தங்க|ஹோட்டல்/.test(text)) {
        return responses.hotel;
    }

    if (/food|restaurant|eat|cuisine|खाना|भोजन|ఆహారం|తిండి|உணவு|சாப்பாடு/.test(text)) {
        return responses.food;
    }

    if (/place|tourist|attraction|visit|map|घूमने|पर्यटन|పర్యాటక|ప్రదేశం|சுற்றுலா|இடம்|செல்ல/.test(text)) {
        return responses.places;
    }

    if (/guide|tour guide|गाइड|గైడ్|வழிகாட்டி/.test(text)) {
        return responses.guide;
    }

    if (/travel|destination|trip|country|city|பயணம்|நாடு|நகரம்|ప్రయాణం|దేశం|యాత్ర|यात्रा|देश/.test(text)) {
        return responses.destination;
    }

    return responses.default;
}


// 6. SEND CHAT MESSAGE

function sendMessage() {

    const input = document.getElementById("userMessage");
    const message = input.value.trim();

    if (!message) return;

    const language = document.getElementById("language").value;

    addMessage(message, "user-message");

    input.value = "";

    setTimeout(() => {

        const reply = getBotResponse(message, language);

        addMessage(reply, "bot-message");

        speakReply(reply, language);

    }, 500);
}


// 7. DISPLAY CHAT MESSAGES

function addMessage(message, className) {

    const chat = document.getElementById("chatMessages");

    const messageDiv = document.createElement("div");

    messageDiv.className = className;
    messageDiv.textContent = message;

    chat.appendChild(messageDiv);

    chat.scrollTop = chat.scrollHeight;
}


// 8. VOICE REPLY

function speakReply(message, language) {

    if (!("speechSynthesis" in window)) {
        return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(message);

    speech.lang = language;
    speech.rate = 0.95;

    window.speechSynthesis.speak(speech);
}


// 9. VOICE INPUT

function startVoice() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Voice recognition is not supported in this browser. Try Google Chrome.");
        return;
    }

    const recognition = new SpeechRecognition();

    const language = document.getElementById("language").value;

    recognition.lang = language;
    recognition.interimResults = false;

    recognition.onstart = function() {
        alert("Listening... Speak now!");
    };

    recognition.onresult = function(event) {

        const voiceText =
            event.results[0][0].transcript;

        document.getElementById("userMessage").value = voiceText;

        sendMessage();
    };

    recognition.onerror = function() {
        alert("Voice recognition failed. Please try again.");
    };

    recognition.start();
}


// 10. ENTER KEY TO SEND MESSAGE

document.getElementById("userMessage")
.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// 11. INITIAL LANGUAGE GREETING

window.addEventListener("load", function() {

    const language = document.getElementById("language");

    language.addEventListener("change", function() {

        const selectedLanguage = language.value;

        addMessage(
            translations[selectedLanguage].welcome,
            "bot-message"
        );

    });

});
