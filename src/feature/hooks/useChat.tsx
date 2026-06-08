
import { useState } from 'react';
import type { Message } from '@/feature/types';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleChatSubmit = (message: string) => {
    // console.log(message)
    const humanMessage: Message = { type: "human", text: message, isLoading: false };
    // setMessages([...messages, humanMessage]);
    const assistantMessage: Message = { type: "bot", text: "...", isLoading: true };

    setMessages((currentMessages) => [...currentMessages, humanMessage, assistantMessage]);
    // Simulate a loading response by setting isLoading to false after 1 second
    setTimeout(() => {
      setMessages((currentMessages) =>
        currentMessages.map((currentMessage) =>
          currentMessage === assistantMessage
            ? { ...currentMessage, isLoading: false }
            : currentMessage,
        ),
      );
    }, 1000);
  };

  return {
    messages,
    handleChatSubmit,
  };
}
