import React from "react";
import { useState } from "react";
import useChatbot from "../hooks/useChatBot";
import Markdown from "react-markdown";
import useChatScroll from "../hooks/useChatScoll";

export default function ChatComponent() {
  const [input, setInput] = useState("");
  const {messages, sendMessage} = useChatbot();
  const ref = useChatScroll(messages);
  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };
  return (
    <div className="chatContainer">
      <h1>Chat Component</h1>
      <div ref={ref} className="chatContent">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`messages" ${msg.sender === "user" ? "blue" : "gray"}`}
          >
            <Markdown>{msg.text}</Markdown>
          </div>
        ))}
      </div>
      <div className="chatInputContainer">
        <input
          type="text"
          className="chatInput"
          placeholder="Your message here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Submit</button>
      </div>
    </div>
  );
}
