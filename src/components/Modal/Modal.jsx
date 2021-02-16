import React from 'react'
import styles from './Modal.module.scss'
import Form from '../Form/Form'
import Button from '../Buttons/Buttons'

export default function Modal({ closeModalFn }) {
    return (
        <div className={styles.wrapper}>
            <Button onClick={closeModalFn} secondary close>X</Button>
            {/* <button onClick={closeModalFn}>X</button> */}
            <Form />
        </div>
    )
}
