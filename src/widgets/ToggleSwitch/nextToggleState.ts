// TODO(tsdoc): add a TSDoc comment above this function (workshop follow-up exercise)
export function nextToggleState(current: boolean, locked: boolean): boolean {
  return locked ? current : !current
}
