# Facilitator notes

Not shown in the student-facing README — setup steps for running the
session.

## Before the session

The six issues already exist on the repo's **Issues** tab (#1–#6), each
labeled `bug`, but **none are assigned yet**. The `issues/*.md` files in this
repo are the source drafts used to create them — keep them around for
reference, but the live issues are what students should actually read.

Right before the session, assign one issue per student:

```bash
gh issue edit <issue-number> --add-assignee <their-github-username>
```

(Or open each issue in the GitHub UI and set the assignee from the sidebar.)

## Task assignment

| # | Widget | Issue | Suggested branch |
| --- | --- | --- | --- |
| 1 | Waitlist form | [#1](../../issues/1) | `fix/waitlist-button` |
| 2 | Counter | [#2](../../issues/2) | `fix/counter-direction` |
| 3 | Toggle switch | [#3](../../issues/3) | `fix/toggle-switch-stuck` |
| 4 | Notification badge | [#4](../../issues/4) | `fix/badge-urgent-color` |
| 5 | Profile card | [#5](../../issues/5) | `fix/profile-avatar-src` |
| 6 | Info tooltip | [#6](../../issues/6) | `fix/tooltip-hover-swapped` |

Each bug lives entirely inside that widget's own folder under
`src/widgets/`, so students can't accidentally step on each other's work —
even with all six branches open against `main` at once.
