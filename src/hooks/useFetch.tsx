import { useEffect, useState } from 'react';

export const useFetch = (url: string, options: any) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          ...options,
          signal: abortController.signal,
        });
        const json = await res.json();

        setResponse(json);
        setLoading(false);
      } catch (err) {
        setError(err?.message);
        setLoading(false);
      }
    };

    if (url) fetchData();

    return () => {
      abortController.abort();
    };
  }, [url, options]);

  return { response, error, loading };
};
