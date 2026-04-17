import React, { useRef } from "react";
import { X } from "lucide-react";
import { useKeyboardSafeScroll } from "../../hooks/useKeyboardSafeScroll";

type AppDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export function AppDrawer({ isOpen, onClose, title, children }: AppDrawerProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  useKeyboardSafeScroll({ containerRef: scrollAreaRef, enabled: isOpen });
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-stretch sm:items-center justify-center bg-slate-900/40 dark:bg-slate-950/60 backdrop-blur-md p-0 sm:p-4 transition-all modal-overlay">
      <div className="fixed inset-0" onClick={onClose} />
      <div className="drawer-shell relative w-full h-full sm:h-auto bg-white dark:bg-slate-900 rounded-none sm:rounded-xl shadow-2xl border-0 sm:border border-slate-200 dark:border-slate-800 flex flex-col animate-in slide-in-from-bottom duration-300" style={{ width: '100%', maxWidth: 'min(100%, 32rem)', maxHeight: '100%' }}>
        <div className="drawer-header flex items-center justify-between gap-4 px-5 sm:px-8 pb-4" style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 1rem)' }}>
          <h2 className="min-w-0 text-2xl font-bold text-slate-900 dark:text-white tracking-tight break-words">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="shrink-0 p-2 bg-slate-100 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors">
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>
        <div ref={scrollAreaRef} className="drawer-scroll-area px-4 sm:px-8 pb-8 modal-scroll-area custom-scrollbar" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 2rem)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
