// TODO(tsdoc): add a TSDoc comment above this function (workshop follow-up exercise)
export function clampTooltipOffset(
  idealOffset: number,
  containerWidth: number,
  tooltipWidth: number,
): number {
  const maxOffset = containerWidth - tooltipWidth

  if (maxOffset < 0) return 0
  if (idealOffset < 0) return 0
  if (idealOffset > maxOffset) return maxOffset
  return idealOffset
}
