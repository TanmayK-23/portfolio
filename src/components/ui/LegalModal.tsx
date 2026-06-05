import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export function LegalModal({ isOpen, onClose, title, content }: LegalModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, y: "100%", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: "100%", scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-y-1/2 sm:-translate-x-1/2 w-full sm:w-[90%] sm:max-w-xl bg-[#111] sm:rounded-3xl rounded-t-3xl border border-[#D7E2EA]/10 z-[101] shadow-2xl"
            style={{ padding: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            <div className="flex justify-between items-center" style={{ marginBottom: "3rem" }}>
              <h3 className="text-[#D7E2EA] font-black text-2xl sm:text-3xl uppercase tracking-wider">{title}</h3>
              <button 
                onClick={onClose}
                className="text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors p-2 rounded-full hover:bg-white/5 text-2xl leading-none"
              >
                ✕
              </button>
            </div>
            <div 
              className="text-[#D7E2EA]/70 leading-relaxed font-light text-base sm:text-lg flex flex-col"
              style={{ gap: "1.5rem" }}
            >
              {content}
            </div>
            <button
              onClick={onClose}
              className="w-full py-5 sm:py-6 bg-[#D7E2EA] text-[#0C0C0C] font-black uppercase tracking-widest text-sm sm:text-base rounded-full hover:opacity-90 transition-opacity"
              style={{ marginTop: "3rem" }}
            >
              I Understand
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
