import type { Message } from "@/feature/types";

export default function ChatOutput({ messages }: { messages: Message[] }) {
  // renders each message in a div with a scrollable overflow
  return (
    <div style={{overflowY: 'scroll'}}>
      {messages.map((message, index) => (
        <div key={index}>{message.text}</div>
      ))}
    </div>
  );
}
