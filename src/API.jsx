
export const fetchImages = async (apiKey, keyword, limit = 12) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data.map((item) => ({ id: item.id, url: item.images.original.url }));
  };