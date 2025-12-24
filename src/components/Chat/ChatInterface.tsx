// src/components/Chat/ChatInterface.tsx

import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames'; // Assuming classnames utility is available or can be added

// Placeholder for individual message bubble component
const MessageBubble: React.FC<{ role: 'user' | 'assistant'; content: string }> = ({ role, content }) => {
  const isUser = role === 'user';
  const messageClasses = classNames(
    'inline-block p-3 rounded-lg max-w-xs',
    isUser ? 'bg-blue-600 text-white rounded-bl-none ml-auto' : 'bg-gray-200 text-gray-700 rounded-br-none'
  );

  // Basic rendering for Markdown-like content
  const renderContent = (text: string) => {
    // Very basic markdown support for demonstration
    const lines = text.split('\n').map((line, i) => {
      if (line.startsWith('### ')) return <h3 key={i} className="text-lg font-semibold mt-2">{line.substring(4)}</h3>;
      if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-bold mt-3">{line.substring(3)}</h2>;
      if (line.startsWith('# ')) return <h1 key={i} className="text-2xl font-extrabold mt-4">{line.substring(2)}</h1>;
      if (line.startsWith('* ')) return <li key={i} className="list-disc ml-6">{line.substring(2)}</li>;
      if (line.match(/^\s*$/)) return <br key={i} />; // Preserve empty lines for spacing
      return <p key={i} className="mb-1">{line}</p>;
    });
    return <>{lines}</>;
  };

  return (
    <div className={classNames('flex w-full mt-2 space-x-3', isUser ? 'justify-end' : 'justify-start')}>
      {!isUser && (
        <div className="flex-shrink-0 self-end h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white font-bold">
          🤖
        </div>
      )}
      <div className={messageClasses}>
        {renderContent(content)}
      </div>
      {isUser && (
        <div className="flex-shrink-0 self-end h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          👤
        </div>
      )}
    </div>
  );
};

// Placeholder for message list component
const MessageList: React.FC<{ messages: { role: 'user' | 'assistant'; content: string }[] }> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col p-4 flex-grow overflow-y-auto" ref={messagesEndRef}>
      {messages.map((msg, index) => (
        <MessageBubble key={index} role={msg.role} content={msg.content} />
      ))}
      {/* Add a scrollable div or similar mechanism here if needed for very long messages */}
    </div>
  );
};

// Placeholder for chat input component
const ChatInput: React.FC <{
  inputValue: string;
  setInputValue: (value: string) => void;
  onSendMessage: () => void;
  isLoading: boolean;
}> = ({ inputValue, setInputValue, onSendMessage, isLoading }) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className="p-4 flex items-center bg-white border-t">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Ask a question about the book..."
        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
        disabled={isLoading}
      />
      <button
        onClick={onSendMessage}
        disabled={!inputValue.trim() || isLoading}
        className={classNames(
          'ml-4 px-6 py-2 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors',
          isLoading || !inputValue.trim()
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
        )}
      >
        {isLoading ? '...' : 'Send'}
      </button>
    </div>
  );
};

// Placeholder for the main Chat Interface component
export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Placeholder for fetching chat response from the backend API
  // This function will need to be updated to make actual API calls
  // to your refactored RAG backend once it's set up.
  const fetchChatResponse = async (message: string): Promise<{ content: string }> => {
    // --- START: Placeholder for API Call ---
    // In a real implementation, this would make an API call to your backend service.
    // Example using fetch:
    // try {
    //   const response = await fetch('/api/chat', { // '/api/chat' is a placeholder route
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ message: message }),
    //   });
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
    //   const data = await response.json();
    //   return { content: data.response }; // Assuming your API returns { response: "..." } 
    // } catch (error) {
    //   console.error("API call failed:", error);
    //   throw error; // Re-throw to be caught by the main sendMessage logic
    // }

    console.log(`Simulating API call for message: "${message}"`);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate a response based on input (replace with actual API response)
    if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
      return { content: 'Hello! I am your Book Assistant. How can I help you with the Physical AI & Humanoid Robots book?' };
    } else if (message.toLowerCase().includes('book') || message.toLowerCase().includes('course')) {
      return { content: 'I can answer questions based on the content of the Physical AI & Humanoid Robots book. What specific topic are you interested in?' };
    } else if (message.toLowerCase().includes('docusaurus') || message.toLowerCase().includes('integration')) {
        return { content: 'Integrating AI assistants into documentation platforms like Docusaurus is a common pattern. It typically involves a backend API for the AI logic and frontend components for the UI.' };
    }
    else {
      return { content: `I've received your question: "${message}". I am designed to answer questions from the "Physical AI & Humanoid Robots" book. Please ask me something related to the book's content.` };
    }
    // --- END: Placeholder for API Call ---
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const newUserMessage = { role: 'user', content: inputValue };
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetchChatResponse(inputValue);
      const newAssistantMessage = { role: 'assistant', content: response.content };
      setMessages(prevMessages => [...prevMessages, newAssistantMessage]);
    } catch (error) {
      console.error("Error fetching chat response:", error);
      const errorMessage = { role: 'assistant', content: 'Sorry, I encountered an error while trying to get a response. Please try again later.' };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-focus input when component mounts
  useEffect(() => {
    // Find the input element and focus it. This might need adjustment depending on Docusaurus's DOM structure.
    const inputElement = document.querySelector('input[placeholder="Ask a question about the book..."]') as HTMLInputElement | null;
    if (inputElement) {
      inputElement.focus();
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="flex flex-col h-[70vh] w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="text-center py-3 bg-gradient-to-br from-purple-600 to-blue-700 text-white font-semibold rounded-t-lg shadow-md">
        Book Assistant Chat
      </div>
      <MessageList messages={messages} />
      <ChatInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSendMessage={sendMessage}
        isLoading={isLoading}
      />
    </div>
  );
};
