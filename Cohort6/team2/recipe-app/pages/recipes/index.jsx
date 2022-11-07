import SearchBar from "@/components/SearchBar/SearchBar";
import styles from "./recipes.module.scss";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Categories from "@/components/Categories/Categories";

const getCategories = async () => {
  const { data } = await axios.get("/categories.php");
  return data.categories;
};

getCategories();

const index = () => {
  const {
    data: categories,
    isLoading: categoriesIsLoading,
    isError: categoriesIsError,
  } = useQuery(["categories"], getCategories);

  return (
    <div className={styles.recipes__container}>
      <SearchBar />
      <Categories
        categories={categories}
        categoriesIsError={categoriesIsError}
        categoriesIsLoading={categoriesIsLoading}
      />
    </div>
  );
};

export default index;
