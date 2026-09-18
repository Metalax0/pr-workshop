// TODO(tsdoc): add a TSDoc comment above this function (workshop follow-up exercise)
export function clampCount(value: number, min = 0, max = 99): number {
  if (value < min) return min
  if (value > max) return max
  return value
}
