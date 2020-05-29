import { useState, useCallback } from "react";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }
        const response = await fetch(url, {
          method: method,
          headers,
          body,
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Something wrong.");
        }

        setIsLoading(false);
        return data;
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
        throw err;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return {
    isLoading,
    request,
    error,
    clearError,
  };
};
