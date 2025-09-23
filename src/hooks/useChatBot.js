import { useState } from "react";

const useChatbot = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (message) => {
    const newMessages = [...messages, { text: message, sender: "user" }];
    setMessages(newMessages);

    try {
      const response = await fetch("/.netlify/functions/chatgpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      setMessages([...newMessages, { text: data.message, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching AI response: ", error);
    }
  };

  return { messages, sendMessage };
};

export default useChatbot;
