# Reference topic coverage — Power Automate Day 1

เอกสารนี้เชื่อมหัวข้ออ้างอิงกับ learner journey ที่ปรับตามผลประชุม 14 September 2026

| Reference topic | Delivery | Location / note |
|---|---|---|
| Overview and use cases | Teach | Slides 3–5 |
| Trigger, Action and Connector | Teach and build | Slides 6–8; Exercises 1–3 |
| Standard connectors | Teach and build | Outlook, Forms, Excel Online (Business), Standard approvals, SharePoint and Microsoft Teams |
| OneDrive for Business | Prepared storage | Stores each learner’s workbook; no repetitive standalone flow |
| Instant cloud flow | Build | Exercise 1 |
| Automated cloud flow | Build | Exercises 2–3 and continued journey |
| Scheduled cloud flow | Optional/take-home | Exercise 4 |
| Dynamic content | Build | Exercises 1–3, 7–8 |
| Conditions | Build | Exercise 3 |
| Approval connector | Build | Exercise 3 uses `Start and wait for an approval` |
| SharePoint automation | Build | Exercise 7 creates one text file in an existing library for Approved only |
| Teams notifications | Build | Exercise 8 posts the result to a direct chat; Workflows app required |
| Testing and monitoring | Build | Observable checkpoint in every exercise; integrated two-path test at 14:45 |
| Error handling and Run After | Build live | Exercise 5 |
| Data operations | Optional/take-home | Exercise 4; HTML table remains optional |
| Workplace transfer canvas | Optional/take-home | Exercise 6 and `automation-canvas.md` |
| Governance and DLP | Embedded teaching | Slides 9–10 and connector readiness checkpoints |
| AI Builder | Instructor demonstration/discussion | Slide 35; no hands-on preparation |
| Multi-stage/custom approvals | Explain only | Beyond beginner core |
| Do Until and code view | Explain only if asked | Not part of required journey |
| End-to-end workflow | Build | Forms → Excel → Approval → Excel → SharePoint for Approved → Teams for both results |

## Scope decision

The learner build uses no Premium connectors. SharePoint and Teams are required touchpoints, but their setup stays deliberately small: one existing document library and one rehearsed direct-chat route. OneDrive stores the prepared workbook; it is not a separate connector exercise. The scheduled Pending summary and Automation Canvas remain optional/take-home references. Production deployment, shared service accounts, custom connectors and Premium connectors remain outside the learner build.
