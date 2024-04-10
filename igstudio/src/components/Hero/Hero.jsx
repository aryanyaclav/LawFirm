import React from 'react'
import HeroLeftSection from './HeroLeftSection'
import HeroImage from './HeroImage'
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <div className={styles.heroSectionWrapper}>
        <HeroLeftSection />
        <HeroImage />
    </div>
  )
}
