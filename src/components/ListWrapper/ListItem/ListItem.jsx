import React from 'react'
import PropTypes from 'prop-types'
import styles from './ListItems.module.scss'
import Buttons from '../../Buttons/Buttons'

function ListItem({ description, image, name, twitterLink }) {

    const ImgTag = image ? 'img' : 'div'

    return (
        <li className={styles.wrapper}>
            <ImgTag src={image} alt={name} className={image ? styles.img : styles.imgNone} />
            <div>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.description}>{description}</p>
                <Buttons href={twitterLink}>Twitter Link</Buttons>
            </div>
        </li>
    )
}

ListItem.propTypes = {
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    twitterLink: PropTypes.string.isRequired,
}

ListItem.defaultProps = {
    image: null,
}

export default ListItem
