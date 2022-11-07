import React from "react";
import styles from "./RecipeCard.module.scss";
import Image from "next/image";
import { AiFillStar, AiOutlineHeart, AiOutlineComment } from "react-icons/ai";

const RecipeCard = ({ title, rating, likes, comments }) => {
  return (
    <div className={styles.card__container}>
      <div className={styles.recipe__image}>
        <Image
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          layout="responsive"
          width="100%"
          height="100%"
        />
      </div>
      <div className={styles.recipe__content}>
        <div className={styles.recipe__rating}>
          {[...Array(rating)].map((item, i) => (
            <AiFillStar key={i} />
          ))}
        </div>
        <div className={styles.recipe__title}>{title}</div>
        <div className={styles.recipe__stats}>
          <div className={styles.recipe__stats_likes}>
            <div>
              <AiOutlineHeart />
            </div>
            <p>{likes}</p>
          </div>
          <div className={styles.recipe__stats_comments}>
            <div>
              <AiOutlineComment />
            </div>
            <p>{comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
