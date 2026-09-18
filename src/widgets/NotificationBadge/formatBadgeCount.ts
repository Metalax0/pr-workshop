// TODO(tsdoc): add a TSDoc comment above this function (workshop follow-up exercise)
export function formatBadgeCount(count: number): string {
  if (count <= 0) return ''
  if (count > 99) return '99+'
  return String(count)
}
