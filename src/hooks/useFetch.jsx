/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

export function useFetch(url) {
  let [data, setData] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let resp = await fetch(url);

        if (!resp.ok)
          throw { status: resp.status, statusText: resp.statusText, err: true };

        let dataResp = await resp.json();

        setData(dataResp);
        setIsLoading(false);
        setError({ err: false });
      } catch (error) {
        setIsLoading(false);
        setError({ err: true });
        console.log(error);
      }
    };

    getData(url);
  }, [url]);

  return { data, isLoading, error };
}
