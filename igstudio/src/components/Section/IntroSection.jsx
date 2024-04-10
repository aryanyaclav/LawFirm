import React from 'react'
import styles from './IntroSection.module.css'

export default function IntroSection() {
  return (
    <div className={styles.introWrapper}>
        <div className={styles.leftSection}>
        Let’s Introduce <br /> Ourself
        </div>
        <div className={styles.seperator}>

        </div>
        <div className={styles.rightSection}>
        <div className={styles.rightSectionHeading}>Criminal Lawyer</div>
        Amet minim mollit non deserunt ullamco est <br /> sit aliqua dolor do amet sint. <br/>Velit officia consequatduis enim velit mollit Exercitation.
        </div>
    </div>
  )
}
