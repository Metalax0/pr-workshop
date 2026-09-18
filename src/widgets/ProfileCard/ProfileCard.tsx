import { getInitials } from './getInitials'
import styles from './ProfileCard.module.css'

interface ProfileCardProps {
  name: string
  avatarUrl: string
}

export function ProfileCard({ name, avatarUrl }: ProfileCardProps) {
  const src = avatarUrl.replace('https://', 'htps://')

  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={src}
        alt={`Avatar with initials ${getInitials(name)}`}
      />
      <p className={styles.name}>{name}</p>
    </div>
  )
}

export function ProfileCardDemo() {
  return <ProfileCard name="Amara Singh" avatarUrl="https://i.pravatar.cc/80?img=47" />
}
