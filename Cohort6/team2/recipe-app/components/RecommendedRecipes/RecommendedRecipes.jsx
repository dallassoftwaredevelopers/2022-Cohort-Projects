import React from "react";
import styles from "./RecommendedRecipes.module.scss";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import { Button } from "@mui/material";

// DUMMY DATA
const recipeData = {
  recipe1: {
    title: "Delicious Pizza",
    rating: 5,
    comments: 120,
    likes: 77,
  },
  recipe2: {
    title: "Mashed Potatoes",
    rating: 4,
    comments: 3,
    likes: 30,
  },
};

const RecommendedRecipes = () => {
  return (
    <div className={styles.main__container}>
      <h1>Recommended Recipes</h1>
      <div className={styles.list__container}>
        <RecipeCard
          title={recipeData.recipe1.title}
          rating={recipeData.recipe1.rating}
          comments={recipeData.recipe1.comments}
          likes={recipeData.recipe1.likes}
        />
        <RecipeCard
          title={recipeData.recipe2.title}
          rating={recipeData.recipe2.rating}
          comments={recipeData.recipe2.comments}
          likes={recipeData.recipe2.likes}
        />
        <RecipeCard
          title={recipeData.recipe2.title}
          rating={recipeData.recipe2.rating}
          comments={recipeData.recipe2.comments}
          likes={recipeData.recipe2.likes}
        />
        <RecipeCard
          title={recipeData.recipe2.title}
          rating={recipeData.recipe2.rating}
          comments={recipeData.recipe2.comments}
          likes={recipeData.recipe2.likes}
        />
        <RecipeCard
          title={recipeData.recipe2.title}
          rating={recipeData.recipe2.rating}
          comments={recipeData.recipe2.comments}
          likes={recipeData.recipe2.likes}
        />
        <RecipeCard
          title={recipeData.recipe2.title}
          rating={recipeData.recipe2.rating}
          comments={recipeData.recipe2.comments}
          likes={recipeData.recipe2.likes}
        />
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
