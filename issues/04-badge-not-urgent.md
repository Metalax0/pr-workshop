---
title: "Notification badge: high unread counts don't look urgent"
labels: bug
assignee: "<student 4 GitHub username>"
---

## Expected behavior

On the **Notification badge** card, when the unread count is high (in our
demo, 24), the badge should stand out in red to signal it's urgent.

## Actual behavior

The badge shows "24" but stays in the default gray color — it never turns
red/urgent, regardless of how high the count is.

## Steps to reproduce

1. Run the app and go to the **Notification badge** card.
2. Look at the badge next to the bell icon (count is 24).
3. Notice it's gray, not red.

## Where to look

`src/widgets/NotificationBadge/`

## Notes for the assignee

- Branch suggestion: `fix/badge-urgent-color`
- When you open your PR, use the repo's PR template and fill in every
  section — see the root `README.md` for the full workflow.
