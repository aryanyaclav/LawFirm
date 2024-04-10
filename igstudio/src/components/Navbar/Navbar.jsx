import React from 'react'
import Logo from '../Logo/Logo'
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
        <Logo />
        <div className={styles.pagesWrapper}>
            <div> Home </div>
            <div> Attorneys </div>
            <div> Practice Area </div>
            <div> About Us </div>
        </div>
        <button className={styles.buttonClass}> Contact Now</button>
    </div>
  )
}
