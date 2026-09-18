# Widget Gallery — PR Documentation Workshop

A tiny React + TypeScript app with six independent widgets. Each widget has
exactly one small, quiet bug — nothing crashes, it just doesn't do what it's
supposed to. This repo is the hands-on practice ground for the **Documenting
Pull Requests** session: pick an issue, fix your one bug, open a PR using the
template, and get reviewed by a classmate.

## Setup

```bash
npm install
npm run dev
```

Open the printed local URL. You'll see six cards, one per widget.

## Facilitator setup (before the session)

This repo does **not** ship with real GitHub issues — they're drafted as
markdown files in [issues/](issues/) so you can review/edit them first. Before
the session, turn each one into a real GitHub issue and assign it to a
student:

```bash
gh issue create \
  --title "Waitlist form: clicking \"Join waitlist\" does nothing" \
  --body-file issues/01-waitlist-button-does-nothing.md \
  --assignee <their-github-username> \
  --label bug
```

Repeat for all six files in `issues/`. (Or paste each one into the GitHub UI
under **Issues → New issue** — the assignee/label fields are in the sidebar.)

### Task assignment

| # | Widget | Issue file | Suggested branch |
| --- | --- | --- | --- |
| 1 | Waitlist form | `issues/01-waitlist-button-does-nothing.md` | `fix/waitlist-button` |
| 2 | Counter | `issues/02-counter-counts-down.md` | `fix/counter-direction` |
| 3 | Toggle switch | `issues/03-toggle-switch-stuck.md` | `fix/toggle-switch-stuck` |
| 4 | Notification badge | `issues/04-badge-not-urgent.md` | `fix/badge-urgent-color` |
| 5 | Profile card | `issues/05-profile-avatar-broken.md` | `fix/profile-avatar-src` |
| 6 | Info tooltip | `issues/06-tooltip-backwards.md` | `fix/tooltip-hover-swapped` |

Each bug lives entirely inside that widget's own folder under
`src/widgets/`, so students can't accidentally step on each other's work —
even with all six branches open against `main` at once.

## Student workflow

1. **Clone the repo** and run `npm install && npm run dev`.
2. **Find your issue** on the GitHub **Issues** tab — it's the one assigned
   to you. Read it fully: expected behavior, actual behavior, steps to
   reproduce.
3. **Create a branch** off `main` (the issue suggests a name, or pick your
   own).
4. **Fix only the bug described.** Don't touch other widgets or refactor
   anything else while you're in there.
5. **Confirm the fix** by running the app and repeating the steps to
   reproduce from the issue — this time it should work as expected.
6. **Push your branch and open a PR against `main`.** The description
   pre-fills from the repo's PR template — fill in every section:
   - **Description of the change** — the actual cause, not "fixed bug."
   - **UI (before/after)** — a before and after screenshot, if the fix is
     visual (most of these are).
   - **Type of change** — check the one box that applies, delete the rest.
   - **How to verify** — exact steps a reviewer can follow.
   - **Related issues** — `Closes #<your issue number>`.
7. **Swap PRs with a partner.** Review it against the checklist below and
   leave at least one comment.

### Reviewer's checklist

- Does the description explain *why*, not just repeat the diff?
- Could you test this without asking the author anything?
- If it's a UI change — can you see it, not just read about it?
- Exactly one "type of change" box checked, rest removed?
- Is the related issue linked with a closing keyword (`Closes #...`)?
- Would this still make sense in six months?

## Looking ahead: TSDoc exercise (later session)

Each widget folder also contains one small helper function (e.g.
`clampCount.ts`, `getInitials.ts`) marked with a `// TODO(tsdoc)` comment.
These are intentionally left undocumented — a later exercise will have you
write a TSDoc comment for the helper in your assigned widget. Nothing to do
with them yet; they're just already in place so that session can start
immediately.
