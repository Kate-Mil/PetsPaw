import axios from 'axios';

axios.defaults.baseURL = `https://api.thecatapi.com/v1`;
axios.defaults.headers.common[
  'x-api-key'
] = `live_R8g8WvxoJw5GPT3tbmLTVc6OlyxWuO6jTJ6RODP62xwHTOiCeESN3NAx8eTrXZWl`;

export const getAllCats = async () => {
  const { data } = await axios.get(`/images/search?limit=10`);
  return data;
};

export const getAllBreeds = async () => {
  const { data } = await axios.get(`/breeds`);
  const result = data.map(el => el.image).filter(el => el !== undefined);
  return result;
};

export const getCatsImagesByBreed = async breed_id => {
  const { data } = await axios(`/images/search?breed_ids=${breed_id}&limit=10`);
  return data;
};

export const getCatsForVouting = async () => {
  const { data } = await axios(`votes?limit=10&order=DESC`);
  return data;
};

export const postVoutes = async ({ image_id, value }) => {
  const response = await axios.post(`/voutes`, { image_id, value });
  return response.data;
};

// export const getCatsImagesByBreed = async (breed_id, amount, order) => {
//   const { data } = await axios(
//     `/images/search?breed_ids=${breed_id}&limit=${amount}&order=${order}`
//   );

//   console.table(data);
//   return data;
// };