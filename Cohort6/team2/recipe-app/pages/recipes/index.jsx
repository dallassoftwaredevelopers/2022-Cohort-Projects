import SearchBar from "@/components/SearchBar/SearchBar";
import styles from "./recipes.module.scss";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Categories from "@/components/Categories/Categories";
import Meals from "@/components/Meals/Meals";

const getCategories = async () => {
  const { data } = await axios.get("/categories.php");
  return data.categories;
};

const getMeals = async () => {
  const { data } = await axios.get("/random.php");
  return data.meals;
};

const index = () => {
  const {
    data: categories,
    isLoading: categoriesIsLoading,
    isError: categoriesIsError,
  } = useQuery(["categories"], getCategories);

  const {
    data: meals,
    isLoading: mealsIsLoading,
    isError: mealsIsError,
    error: mealsError,
  } = useQuery(["meals"], getMeals);

  return (
    <div className={styles.recipes__container}>
      <SearchBar />
      <Categories
        categories={categories}
        categoriesIsError={categoriesIsError}
        categoriesIsLoading={categoriesIsLoading}
      />
      <Meals
        meals={meals}
        mealsIsError={mealsIsError}
        mealsIsLoading={mealsIsLoading}
        mealsError={mealsError}
      />
    </div>
  );
};

export default index;
