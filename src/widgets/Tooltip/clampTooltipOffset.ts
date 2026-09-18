// TODO(tsdoc): add a TSDoc comment above this function (workshop follow-up exercise)
//
// What it does: works out how far (in pixels) to shift a tooltip sideways so
// it stays fully inside its container instead of overflowing the edge.
// - idealOffset: where the tooltip would sit if there were no edges to worry
//   about. Can be negative.
// - containerWidth: how wide the surrounding container is.
// - tooltipWidth: how wide the tooltip itself is.
// - Returns: idealOffset, but pulled back to 0 if it's negative, and capped at
//   (containerWidth - tooltipWidth) if it would push the tooltip past the
//   right edge. If the tooltip is wider than the container, returns 0.
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
