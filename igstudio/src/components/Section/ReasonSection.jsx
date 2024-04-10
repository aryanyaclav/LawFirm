import React from 'react'
import Card from '../Card/Card'
import styles from './ReasonSection.module.css'
import {data} from '../../data/cardData.js'

export default function ReasonSection() {
  return (
    <div class={styles.wrapper}>
        <div className={styles.heading}> Why Choose Us ?</div>
        <div className={styles.cardWrapper}>
        {
            data.map((cardData) => <Card data={cardData}/>)
        }
        </div>
        
    </div>
  )
}
