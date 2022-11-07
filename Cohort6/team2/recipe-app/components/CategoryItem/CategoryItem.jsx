import React from "react";
import styles from "./CategoryItem.module.scss";

const CategoryItem = ({ title, image, description }) => {
  return (
    <div className={styles.category__container}>
      <p>{title}</p>
    </div>
  );
};

export default CategoryItem;
