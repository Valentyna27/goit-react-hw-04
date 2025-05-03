import axios from 'axios';

const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query,
        client_id: API_KEY,
        page,
        per_page: 12,
      },
    });
    console.log('API KEY:', API_KEY);

    const data = response.data;

    if (!data.results || data.results.length === 0) {
      throw new Error('No images found');
    }

    return data.results;
  } catch (error) {
    console.error( error);
    throw error;
  }
};
