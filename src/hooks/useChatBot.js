import { useState } from "react";

const useChatbot = () => {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful virtual travel assistant." },
    {
      role: "assistant",
      content:
        "I’m your virtual travel agent. 👋 I’m here to help you plan your next trip.",
    },
    {
      role: "assistant",
      content:
        "Feel free to ask me a question or select from one of the prompts below.",
    },
  ]);

  const sendMessage = async (message) => {
    const newMessages = [...messages, { content: message, sender: "user" }];
    setMessages(newMessages);

    try {
      const response = await fetch("/.netlify/functions/chatgpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      setMessages([...newMessages, { content: data.message, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching AI response: ", error);
    }
  };

  return { messages, sendMessage };
};

export default useChatbot;
