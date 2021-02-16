import React from 'react'
import styles from './InputRadio.module.scss'

function InputRadio({ id, type, label, children, checked, ...props }) {
    return (
        <>
            <label htmlFor={label} className={styles.radio}>
                <input
                    className={styles.input}
                    type={type}
                    id={id}
                    checked={checked}
                    {...props}
                />
                {children}
            </label>
            <div className={styles.radioButton}></div>
        </>
    )
}

export default InputRadio