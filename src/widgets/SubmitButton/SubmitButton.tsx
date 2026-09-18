import { useState, type FormEvent } from 'react'
import { isValidWaitlistEmail } from './isValidWaitlistEmail'
import styles from './SubmitButton.module.css'

export function SubmitButton() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const email = new FormData(event.currentTarget).get('email')
    setStatus(isValidWaitlistEmail(String(email)) ? 'success' : 'error')
  }

  if (status === 'success') {
    return <p className={styles.success}>You're on the list!</p>
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        name="email"
        type="email"
        placeholder="you@example.com"
        required
      />
      <button type="button" className={styles.button}>
        Join waitlist
      </button>
      {status === 'error' && (
        <p className={styles.error}>Enter a valid email.</p>
      )}
    </form>
  )
}
