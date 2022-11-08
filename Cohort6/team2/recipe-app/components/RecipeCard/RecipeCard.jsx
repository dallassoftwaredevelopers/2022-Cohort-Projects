import React from "react";
import styles from "./RecipeCard.module.scss";
import Image from "next/image";
import { AiFillStar, AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { motion } from "framer-motion";

const defaultThumbnailImage =
  "https://images.unsplash.com/photo-1612634092815-511d2f4c9541?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

const RecipeCard = ({
  title,
  imageUrl = defaultThumbnailImage,
  description,
  rating = 0,
  likes = 0,
  comments = 0,
}) => {
  return (
    <div className={styles.card__container}>
      <div className={styles.recipe__image}>
        <Image
          src={imageUrl}
          layout="responsive"
          width="4/4"
          height="4/4"
          objectFit="cover"
          alt={title}
        />
      </div>
      <div className={styles.recipe__content}>
        <div className={styles.recipe__rating}>
          {[...Array(rating)].map((item, i) => (
            <AiFillStar key={i} />
          ))}
        </div>
        <div className={styles.recipe__title}>{title}</div>
        <div className={styles.recipe__description}>{description}</div>
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
