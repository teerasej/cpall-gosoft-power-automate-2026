# Exercise validation — 17 September 2026

## Status: incomplete — live walkthrough blocked

Review branch: `codex/validate-power-automate-exercises`.
Baseline: `bc3f523` (VitePress publication). The live Edge tab inventory showed the public learner site and the GitHub publication run for this commit. The working tree was clean before this review.

This report does **not** certify end-to-end execution, current designer labels, participant readiness, or classroom pacing. Corrections in this branch combine direct entry-screen observations, static instruction review, and the Microsoft references below. No exercise is claimed to have passed a live run.

## Observed through Computer

- Reached the authenticated Edge Work-profile Power Automate Create page.
- Observed `Instant cloud flow`, `Automated cloud flow`, `Scheduled cloud flow`, `Build an instant cloud flow`, `Flow name`, `Manually trigger a flow`, and `Create`.
- Entered an isolated validation flow name. Native Computer control timed out during manual-trigger selection. Further accessibility reads and reconnect attempts also timed out, including after the user confirmed that the Work window was in the foreground.
- Browser-extension inventory remained available, but exposed a different profile without the authenticated playground tab. It was not used as a substitute account.
- No Save, Run flow, approval response, test email, or test chat was executed. Flow creation was not confirmed; inspect the dialog and My flows before retrying to avoid duplicates.
- Earlier connection inspection showed Outlook, Excel, OneDrive, SharePoint, and Teams as Connected. This is not proof of action execution. Forms and Approvals connection readiness remains unconfirmed.

## Activity results

| Activity | Status | Evidence still required |
|---|---|---|
| 1 — Outlook notification | Blocked | Complete trigger/action setup; received email matches both manual inputs |
| 2 — Forms and Excel | Blocked — not run | New response adds one mapped row and sends one confirmation |
| 3 — Approvals | Blocked — not run | Separate Approve/Reject runs update the correct rows and deliver matching emails |
| 7 — SharePoint | Blocked — not run | Approved creates matching file; Rejected does not; training library identified |
| 8 — Teams | Blocked — not run | Direct chats contain actual request values for both decisions |
| 5 — Error recovery | Blocked — not run | Failed Try invokes Catch; repaired Try skips Catch and sends no error email |
| 4 — Daily summary, optional | Blocked — not run | Zero, one, multiple Pending records; verify emails and turn schedule off |
| 6 — Canvas, optional | Passed — static review only | Links and instructions reviewed; no runtime or learner-performance claim |

## Corrections prepared

| Change | Evidence basis | Replay needed |
|---|---|---|
| Defer Exercise 1 Save until an action exists | Microsoft trigger/action documentation; published step saved a trigger-only flow | Yes |
| Make Forms trigger creation and Dynamic content sources explicit | Static sequencing and field-source review | Yes |
| Finish the initial approval test before editing; use new responses afterward | Static lifecycle review | Yes |
| Require Exercise 7 before Teams; identify all placeholders as Dynamic content | Direct contradiction in the original prerequisites/steps | Yes |
| Specify failure-only Catch conditions, excluding success/skipped | Static Run after logic review and error-handling documentation | Yes |
| Supply harmless text file for SharePoint permission check; use folder picker | Missing preparation method and ambiguous hard-coded folder path | Yes, including upload UI label |
| Specify final branch order including retained email notifications | Static cross-exercise continuity review | Yes |
| Keep Canvas and daily summary explicitly optional; align sidebar exercise IDs | User instruction and static navigation review | Site preview |
| Label AI Builder as instructor-only premium exception | User decision and Microsoft licensing guidance | Demo readiness remains separate |

No new designer-specific labels or screenshots are represented as live-validated. Existing designer instructions still require walkthrough verification.

## Resume procedure

1. Restore Computer access to the authorized Edge Work window; confirm account and environment before mutation.
2. Inspect the current creation dialog and My flows for the attempted validation name. Continue that attempt if it exists; otherwise create one isolated flow.
3. Follow the corrected Exercise 1 instructions and capture received-output evidence. Then continue core order 2 → 3 → 7 → 8 → 5, including all practice checkpoints.
4. Use synthetic data, the authorized account as requester/approver/recipient, a separate practice workbook and a designated training SharePoint library. Obtain the library location if no designated training resource is identifiable.
5. Validate optional Exercise 4 separately; keep Exercise 6 outside core time and completion criteria. Optional Teams channel variation requires an identified training Team/channel; do not post to an arbitrary channel.
6. Record observed labels and outcomes after each activity, repair instructions, and replay changed steps. Sanitize screenshots before adding them to public files.
7. Turn off validation flows after testing and retain their artifacts for review. Do not merge or publish this branch.

## Microsoft references

- [Cloud-flow triggers and actions; minimum content needed to save](https://learn.microsoft.com/en-us/power-automate/work-with-triggers-actions)
- [Error handling and Run after](https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling)
- [Office 365 Outlook — Standard](https://learn.microsoft.com/en-us/connectors/office365/)
- [Microsoft Forms — Standard](https://learn.microsoft.com/en-us/connectors/microsoftforms/)
- [Excel Online (Business) — Standard and limitations](https://learn.microsoft.com/en-us/connectors/excelonlinebusiness/)
- [Standard approvals](https://learn.microsoft.com/en-us/connectors/approvals/)
- [SharePoint — Standard](https://learn.microsoft.com/en-us/connectors/sharepointonline/)
- [Microsoft Teams — Standard and Workflows requirement](https://learn.microsoft.com/en-us/connectors/teams/)
- [OneDrive for Business — Standard](https://learn.microsoft.com/en-us/connectors/onedriveforbusiness/)
- [AI Builder licensing](https://learn.microsoft.com/en-us/ai-builder/administer-licensing)

## Local verification

- Production build passed; only the existing large-bundle advisory remains.
- All 30 relative Markdown document/download links resolve on disk.
- Browser preview loaded all eight exercise pages and the home page without a 404. Heading hierarchy and optional sidebar grouping were inspected; Exercise 1 received a screenshot layout check.
- Home and sidebar numbering now agree with exercise IDs. Exercise 6 remains in Optional / Take-home.
- The workbook, slide download, and new permission-check file match their built copies byte for byte.
- `git diff --check` passed.

These checks do not change the blocked live activity results above. No commit was merged or pushed, and the public site was not changed.
