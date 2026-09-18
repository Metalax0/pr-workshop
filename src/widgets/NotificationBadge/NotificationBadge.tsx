import { formatBadgeCount } from './formatBadgeCount'
import styles from './NotificationBadge.module.css'

interface NotificationBadgeProps {
  count: number
}

export function NotificationBadge({ count }: NotificationBadgeProps) {
  const isUrgent = count < 9
  const label = formatBadgeCount(count)

  return (
    <div className={styles.wrapper}>
      <span role="img" aria-label="notifications" className={styles.bell}>
        🔔
      </span>
      {label && (
        <span className={`${styles.badge} ${isUrgent ? styles.urgent : ''}`}>
          {label}
        </span>
      )}
    </div>
  )
}

export function NotificationBadgeDemo() {
  return <NotificationBadge count={24} />
}
