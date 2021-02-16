import React from 'react'
import PropTypes from 'prop-types'
import styles from './Buttons.module.scss'

export default function Buttons({ children, href, secondary, close, ...props }) {

    const btnClass = secondary ? styles.secondary : styles.btn
    const closeBtnClass = close ? styles.close : btnClass

    return (
        <>
            {

                href ? (
                    <a
                        href={href}
                        className={btnClass}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {children}
                    </a>
                ) : (
                        <button className={closeBtnClass}{...props}>{children}</button>

                    )
            }

        </>
    )
}

Buttons.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string,
    secondary: PropTypes.bool,
}

Buttons.defaultProps = {
    secondary: false,
}
