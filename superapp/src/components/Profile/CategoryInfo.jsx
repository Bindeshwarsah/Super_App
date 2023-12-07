import React from 'react'
import { LocalStorageUtils } from './LocalStorageUtils'
import styles from "./CategoryInfo.module.css";

const CategoryInfo = () => {
    const category=LocalStorageUtils('selectedCategories');
  return (
    <div className={styles.categoryInfoBox}>
        {
          category && (
            <ul className={styles.categoryCard}>
              {category.map((item,index)=>(
                <li key={index} className={styles.category}>{item} </li>
               
              ))}
            </ul>
        )}
    </div>
  )
}

export default CategoryInfo