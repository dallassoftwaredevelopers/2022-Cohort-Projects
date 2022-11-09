import React from "react";
import styles from "./RecommendedRecipes.module.scss";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import { Button } from "@mui/material";
import { getLatestMeals } from "@/utils/getLatestMeals";
import { useQuery } from "@tanstack/react-query";

const RecommendedRecipes = () => {
  const {
    data: latestMeals,
    isLoading,
    isError,
    error,
  } = useQuery(["latest"], getLatestMeals);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className={styles.main__container}>
      <h1>Latest Recipes</h1>
      <div className={styles.list__container}>
        {latestMeals.map((meal, i) => {
          if (i <= 5) {
            return (
              <RecipeCard
                key={meal.idMeal}
                title={meal.strMeal}
                description={meal.strCategory}
                imageUrl={meal.strMealThumb}
              />
            );
          }
        })}
      </div>
      <div className={styles.loadmore__btn}>
        <Button
          variant="outlined"
          color="warning"
          sx={{ borderRadius: "12px" }}
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default RecommendedRecipes;
