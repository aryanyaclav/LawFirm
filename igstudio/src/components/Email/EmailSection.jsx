import React from 'react'
import styles from './EmailSection.module.css'
import {ReactComponent as EmailIcon} from '../../assets/emailLogo.svg'

export default function EmailSection() {
  return (
    <div className={styles.sectionWrapper}>
        <EmailIcon />
        <input className={styles.input} type="email" placeholder="Your Email Here"/>
        <button className={styles.button}>Let's Talk</button>
    </div>
    
  )
}
