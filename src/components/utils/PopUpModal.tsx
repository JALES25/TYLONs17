import { useEffect, useRef } from "react"

interface PopUpModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  autoCloseDelay?: number; 
}

export default function PopUpModal({ isVisible, onClose, children, autoCloseDelay }: PopUpModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]); 

  // Close modal after a delay if autoCloseDelay is provided
  useEffect(() => {
    if (isVisible && autoCloseDelay) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, autoCloseDelay, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div ref={modalRef} className="text-center bg-white p-6 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
}
