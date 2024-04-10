import React from 'react'
import EmailSection from '../Email/EmailSection'
import styles from './HeroLeftSection.module.css'

export default function HeroLeftSection() {
  return (
    <div className={styles.leftSectionWrapper}>
        <div className={styles.mainHeading}> You Dont Have To <br/> Fight them Alone</div>
        <div className={styles.secondaryPara}> Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, <br />
        curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,<br/>
         hac massa gravida arcu interdum proin curae.</div>
        <EmailSection />
    </div>
  )
}
