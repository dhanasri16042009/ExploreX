
document.addEventListener("DOMContentLoaded", function () {
  // LANGUAGE SETTINGS
  const languages = {
    English: "en-US",
    Tamil: "ta-IN",
    Hindi: "hi-IN",
    Telugu: "te-IN",
    Malayalam: "ml-IN",
    Kannada: "kn-IN",
    Marathi: "mr-IN",
    Urdu: "ur-PK",
    Saurashtra: "en-IN"
  };

  let selectedLanguage = "English";
  let recognition = null;

  // CREATE ASSISTANT BUTTON
  const assistantButton = document.createElement("button");
  assistantButton.textContent = "🎙️";
  assistantButton.id = "voiceAssistantButton";
  assistantButton.title = "Open ExploreX Voice Assistant";

  Object.assign(assistantButton.style, {
    position: "fixed",
    right: "25px",
    bottom: "25px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "none",
    background: "linear-gradient(135deg, #7c3aed, #2563eb)",
    color: "white",
    fontSize: "26px",
    cursor: "pointer",
    zIndex: "9999",
    boxShadow: "0 5px 25px rgba(100,80,255,0.5)"
  });

  document.body.appendChild(assistantButton);

  // CREATE ASSISTANT PANEL
  const panel = document.createElement("div");
  panel.id = "voiceAssistantPanel";

  Object.assign(panel.style, {
    display: "none",
    position: "fixed",
    right: "25px",
    bottom: "100px",
    width: "300px",
    maxWidth: "calc(100vw - 40px)",
    padding: "20px",
    borderRadius: "18px",
    background: "#111827",
    color: "white",
    zIndex: "9999",
    boxShadow: "0 10px 35px rgba(0,0,0,0.4)",
    fontFamily: "Arial, sans-serif"
  });

  panel.innerHTML = `
    <h3 style="margin-top:0;">🌍 ExploreX Voice AI</h3>

    <label for="voiceLanguage">Choose Language</label>

    <select id="voiceLanguage"
      style="width:100%;padding:10px;margin:10px 0;
      border-radius:8px;">
      ${Object.keys(languages).map(language =>
        `<option value="${language}">${language}</option>`
      ).join("")}
    </select>

    <p id="voiceStatus">Ready to listen!</p>

    <div id="voiceTranscript"
      style="padding:12px;background:#1f2937;
      border-radius:8px;min-height:45px;">
      Your voice message will appear here.
    </div>

    <button id="startListening"
      style="width:100%;padding:12px;margin-top:12px;
      background:#7c3aed;color:white;border:0;
      border-radius:8px;cursor:pointer;">
      🎤 Start Speaking
    </button>

    <button id="stopSpeaking"
      style="width:100%;padding:10px;margin-top:8px;
      background:#374151;color:white;border:0;
      border-radius:8px;cursor:pointer;">
      🔇 Stop Voice
    </button>

    <button id="closeAssistant"
      style="width:100%;padding:10px;margin-top:8px;
      background:#374151;color:white;border:0;
      border-radius:8px;cursor:pointer;">
      Close
    </button>
  `;

  document.body.appendChild(panel);

  const languageSelect = panel.querySelector("#voiceLanguage");
  const status = panel.querySelector("#voiceStatus");
  const transcript = panel.querySelector("#voiceTranscript");

  // OPEN AND CLOSE PANEL
  assistantButton.addEventListener("click", function () {
    panel.style.display =
      panel.style.display === "none" ? "block" : "none";
  });

  panel.querySelector("#closeAssistant").addEventListener("click", function () {
    panel.style.display = "none";
  });

  // LANGUAGE CHANGE
  languageSelect.addEventListener("change", function () {
    selectedLanguage = languageSelect.value;

    if (recognition) {
      recognition.lang = languages[selectedLanguage];
    }

    status.textContent = selectedLanguage + " selected!";
  });

  // VOICE RESPONSE
  function speakResponse(message) {
    if (!("speechSynthesis" in window)) {
      status.textContent = "Voice output is not supported.";
      return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(message);

    speech.lang = languages[selectedLanguage];
    speech.rate = 0.95;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  }

  // VOICE RECOGNITION
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  function startListening() {
    if (!SpeechRecognition) {
      status.textContent =
        "Voice recognition is not supported in this browser. Try a supported browser.";
      return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = languages[selectedLanguage];
    recognition.continuous = false;
    recognition.interimResults = false;

    status.textContent = "Listening... Speak now!";

    recognition.onresult = function (event) {
      const spokenText = event.results[0][0].transcript;

      transcript.textContent = "You said: " + spokenText;
      status.textContent = "Voice message received!";

      const reply =
        "I heard you say: " + spokenText +
        ". ExploreX travel assistant demo is ready. Full AI travel answers will be connected later.";

      speakResponse(reply);
    };

    recognition.onerror = function (event) {
      status.textContent = "Voice error: " + event.error;
    };

    recognition.onend = function () {
      if (status.textContent === "Listening... Speak now!") {
        status.textContent = "Ready to listen!";
      }
    };

    try {
      recognition.start();
    } catch (error) {
      status.textContent = "Please try starting again.";
    }
  }

  panel.querySelector("#startListening").addEventListener(
    "click",
    startListening
  );

  // STOP VOICE
  panel.querySelector("#stopSpeaking").addEventListener("click", function () {
    if (recognition) {
      recognition.stop();
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    status.textContent = "Voice stopped.";
  });

  console.log("ExploreX Voice Assistant loaded!");
});
