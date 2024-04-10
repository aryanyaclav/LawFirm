import React from 'react'
import styles from './Card.module.css'
import giftIcon from '../../assets/giftIcon.svg'

export default function Card({data , type}) {
    const { successRate, desc} = data
  return (
    <div className={styles.cardWrapper}>
        <div className={styles.imgIcon}>
            <img src={giftIcon} alt="Gift" />
        </div>
        <div className={styles.cardHeading}>
            {successRate} success rate
        </div>
        <div className={styles.cardPara}>
        {desc}
        </div>
        <div classsName= {styles.cardButton}>
            <button> Read More</button>
        </div>
    </div>
  )
}
