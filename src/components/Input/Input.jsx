import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

export default function Input({ tag: Tag, name, label, maxLength, required }) {
    return (
        <div className={styles.formItem}>
            <Tag
                className={Tag === 'textarea' ? styles.textarea : styles.input}
                type="text"
                name={name}
                placeholder=" "
                required={required}
                // required={name !== 'image'}
                id={name}
                maxLength={maxLength} />
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            <div className={styles.formItemBar} />
        </div>
    )
}

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired,
}

Input.defaultProps = {
    tag: 'input',
    maxLength: 200,
    required: false
}
