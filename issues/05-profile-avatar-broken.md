---
title: "Profile card: avatar photo never loads"
labels: bug
assignee: "<student 5 GitHub username>"
---

## Expected behavior

The **Profile card** should show the person's avatar photo next to their
name.

## Actual behavior

The avatar always shows a broken-image icon instead of the photo, even
though a valid image URL is being passed in.

## Steps to reproduce

1. Run the app and go to the **Profile card** card.
2. Look at the circular avatar next to "Amara Singh".
3. Notice it's a broken image, not a photo.

## Where to look

`src/widgets/ProfileCard/`

## Notes for the assignee

- Branch suggestion: `fix/profile-avatar-src`
- When you open your PR, use the repo's PR template and fill in every
  section — see the root `README.md` for the full workflow.
