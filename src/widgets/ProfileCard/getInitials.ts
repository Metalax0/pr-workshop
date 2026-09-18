// TODO(tsdoc): add a TSDoc comment above this function (workshop follow-up exercise)
//
// What it does: turns a person's full name into one or two uppercase initials,
// for showing in a small avatar circle.
// - fullName: the name to shorten, e.g. "Amara Singh". Extra spaces are ignored.
// - Returns: "" if fullName is empty/blank, the single initial if there's only
//   one name (e.g. "Amara" -> "A"), or the first and last name's initials if
//   there are two or more (e.g. "Amara Singh" -> "AS", "Amara Jane Singh" -> "AS").
export function getInitials(fullName: string): string {
  const parts = fullName.trim().split(/\s+/).filter(Boolean)

  if (parts.length === 0) return ''
  if (parts.length === 1) return parts[0]!.charAt(0).toUpperCase()

  return (parts[0]!.charAt(0) + parts[parts.length - 1]!.charAt(0)).toUpperCase()
}
