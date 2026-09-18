---
title: "Waitlist form: clicking \"Join waitlist\" does nothing"
labels: bug
assignee: "<student 1 GitHub username>"
---

## Expected behavior

On the homepage, filling in an email and clicking **Join waitlist** should
submit the form and show "You're on the list!".

## Actual behavior

Nothing happens when the button is clicked. No error in the console, no
network request, no message — the page just sits there.

## Steps to reproduce

1. Run the app and go to the **Waitlist form** card.
2. Type any email address into the field.
3. Click **Join waitlist**.
4. Notice nothing changes.

## Where to look

`src/widgets/SubmitButton/`

## Notes for the assignee

- Branch suggestion: `fix/waitlist-button`
- When you open your PR, use the repo's PR template and fill in every
  section — see the root `README.md` for the full workflow.
