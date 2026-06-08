import ChatInput from "./components/ChatInput";
import ChatOutput from "./components/ChatOutput";

import { useState } from "react";
import type { Message } from "@/feature/types";


export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleChatSubmit = (message: string) => {
    // console.log(message)
    const humanMessage: Message = { type: "human", text: message, isLoading: false };
    // setMessages([...messages, humanMessage]);
    const assistantMessage: Message = { type: "bot", text: "...", isLoading: true };

    setMessages([...messages, humanMessage, assistantMessage]);
  };


  return (
    <div>
      chatbot
      <ChatOutput messages={messages} />
      <ChatInput onSubmit={handleChatSubmit} />
    </div>
  );
}
