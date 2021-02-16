import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './HeaderNav.module.scss'

function HeaderNav() {
    return (
        <nav>
            <ul className={styles.wrapper}>
                <li className={styles.navItem}>
                    <NavLink
                        exact to='/'
                        className={styles.navLink}
                        activeClassName={styles.activeNavLink}
                    >
                        Twitters
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        to='/articles'
                        className={styles.navLink}
                        activeClassName={styles.activeNavLink}
                    >
                        Articles
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        to='/notes'
                        className={styles.navLink}
                        activeClassName={styles.activeNavLink}
                    >
                        Notes
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNav
