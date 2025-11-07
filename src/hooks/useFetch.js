import { useState, useEffect, useCallback, useRef } from "react";

function useFetch(url, options = {}, { retry = 3, cache = true } = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const cacheRef = useRef(new Map());

  const fetchData = useCallback(async () => {
    if (!url) return;

    // ✅ If cached
    if (cache && cacheRef.current.has(url)) {
      setData(cacheRef.current.get(url));
      return;
    }

    setLoading(true);
    setError(null);

    let attempt = 0;
    while (attempt < retry) {
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const json = await response.json();

        if (cache) cacheRef.current.set(url, json);
        setData(json);
        break;
      } catch (err) {
        attempt++;
        if (attempt >= retry) {
          setError(err.message);
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    }
  }, [url, options, retry, cache]);

  useEffect(() => {
    const controller = new AbortController();
    fetchData();
    return () => controller.abort(); // ✅ cancel request on unmount
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

export default useFetch;
