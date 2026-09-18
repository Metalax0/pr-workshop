---
title: "Counter: \"+1\" button counts down instead of up"
labels: bug
assignee: "<student 2 GitHub username>"
---

## Expected behavior

Clicking the **+1** button on the Counter card should increase the number
shown by 1 each time.

## Actual behavior

Clicking **+1** decreases the number instead. It goes negative if you click
enough times.

## Steps to reproduce

1. Run the app and go to the **Counter** card.
2. Click the **+1** button 3 times.
3. Notice the count goes down (0, -1, -2, -3) instead of up.

## Where to look

`src/widgets/Counter/`

## Notes for the assignee

- Branch suggestion: `fix/counter-direction`
- When you open your PR, use the repo's PR template and fill in every
  section — see the root `README.md` for the full workflow.
