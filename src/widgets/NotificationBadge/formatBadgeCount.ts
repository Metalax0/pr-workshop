// TODO(tsdoc): add a TSDoc comment above this function (workshop follow-up exercise)
//
// What it does: turns a raw notification count into the short text shown
// inside a notification badge.
// - count: the number of unread notifications. Can be 0 or negative.
// - Returns: "" (nothing shown) if count is 0 or less, "99+" if count is over
//   99 so the badge doesn't grow too wide, otherwise the count as plain text
//   (e.g. 5 -> "5").
export function formatBadgeCount(count: number): string {
  if (count <= 0) return ''
  if (count > 99) return '99+'
  return String(count)
}
