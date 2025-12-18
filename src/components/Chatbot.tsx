"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const KNOWLEDGE_BASE = [
  {
    keywords: ["hi", "hello", "hey", "greetings", "start"],
    response: "Hello! I'm the NanoFlows AI Assistant. I can help you with:\n\n• Our AI Products (CRM, Lead Gen, Calling Agents)\n• Custom AI Development Services\n• Pricing & Contact Info\n\nWhat would you like to know?"
  },
  {
    keywords: ["who", "what", "identity", "nanoflows"],
    response: "NanoFlows AI Software Technologies is a leader in Generative AI and business automation. We build custom AI solutions, intelligent agents, and enterprise software to automate your business operations."
  },
  {
    keywords: ["crm", "customer relationship", "dashboard"],
    response: "Our AI CRM & Dashboards are self-updating systems that predict deal outcomes and automate data entry. They feature:\n\n• 50% less data entry\n• Predictive pipeline analytics\n• Automated follow-ups\n\nWould you like a demo?"
  },
  {
    keywords: ["lead", "generation", "prospecting", "outreach"],
    response: "Our AI Lead Generation Engines automate your pipeline growth. They handle:\n\n• 24/7 Autonomous Prospecting\n• Multi-channel outreach (Email, LinkedIn)\n• Intelligent Lead Scoring\n\nIt's like having a sales team that never sleeps."
  },
  {
    keywords: ["call", "calling", "voice", "phone"],
    response: "Our AI Calling & Follow-up Agents provide human-like voice interactions for:\n\n• Outbound sales calls\n• Appointment setting\n• Customer service\n\nThey can handle thousands of calls simultaneously."
  },
  {
    keywords: ["content", "marketing", "blog", "write"],
    response: "Our AI Content & Marketing Systems create and distribute high-quality content autonomously. Features include:\n\n• Auto-blog post generation\n• SEO optimization\n• Social media scheduling\n• Brand voice training"
  },
  {
    keywords: ["service", "custom", "development", "consulting", "build"],
    response: "We offer comprehensive AI services:\n\n1. Custom LLM Development\n2. AI Agent Implementation\n3. Enterprise Automation\n4. SaaS Product Development\n\nTell me about your project, and I can guide you."
  },
  {
    keywords: ["price", "cost", "pricing", "money", "rate"],
    response: "We offer flexible pricing models:\n\n• SaaS Products: Monthly subscription plans (Starter, Growth, Enterprise)\n• Custom Services: Project-based or retainer models depending on scope.\n\nPlease contact our sales team for a custom quote."
  },
  {
    keywords: ["contact", "email", "phone", "support", "reach", "talk"],
    response: "You can reach us directly:\n\n📧 Email: contact@nanoflows.ai\n📞 Phone: +91 9618 433 043\n\nOr click the 'Contact' button in the menu to fill out a form."
  },
  {
    keywords: ["location", "where", "office", "address"],
    response: "We are headquartered in Visakhapatnam, India, serving clients globally."
  },
  {
    keywords: ["thank", "thanks", "bye", "goodbye"],
    response: "You're welcome! Feel free to ask if you have more questions. Have a great day!"
  }
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm NanoFlows AI Assistant. I can help you learn about our services, products, and how we can help transform your business with AI. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  const findResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    // Check for exact matches first
    const match = KNOWLEDGE_BASE.find(item =>
      item.keywords.some(keyword => lowerQuery.includes(keyword))
    );

    if (match) return match.response;

    // Default fallback
    return "I can help you with our AI Products (CRM, Lead Gen), Services, or Contact information. Could you please rephrase your question or select a topic?";
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate network delay for natural feel
    setTimeout(() => {
      const responseText = findResponse(userMessage.content);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responseText,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed right-6 bottom-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
        aria-label="Open chat assistant"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <svg
          className="w-6 h-6 group-hover:scale-110 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM8 10a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2zm-4 3h.01"
          />
        </svg>
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-50 md:hidden"
              onClick={handleClose}
              aria-hidden="true"
            />

            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="chat-title"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed inset-x-4 bottom-4 top-auto md:inset-auto md:right-6 md:bottom-6 z-50 w-auto md:w-96 h-[75vh] max-h-[500px] md:h-[450px] md:max-h-[70vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 id="chat-title" className="text-white font-semibold">NanoFlows AI</h3>
                    <p className="text-gray-400 text-xs">Ask me anything about our services</p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition"
                  aria-label="Close chat"
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div
                className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
                role="log"
                aria-live="polite"
                aria-label="Chat messages"
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.role === "user"
                          ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                          : "bg-white text-gray-800 shadow-sm border border-gray-100"
                        }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start" aria-live="polite">
                    <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100">
                      <div className="flex items-center gap-1" aria-label="Loading response">
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={sendMessage} className="p-4 border-t border-gray-200 bg-white">
                <div className="flex gap-2">
                  <label htmlFor="chat-input" className="sr-only">Type your message</label>
                  <input
                    ref={inputRef}
                    id="chat-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    disabled={isLoading}
                    aria-describedby="chat-hint"
                  />
                  <span id="chat-hint" className="sr-only">Press Enter to send your message</span>
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition"
                    aria-label="Send message"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
