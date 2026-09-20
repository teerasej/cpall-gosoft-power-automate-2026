# Exercise validation — 17–18 September 2026

## Status: complete for the agreed validation-account scope — review ready

Review branch: `codex/validate-power-automate-exercises`.
Baseline: `bc3f523` (VitePress publication). The live Edge tab inventory showed the public learner site and the GitHub publication run for this commit. The working tree was clean before this review.

This report certifies only the specific observations below for the validation account. It does **not** certify participant readiness or classroom pacing. Corrections combine live UI observations, static instruction review, and Microsoft references. All core activities and the optional daily-summary boundary tests have completed live validation. Canvas received only the agreed static review.

## Observed through Computer

- Reached the authenticated Edge Work-profile Power Automate Create page.
- Observed `Instant cloud flow`, `Automated cloud flow`, `Scheduled cloud flow`, `Build an instant cloud flow`, `Flow name`, `Manually trigger a flow`, and `Create`.
- Entered an isolated validation flow name. Native Computer control timed out during manual-trigger selection. Further accessibility reads and reconnect attempts also timed out, including after the user confirmed that the Work window was in the foreground.
- Browser-extension inventory remained available, but exposed a different profile without the authenticated playground tab. It was not used as a substitute account.
- Initial blocked attempt: no Save or Run occurred. Later, the user opened the authenticated portal in the extension-enabled profile; account verification succeeded and live validation resumed.
- Exercise 1: created and saved an isolated manual flow with two Text inputs and Office 365 Outlook Send an email (V2). The action appeared under the Standard filter.
- Observed To > Settings > Use dynamic content, then `/` > Insert dynamic content. Search found both input tokens.
- Observed Save confirmation, Test > Manually > Test, connection check > Continue, input form > Run flow > Done.
- Run history showed Test succeeded (one second). Opened the received self-addressed email and verified the entered task title in subject and body. The first run used equivalent synthetic wording. A corrected-step replay on 18 September at 02:30 succeeded in 839 ms; the received email matched all three instruction lines and the entered title. The flow was turned off again.
- Earlier connection inspection showed Outlook, Excel, OneDrive, SharePoint, and Teams as Connected. This is not proof of action execution. Forms was subsequently authenticated in the resumed walkthrough. Approvals execution was subsequently verified in Exercise 3.

- Exercise 2 preparation: created a separate five-question Form, checked required fields and category options, submitted a synthetic baseline response, and observed Your response was submitted.
- Created a separate personal OneDrive validation folder. Upload of the supplied workbook was blocked by extension file-access permission; user notified. After the user enabled file access, the upload succeeded; OneDrive showed the private workbook and an upload-success notification.
- Exercise 2 execution: selected the workbook through the folder picker; the document library label was localized as `เอกสาร`. `Show all` exposed table columns. Verified inserted Dynamic content tokens before saving. A fresh response produced a successful three-second run and one complete row in the actual workbook.
- Added Office 365 Outlook confirmation after the Excel action, selecting requester/title/date from `Get response details` and Response Id from the trigger. A fresh response produced a successful four-second run. Opened the received email and the actual workbook: both showed the same synthetic title, request ID, date, and Pending status. Closed the workbook before continuing flow tests.
- Exercise 3 baseline: Standard approvals action was available in the Standard category. Selected First to respond, assigned the validation account, and mapped all five detail values. Observed Waiting in the run, received the actionable approval email, selected Approve then Submit, and observed Approved plus Your flow ran successfully. Separate Approve and Reject tests then succeeded; the actual Excel rows and received decision emails matched their request IDs and outcomes. The new designer labels these branches True and False.
- The user authorized creation of a new dedicated SharePoint training site/library and requested these steps be included in Exercise 7. Created a private Standard team site with English base language and its default Documents library; observed Private group and one member. Created an isolated learner folder, uploaded the supplied permission-check text file, and opened its contents. Recoverable deletion to the site Recycle Bin was confirmed. The new site was absent from Site Address choices; Enter custom value accepted its verified URL. Folder picker showed Shared Documents, although the site displayed Documents. Approve completed in 1 minute 28 seconds; the actual text preview matched all six request fields. Reject completed in 1 minute 1 second; its decision email arrived and the refreshed folder contained only the Approved file.

- Exercise 5: built an isolated manual flow. The initial test failed with an invalid `int` parameter. Added Catch with Settings > Run after > Try; selected Has failed and Has timed out before clearing Is successful, leaving Is skipped unchecked. The recovery test succeeded overall while Try failed and Catch/email succeeded; opened the received self-addressed message. Replaced the expression with `int('25')`; the repaired test succeeded, actual Inputs/Outputs were 25, and Catch/email were Skipped. Inbox still contained only the earlier recovery message. Turned the test flow off. A temporary automatic-review capacity error interrupted the first run attempt; the service subsequently recovered and the same authorized test completed.

- Exercise 4, optional: created a separate scheduled flow with the same synthetic workbook. The first Condition failed because a newline converted the expression result to a String; replaced it with a single expression token and verified the numeric comparison. A successful five-row email then exposed Excel serial dates and collapsed lines. Set List rows present in a table > Advanced parameters > DateTime Format to ISO 8601 and prefixed each appended row with `<br>`. Replayed five, one, and zero Pending rows: run history showed Test succeeded (two, one, and one seconds respectively), and opened each received email. Counts and request IDs matched; the zero-row email said No pending tasks today. Restored all five original Pending statuses, visually verified the workbook, closed it, and turned the schedule off.

- Exercise 8: after the user signed into Teams, verified the intended account and organization in its profile control. Enabled the retained request flow and submitted two fresh synthetic requests. Approve succeeded in 1 minute 25 seconds; Reject succeeded in 1 minute 27 seconds. Opened the Workflows chat and verified both messages against their request IDs, titles, outcomes, and Thai next steps. The rejected Teams action showed matching recipient/message Inputs and successful Outputs containing a message id and messageLink. Actual Excel rows showed Approved/Approve and Rejected/Reject. The Approved archive contained all six expected fields; the refreshed folder contained no archive for the rejected request. Both decision emails arrived. Turned the flow off and confirmed Status Off.

## Activity results

| Activity | Status | Evidence / boundary |
|---|---|---|
| 1 — Outlook notification | Passed — corrected replay | Test succeeded; received email matches all three instruction lines and input title; flow retained and turned off |
| 2 — Forms and Excel | Passed — live run | Post-save responses created correctly mapped rows; receipt run succeeded in four seconds; received email matched RequestId, title, date, and Pending status |
| 3 — Approvals | Passed — live runs | Separate Approve/Reject runs succeeded; actual Excel rows and received decision emails matched each request ID |
| 7 — SharePoint | Passed — live runs | Created private training site/library; permission check passed; Approve created a text file with six matching fields; Reject succeeded and created no corresponding file |
| 8 — Teams | Passed — both live outcomes | Approved and Rejected messages received in Workflows chat with matching request details; Excel, archive behavior, and decision emails verified; flow Status Off confirmed |
| 5 — Error recovery | Passed — three live tests | Initial conversion failed; failure-only Catch sent the verified email; repaired Compose returned 25, Catch/email were Skipped, and no additional error email appeared. Flow Status Off confirmed |
| 4 — Daily summary, optional | Passed — corrected live runs | Five, one, and zero Pending cases succeeded; actual emails verified; dates and line breaks corrected; statuses restored and schedule off |
| 6 — Canvas, optional | Passed — static review only | Links and instructions reviewed; no runtime or learner-performance claim |

## Corrections applied

| Change | Evidence basis | Validation result |
|---|---|---|
| Defer Exercise 1 Save until an action exists; clarify input tokens and email body | Live creation and exact corrected email replay | Passed |
| Make Forms trigger creation and Dynamic content sources explicit | Live Form creation, mapped workbook rows, and receipt email | Passed |
| Finish the initial approval test before editing; use new responses afterward | Live waiting state, baseline approval, and fresh Approve/Reject runs | Passed |
| Require Exercise 7 before Teams; identify all placeholders as Dynamic content | Both full branch runs and actual Teams messages | Passed |
| Specify Settings > Run after and failure-only Catch conditions | Live failed, recovered, and repaired runs | Passed |
| Add private training-site setup, supplied permission file, custom site URL, and folder picker guidance | Live site creation, upload/read/recoverable delete, and both decision runs | Passed |
| Specify final branch order including retained email notifications; locate the Workflows chat | Both full branch runs, Teams delivery, Excel rows, archive behavior, and decision emails | Passed |
| Use filtered current-item expressions, numeric count token, ISO dates, and HTML line breaks | Failed Condition, received-email defects, and corrected 0/1/5-row replays | Passed |
| Keep Canvas and daily summary explicitly optional; align sidebar exercise IDs | User instruction and static navigation review | Passed — site preview |
| Label AI Builder as instructor-only premium exception | User decision and Microsoft licensing guidance | Instructor readiness only — not a learner-flow test |

Exercises 1–5, 7, and 8 supplied live UI and received-output evidence. Teams recipient mapping required Settings > Use dynamic content, and received messages appeared in the Workflows chat. These results apply to the validation account only. No private screenshots are included.

## Retained validation artifacts

- Teams initially opened a different cached account. Sign-out was canceled when the dialog warned that offline drafts would be removed, and no message was sent from that account. After the intended validation account was signed in, both direct-message paths passed and the blocker was resolved.
- The manual notification flow, main request flow, error-handling flow, and scheduled summary flow are retained and turned off. Forms, workbook, private training site, approved text file, emails, and run history are retained for review. Workbook statuses changed for boundary testing were restored.
- Optional channel posting was not attempted; it requires an identified training Team/channel. Canvas remains Optional / Take-home and was reviewed statically only.

## Participant and classroom readiness

- Before class, repeat readiness checks using a normal participant account: Standard classification alone does not prove mailbox, Forms, workbook, SharePoint site creation/write, approval, Teams Workflows, or tenant-policy access. If site creation is restricted, an instructor or site owner must prepare the training site.
- Record participant-account and classroom results separately from this validation-account report. A saved result or instructor demonstration is a fallback, not evidence that a participant completed the hands-on activity.
- No merge, push, or publication is authorized by this review.

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
- A fresh browser preview loaded all eight exercise pages and the home page without a 404. Heading hierarchy, optional sidebar grouping, and the final branched workflow diagram were inspected visually.
- Home and sidebar numbering now agree with exercise IDs.
- The workbook, slide download, and new permission-check file match their built copies byte for byte.
- The manual notification, main request, error-handling, and scheduled-summary validation flows were rechecked in Power Automate and all showed Status Off.
- `git diff --check` passed.

Static checks and the live results above are separate evidence; neither establishes participant-account readiness. No commit was merged or pushed, and the public site was not changed.
