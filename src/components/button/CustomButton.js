'use client'

import styles from './CustomButton.module.css'

export default function CustomButton({icon,text,click}) {
  
  return (
    <button className={styles.buttons} onClick={click}>
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  )
}
