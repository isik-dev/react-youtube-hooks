import { useState, useEffect } from "react";
import google from "../apis/google";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await google.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };
  return [videos, search];
};

export default useVideos;
