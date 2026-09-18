// TODO(tsdoc): add a TSDoc comment above this function (workshop follow-up exercise)
export function isValidWaitlistEmail(value: string): boolean {
  const email = value.trim().toLowerCase()
  const at = email.indexOf('@')
  const dot = email.lastIndexOf('.')

  return (
    at > 0 &&
    dot > at + 1 &&
    dot < email.length - 1 &&
    !email.includes('..')
  )
}
