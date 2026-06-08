import ChatInput from "./components/ChatInput";

export default function Chatbot() {
  const handleChatSubmit = (message: string) => {
    console.log(message)
  };

  return (
    <div>
      chatbot
      <ChatInput onSubmit={handleChatSubmit} />
    </div>
  );
}
