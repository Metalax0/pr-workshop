import { useState } from 'react'
import { nextToggleState } from './nextToggleState'
import styles from './ToggleSwitch.module.css'

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false)
  const locked = true

  function handleClick() {
    setIsOn(nextToggleState(isOn, locked))
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      className={`${styles.track} ${isOn ? styles.on : ''}`}
      onClick={handleClick}
    >
      <span className={styles.thumb} />
    </button>
  )
}
