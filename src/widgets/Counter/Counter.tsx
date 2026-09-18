import { useState } from 'react'
import { clampCount } from './clampCount'
import styles from './Counter.module.css'

export function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount((current) => clampCount(current - 1))
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={increment}>
        +1
      </button>
      <span className={styles.count}>{count}</span>
    </div>
  )
}
