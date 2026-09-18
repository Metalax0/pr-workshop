// TODO(tsdoc): add a TSDoc comment above this function (workshop follow-up exercise)
//
// What it does: decides what a toggle switch's state should become the next
// time it's interacted with.
// - current: whether the switch is on (true) or off (false) right now.
// - locked: whether the switch is disabled/locked, so clicking it shouldn't
//   change anything.
// - Returns: current unchanged if locked is true; otherwise the opposite of
//   current (on becomes off, off becomes on).
export function nextToggleState(current: boolean, locked: boolean): boolean {
  return locked ? current : !current
}
