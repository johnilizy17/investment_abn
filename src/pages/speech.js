"use client";

import { useState } from "react";

export default function SpeechDemo() {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  // Text → Speech
  const speak = () => {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  // Speech → Text
  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser 😢");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };

    recognition.start();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Speech ↔ Text Demo</h2>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Say something or type here..."
      />
      <br />
      <button onClick={speak}>🔊 Speak</button>
      <button onClick={startListening}>
        {listening ? "🎤 Listening..." : "🎤 Start Listening"}
      </button>
    </div>
  );
}
