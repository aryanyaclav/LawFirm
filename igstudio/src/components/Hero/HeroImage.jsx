import React from 'react'
import MainImage from "../../assets/heroImage.png"
import styles from './HeroImage.module.css'

export default function HeroImage() {
  return (
    <div className={styles.imageWrapper}>
        <img src = {MainImage} alt="Main" />
    </div>
  )
}
