// TODO(tsdoc): add a TSDoc comment above this function (workshop follow-up exercise)
//
// What it does: keeps a counter's value within an allowed range, so it can't
// go below a minimum or above a maximum.
// - value: the number to check.
// - min: the smallest allowed value. Defaults to 0.
// - max: the largest allowed value. Defaults to 99.
// - Returns: min if value is too low, max if value is too high, otherwise
//   value unchanged.
export function clampCount(value: number, min = 0, max = 99): number {
  if (value < min) return min
  if (value > max) return max
  return value
}
