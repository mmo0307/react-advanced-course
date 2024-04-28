import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

interface UseModalProps {
  animationDelay: number;

  isOpen?: boolean;

  onClose?: () => void;
}

/**
 * Reusable hook for modal components (drawer/modal)
 * @param animationDelay
 * @param isOpen
 * @param onClose
 */
export function useModal({ animationDelay, isOpen, onClose }: UseModalProps) {
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const [isMounted, setIsMounted] = useState<boolean>(false);

  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true);

      timerRef.current = setTimeout(() => {
        onClose();

        setIsClosing(false);
      }, animationDelay);
    }
  }, [onClose]);

  // Новые ссылки!!!
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);

      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return {
    isClosing,
    isMounted,
    close
  };
}
