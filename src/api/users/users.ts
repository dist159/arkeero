import axios from "axios";

const baseUrl = "https://api.json-generator.com";

export const getUsers = async () => {
  try {
    const res = await axios.get(`${baseUrl}/templates/9ZT8mBiV5UFu/data`, {
      headers: {
        Authorization: "Bearer muwzxphjdhmgfwvsoqbsnwb2tdvs6sdsnggh6mko",
      },
    });

    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
