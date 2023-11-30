const apiUrl = "https://coderbyte.com/api/challenges/json/age-counting";

const axios = require("axios");

const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl);
    console.log("Response:", response.data);
  } catch (e) {
    console.error("Error:", e.message);
  }
};

fetchData();
