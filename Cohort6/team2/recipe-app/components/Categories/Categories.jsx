import React from "react";
import styles from "./Categories.module.scss";
import CategoryItem from "../CategoryItem/CategoryItem";

const Categories = ({ categories, categoriesIsLoading, categoriesIsError }) => {
  if (categoriesIsLoading) {
    return <div>Loading...</div>;
  }
  if (categoriesIsError) {
    return <div>Error</div>;
  }

  return (
    <div className={styles.categories__container}>
      {categories.map((item) => (
        <CategoryItem
          title={item.strCategory}
          image={item.strCategoryThumb}
          description={item.strCategoryDescription}
          key={item.idCategory}
        />
      ))}
    </div>
  );
};

export default Categories;
