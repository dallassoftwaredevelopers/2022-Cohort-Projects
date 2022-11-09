import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import styles from "./Meals.module.scss";

const Meals = ({ meals, mealsIsLoading, mealsIsError, mealsError }) => {
  if (mealsIsLoading) {
    return <div>Loading...</div>;
  }
  if (mealsIsError) {
    return <div>Error: {mealsError}</div>;
  }

  return (
    <div className={styles.meals__container}>
      {meals.map((meal, i) => (
        <RecipeCard
          key={i}
          title={meal.strMeal}
          imageUrl={meal.strMealThumb}
          description={meal.strTags}
        />
      ))}
    </div>
  );
};

export default Meals;
