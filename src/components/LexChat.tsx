"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, ChevronDown } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content: "Hello! I'm **Lex**, the virtual assistant for 1st Law. 👋\n\nI can help you with information about our practice areas, office hours, how to book a consultation, and more.\n\nHow can I assist you today?",
};

const QUICK_PROMPTS = [
  "What services do you offer?",
  "How do I book a consultation?",
  "What are your office hours?",
  "Tell me about the firm",
];

function formatMessage(text: string) {
  // Bold **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    // Handle line breaks
    return part.split("\n").map((line, j) => (
      <span key={`${i}-${j}`}>
        {line}
        {j < part.split("\n").length - 1 && <br />}
      </span>
    ));
  });
}

export default function LexChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showQuickPrompts, setShowQuickPrompts] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    setShowQuickPrompts(false);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "I'm sorry, something went wrong. Please call us on 0244 124 472." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I'm having trouble connecting right now. Please call us directly on 0244 124 472 or email firstlawgh@yahoo.com." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-[8.5rem] right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 flex flex-col shadow-2xl"
            style={{ maxHeight: "calc(100vh - 120px)" }}
          >
            {/* Header */}
            <div className="bg-brand-charcoal border border-brand-gold/20 rounded-t-xl px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-black border border-brand-gold/40 flex items-center justify-center">
                  <Bot size={16} className="text-brand-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-brand-white">Lex</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <p className="font-body text-[10px] text-brand-muted">1st Law Virtual Assistant</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-brand-muted hover:text-brand-white transition-colors"
              >
                <ChevronDown size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-brand-black/95 border-x border-brand-gold/20 px-4 py-4 space-y-4 min-h-0">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-brand-charcoal border border-brand-gold/30 flex items-center justify-center mr-2 mt-1 shrink-0">
                      <Bot size={11} className="text-brand-gold" strokeWidth={1.5} />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2.5 text-sm font-body leading-relaxed ${
                      msg.role === "user"
                        ? "bg-brand-gold text-brand-black rounded-2xl rounded-br-sm"
                        : "bg-brand-charcoal text-brand-cream rounded-2xl rounded-bl-sm"
                    }`}
                  >
                    {formatMessage(msg.content)}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex justify-start">
                  <div className="w-6 h-6 rounded-full bg-brand-charcoal border border-brand-gold/30 flex items-center justify-center mr-2 mt-1 shrink-0">
                    <Scale size={11} className="text-brand-gold" strokeWidth={1.5} />
                  </div>
                  <div className="bg-brand-charcoal rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Quick prompts */}
              {showQuickPrompts && messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {QUICK_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => sendMessage(prompt)}
                      className="font-body text-xs text-brand-gold border border-brand-gold/30 px-3 py-1.5 rounded-full hover:bg-brand-gold/10 transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Book Consultation CTA */}
            <div className="bg-brand-charcoal/80 border-x border-brand-gold/20 px-4 py-2 shrink-0">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-black font-body font-medium text-xs px-4 py-2.5 hover:bg-brand-gold-light transition-colors tracking-wide"
              >
                <Bot size={13} strokeWidth={2} />
                Book a Consultation
              </a>
            </div>

            {/* Input */}
            <div className="bg-brand-charcoal border border-brand-gold/20 rounded-b-xl px-3 py-3 flex gap-2 shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask Lex anything..."
                className="flex-1 bg-brand-black/60 border border-brand-gold/10 focus:border-brand-gold/40 text-brand-white font-body text-sm px-3 py-2 outline-none placeholder:text-brand-muted/40 rounded"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || loading}
                className="w-9 h-9 flex items-center justify-center bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed rounded"
              >
                <Send size={14} strokeWidth={2} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating round button — sits above WhatsApp widget */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-[5.5rem] right-6 z-50 w-14 h-14 rounded-full bg-brand-charcoal border-2 border-brand-gold/50 shadow-lg shadow-black/40 flex items-center justify-center"
        aria-label="Chat with Lex"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} className="text-brand-gold" />
            </motion.span>
          ) : (
            <motion.span
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Bot size={22} className="text-brand-gold" strokeWidth={1.5} />
            </motion.span>
          )}
        </AnimatePresence>
        {/* Green online pulse */}
        {!open && (
          <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-brand-charcoal" />
        )}
      </motion.button>
    </>
  );
}
