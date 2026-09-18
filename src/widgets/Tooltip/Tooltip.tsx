import { useState } from 'react'
import { clampTooltipOffset } from './clampTooltipOffset'
import styles from './Tooltip.module.css'

const CONTAINER_WIDTH = 220
const TOOLTIP_WIDTH = 150
const IDEAL_OFFSET = 90

export function Tooltip() {
  const [visible, setVisible] = useState(false)
  const offset = clampTooltipOffset(IDEAL_OFFSET, CONTAINER_WIDTH, TOOLTIP_WIDTH)

  return (
    <div className={styles.wrapper} style={{ width: CONTAINER_WIDTH }}>
      <button
        type="button"
        className={styles.icon}
        aria-label="More info"
        onMouseEnter={() => setVisible(false)}
        onMouseLeave={() => setVisible(true)}
      >
        i
      </button>
      {visible && (
        <div className={styles.tooltip} style={{ left: offset }}>
          Prices update every 24 hours.
        </div>
      )}
    </div>
  )
}
