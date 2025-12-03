import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am the RSA Virtual Assistant. How can I help you today regarding our programs or services?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'I am having trouble connecting. Please try again later.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary-900 text-white p-4 rounded-full shadow-2xl hover:bg-primary-800 transition-all transform hover:scale-105 z-40 flex items-center gap-2"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="font-bold hidden sm:inline">Need Help?</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-slate-200 animate-fade-in-up">
          {/* Header */}
          <div className="bg-primary-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">RSA Assistant</h3>
                <p className="text-xs text-primary-200">Powered by AI</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-primary-800 text-white rounded-br-none'
                      : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-bl-none'
                  } ${msg.isError ? 'bg-red-50 text-red-800 border-red-200' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 rounded-bl-none flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-primary-500" />
                  <span className="text-xs text-slate-500">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about our programs..."
                className="flex-1 border border-slate-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-secondary-500 text-white p-2 rounded-full hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-2">
              AI can make mistakes. Please verify important information.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;