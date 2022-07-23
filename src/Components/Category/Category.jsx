import React from "react";
import styles from "./Category.module.css";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function Category() {
  return (
    <>
    

      <div className={styles.mid}>
     
        <h3 className={styles.post}>Latest Posts</h3>
        <h4 className={styles.filter}>  <FilterAltIcon className={styles.iconFilter} />  Filter by category</h4>
        <div className={styles.categoryContainer}>
          <p className={styles.categories} id={styles.all}>All</p>
          <p className={styles.categories}>Artificial Intelligence</p>
          <p className={styles.categories}>Cloud Computing</p>
          <p className={styles.categories}>DevOps</p>
          <p className={styles.categories}>Programming Language</p>
          <p className={styles.categories}>Mobile Application Development</p>
          <p className={styles.categories}>Technology and Tools</p>
          <p className={styles.categories}>Get a Job in a Tech Company</p>
          <p className={styles.categories}>Others</p>
        </div>
      </div>
    </>
  );
}

export default Category;
