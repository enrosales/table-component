import { useState, useEffect } from 'react';

export type UseFetch<T> = {
  loading: boolean;
  data?: T | null;
  error: string;
};

export default function useFetch<T>(url: string): UseFetch<T> {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .finally(() => setLoading(false))
      .catch(error => setError(error));
  }, [url]);

  return {
    loading,
    data,
    error,
  };
}
