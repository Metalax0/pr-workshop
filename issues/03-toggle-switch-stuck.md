---
title: "Toggle switch: clicking it never turns on"
labels: bug
assignee: "<student 3 GitHub username>"
---

## Expected behavior

Clicking the toggle switch on the **Toggle switch** card should turn it on
(and clicking again should turn it back off).

## Actual behavior

The switch never changes state. It always stays in the "off" position no
matter how many times you click it. No errors in the console.

## Steps to reproduce

1. Run the app and go to the **Toggle switch** card.
2. Click the switch.
3. Notice it stays off.

## Where to look

`src/widgets/ToggleSwitch/`

## Notes for the assignee

- Branch suggestion: `fix/toggle-switch-stuck`
- When you open your PR, use the repo's PR template and fill in every
  section — see the root `README.md` for the full workflow.
