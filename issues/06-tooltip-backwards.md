---
title: "Info tooltip: appears backwards (shows on mouse-leave, not hover)"
labels: bug
assignee: "<student 6 GitHub username>"
---

## Expected behavior

Hovering the "i" icon on the **Info tooltip** card should show the tooltip
text. Moving the mouse away should hide it again.

## Actual behavior

It's backwards: hovering the icon does nothing, and the tooltip only
appears once you move the mouse *away* from it — where it then stays stuck
open.

## Steps to reproduce

1. Run the app and go to the **Info tooltip** card.
2. Hover your mouse over the "i" icon.
3. Notice nothing appears.
4. Move your mouse away from the icon.
5. Notice the tooltip now appears and stays open.

## Where to look

`src/widgets/Tooltip/`

## Notes for the assignee

- Branch suggestion: `fix/tooltip-hover-swapped`
- When you open your PR, use the repo's PR template and fill in every
  section — see the root `README.md` for the full workflow.
