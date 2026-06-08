import { useState } from 'react';

export default function ChatInput({ onSubmit }: { onSubmit: (message: string) => void }) {
  const [input, setInput] = useState(''); // state to hold the input value

  const handleInputSubmit = (e: React.SubmitEvent) => {
    e.preventDefault(); // prevent the default form submission behavior, which is refreshing the page
    if (input.trim()) { // only when the input is not empty, then submit
      onSubmit(input); // call the onSubmit callback function with the input value
      setInput(''); // clear the input after submitting
    }
  };

  return (
    // when submit, call handleSubmit and passes in the submit event
    <form className="flex shrink-0 gap-2 border-t border-(--border) p-4" onSubmit={handleInputSubmit}>
      <input className="min-w-0 flex-1" type="text" placeholder="Type your message..." value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
}
