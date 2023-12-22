import { useEffect, useRef } from "react";

export const useDebounce = (callback: any, delay: number) => {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
		// Cleanup previous timeout on re-render
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (args: any) => {
		// Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(args);
    }, delay);
  };

  return debouncedCallback;
};
