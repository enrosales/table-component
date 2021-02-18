import { useState, useEffect } from 'react';

//API
import * as API from 'api/api';

export default function useFetch(url: string) {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await API.getRows(url);
        setData(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return {
    loading,
    data,
    error,
  };
}
