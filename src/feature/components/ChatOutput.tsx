import { useEffect, useRef } from "react";
import type { Message } from "@/feature/types";

export default function ChatOutput({ messages }: { messages: Message[] }) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: "end" });
  }, [messages]);

  // renders each message in a div with a scrollable overflow
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto p-4 text-left">
      {messages.map((message, index) => (
        <div
          className={message.type === "human" ? "self-end" : "self-start"}
          key={index}
        >
          {/*Simulates a loading response by displaying a spinner and "Loading..." text*/}
          {message.isLoading ? (
            <div className="flex items-center gap-2" role="status" aria-label="Loading response">
              {/*Spinner*/}
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-(--border) border-t-(--accent)" />
              <span>Loading...</span>
            </div>
          ) : (
            message.text
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
