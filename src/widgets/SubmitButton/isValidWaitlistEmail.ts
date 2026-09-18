// TODO(tsdoc): add a TSDoc comment above this function (workshop follow-up exercise)
//
// What it does: a quick, lightweight check for whether a string looks like a
// usable email address, before letting someone join the waitlist. It's not a
// full RFC-compliant email validator, just enough to catch obvious mistakes.
// - value: the raw text typed into the email field. Leading/trailing spaces
//   and letter case are ignored.
// - Returns: true if the value has something before an "@", a "." somewhere
//   after the "@" (with at least one character between them and at least one
//   character after the "."), and no "..". Otherwise false.
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
