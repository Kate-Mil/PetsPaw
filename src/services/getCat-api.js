import axios from 'axios';

axios.defaults.baseURL = `https://api.thecatapi.com/v1`;
axios.defaults.headers.common[
  'x-api-key'
] = `live_R8g8WvxoJw5GPT3tbmLTVc6OlyxWuO6jTJ6RODP62xwHTOiCeESN3NAx8eTrXZWl`;

export const getAllCats = async (breed_id, order, has_breeds, page) => {
  const { data } = await axios.get(
    `images/search?limit=30&breed_ids=${breed_id}&order=${order}&has_breeds=${has_breeds}&page=${page}`
  );
  return data;
};

export const getAllBreeds = async () => {
  const { data } = await axios.get(`/breeds`);

  return data;
};

export const getCatsImagesByBreed = async (breed_id, limit) => {
  const { data } = await axios(
    `/images/search?breed_ids=${breed_id}&limit=${limit}`
  );
  return data;
};

export const getCatsBreedIdByImage = async id => {
  const { data } = await axios(`/images/${id}`);
  const [result] = data.breeds;

  return result.id;
};

export const getAllVotes = async () => {
  const { data } = await axios(`/votes?order=DESC

  `);
  return data;
};

export const postVotes = async ({ image_id, sub_id, value }) => {
  const response = await axios.post(`/votes`, { image_id, sub_id, value });
  return response.data;
};

export const getAllFavourites = async () => {
  const response = await axios.get(`/favourites`);
  return response.data;
};

export const postFavourites = async ({ image_id, sub_id }) => {
  const response = await axios.post(`/favourites`, { image_id, sub_id });
  return response.data;
};

export const deleteFavourites = async favouriteId => {
  const response = await axios.delete(`/favourites/${favouriteId}`);
  return response.data;
};
