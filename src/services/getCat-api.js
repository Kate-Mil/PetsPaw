import axios from 'axios';

axios.defaults.baseURL = `https://api.thecatapi.com/v1`;
axios.defaults.headers.common[
  'x-api-key'
] = `live_R8g8WvxoJw5GPT3tbmLTVc6OlyxWuO6jTJ6RODP62xwHTOiCeESN3NAx8eTrXZWl`;

export const getAllCats = async (
  limit,
  order,
  has_breeds,
  type,
  page,
  breed_id
) => {
  const { data } = await axios.get(
    `images/search?breed_ids=${breed_id}&limit=${limit}&order=${order}&has_breeds=${has_breeds}&type=${type}&page=${page}`
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
  const { data } = await axios(`votes`);
  return data;
};

export const postVotes = async ({ image_id, sub_id, value }) => {
  const response = await axios.post(`/votes`, { image_id, sub_id, value });
  return response.data;
};
