import React from 'react'
import styles from './ListItems.module.scss'

export default function ListItem({description, image, name, twitterLink}) {

    return (
      <li className ={styles.wrapper}>
          <img src={image} alt={name} className ={styles.img}/>
          <div>
              <h2 className = {styles.name}>{name}</h2>
              <p className={styles.description}>{description}</p>
              <a href={twitterLink} className={styles.btn}>Twitter Link</a>
          </div>
      </li>
    )
}
