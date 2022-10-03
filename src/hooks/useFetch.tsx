import { useEffect, useState } from 'react';

type TFetch = {
  response: any;
  loading: boolean;
  error: string | null;
};

export const useFetch = (url: string, defaultResponse: any = null) => {
  const [states, setStates] = useState({
    response: defaultResponse,
    loading: false,
    error: null,
  } as TFetch);

  const fetchData = async () => {
    try {
      setStates((prevState: any) => ({
        ...prevState,
        loading: true,
      }));
      const res = await fetch(url);
      const json = await res.json();

      setStates((prevState: TFetch) => ({
        ...prevState,
        response: json,
      }));
    } catch (err) {
      setStates((prevState: TFetch) => ({
        ...prevState,
        error: err?.message,
      }));
    } finally {
      setStates((prevState: TFetch) => ({
        ...prevState,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    if (url) fetchData();
  }, [url]);

  return [states.response, states.error, states.loading];
};
