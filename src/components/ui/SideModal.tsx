// components/ui/SideModal.tsx
import {
  useEffect,
  useRef,
  type FC,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/cn';

interface SideModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  /** Override width, e.g. "w-full sm:w-[450px] md:w-[500px]" */
  width?: string;
  /** Extra header actions (e.g. a Save button), rendered left of the close button */
  actions?: ReactNode;
  /** Sticky footer pinned under the scrolling content (e.g. call-to-action buttons) */
  footer?: ReactNode;
}

export const SideModal: FC<SideModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  width = 'w-full sm:w-[450px] md:w-[500px]',
  actions,
  footer,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Track trigger element + move focus into the panel, restore on close
  useEffect(() => {
    if (isOpen) {
      previouslyFocused.current = document.activeElement as HTMLElement;
      const timer = setTimeout(() => closeButtonRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
    previouslyFocused.current?.focus();
  }, [isOpen]);

  // Escape to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap within the panel
  const handleTabTrap = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab' || !panelRef.current) return;
    const focusables = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={cn(
          'fixed inset-0 z-[9990] bg-slate-900/40 backdrop-blur-sm transition-[opacity,visibility] duration-300',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        aria-labelledby="side-modal-title"
        onKeyDown={handleTabTrap}
        className={cn(
          'fixed right-0 top-0 z-[9999] flex h-full flex-col border-l border-slate-200 bg-white shadow-2xl',
          'transform transition-[transform,visibility] duration-300 ease-in-out',
          width,
          isOpen ? 'visible translate-x-0' : 'invisible translate-x-full',
        )}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6">
          <h2 id="side-modal-title" className="truncate text-lg font-semibold text-slate-900">
            {title}
          </h2>

          <div className="flex shrink-0 items-center gap-3">
            {actions && <div className="flex items-center">{actions}</div>}

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close panel"
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-orange-500/40"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">{children}</div>

        {/* Footer */}
        {footer && <div className="shrink-0 border-t border-slate-200 bg-white px-4 py-4 sm:px-6">{footer}</div>}
      </div>
    </>
  );
};