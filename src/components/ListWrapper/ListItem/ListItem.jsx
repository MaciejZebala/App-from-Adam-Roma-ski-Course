import React from 'react'
import PropTypes from 'prop-types'
import styles from './ListItems.module.scss'

function ListItem({description, image, name, twitterLink}) {

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

ListItem.protoTypes = {
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    twitterLink: PropTypes.string.isRequired,
}

export default ListItem
