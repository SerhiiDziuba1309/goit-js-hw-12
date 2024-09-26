const API_KEY = '46087693-e119c112526bf06fb7b15b331';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = query => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
      query
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `Error fetching images: ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .then(data => {
      return data.hits;
    });
};
