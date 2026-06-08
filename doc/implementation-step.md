# Implementation Step

## 1. Initial Setup
1.  init project
```bash
pnpm create vite .
```

2. choose `typescript`

## 2. Identify basic components
1. Chat input box
2. Chat output area

## 3. React Router
1. Install React Router
```bash
pnpm install react-router
```

## 4. Add @ alias for path resolution
1. Update `vite.config.ts`
```ts
resolve: {
  alias: {
    '@': '/src',
  },
},
```
2. Update `tsconfig.app.json`
```json
"compilerOptions": {
  "paths": {
    "@/*": ["./src/*"]
  },
  ...
```

## 5.. React Router (Data Mode)
- `router.tsx`
Format looks like:
```tsx
{
    path: "<your-url-path>",
    element: <CorrespondingComponent />,
  },
```

## 6. Chatbot
1. Create Chatbot component scaffold
```tsx
<!--Chatbot.tsx-->
export default function Chatbot() {
  return (
    <div>
      chatbot
    </div>
  );
}

```
2. Create chatbot route
```tsx
<!--router.tsx-->
{
  path: "/chatbot",
  element: <Chatbot />,
},
```

## 7. Components Details
1. ChatInput
  - Input field has a state to hold the input value
  - A callback function is passed to `onSubmit`
  - Submits the form on enter, triggering the callback function: `handleInputSubmit()`

  ```tsx
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
      <form onSubmit={handleInputSubmit}>
        <input type="text" placeholder="Type your message..." value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    );
  }
  ```
  
  - Add this component to the `Chatbot` component, start simple with an easy message handling logic:
  ```tsx
  import ChatInput from './ChatInput';

  export default function Chatbot() {
    const [messages, setMessages] = useState<string[]>([]);

    const handleSubmit = (message: string) => {
      // just display the message in the console for now
      console.log(message);
    };

    return (
      <div>
        <ChatInput onSubmit={handleSubmit} />
      </div>
    );
  }
  ```
  
2. ChatOutput
  - Add a Message type for chat messages
  ```tsx
  export type Message = {
    type: "human" | "bot";
    text: string;
    isLoading: boolean;
  };
  ``` 
  - Renders the messages, including the user's input and the chatbot's response.
  ```tsx
  import type { Message } from "@/feature/types";
  
  export default function ChatOutput({ messages }: { messages: Message[] }) {
    return (
      // renders each message in a div with a scrollable overflow
      <div style={{overflowY: 'scroll'}}>
        {messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
      </div>
    );
  }
  ```
  - Add this component to the `Chatbot` component, and pass in the messages state:
  ```tsx
  import ChatOutput from './ChatOutput';

  export default function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([]);

    return (
      <div>
        <ChatOutput messages={messages} />
        <ChatInput onSubmit={handleSubmit} />
      </div>
    );
  }
  ```

That's it! You now have a basic chatbot frontend that displays messages and handles user input.

## Additional Polishing
