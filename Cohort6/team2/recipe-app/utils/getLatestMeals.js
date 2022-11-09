import axios from "axios";

export const getLatestMeals = async () => {
  const { data } = await axios.get("/randomselection.php");
  return data.meals;
};
