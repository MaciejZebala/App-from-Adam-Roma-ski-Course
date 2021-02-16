import React from 'react'
import HeaderNav from './HeaderNav'
import Button from '../Buttons/Buttons'
import styles from './Header.module.scss'
import logo from '../../asstets/images/logo.svg'
function Header({ openModalFn }) {
    return (
        <header className={styles.wrapper}>
            <img src={logo} alt="FavNotes Logo" />
            <HeaderNav></HeaderNav>
            <Button onClick={openModalFn} secondary>new items</Button>
        </header>
    )
}


export default Header