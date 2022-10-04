import { useEffect, useState } from 'react';

export default function useDebouce(value: string, delay: number) {
  const [debouceValue, setDebouceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouceValue;
}
