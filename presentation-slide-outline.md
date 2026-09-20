# Presentation slide outline — Power Automate Day 1

**Session:** 09:00–16:00

**Audience:** Beginner business users

**Theme:** เปลี่ยนคำของานให้เป็น workflow ที่ติดตามได้

**Core Standard connectors:** Office 365 Outlook, Microsoft Forms, Excel Online (Business), Standard approvals, Microsoft Teams

**Optional Standard connector:** SharePoint

**Prepared storage:** OneDrive for Business

**Delivery language:** Thai-first; retain official English product and UI terms

**Client alignment:** Decisions from the 14 September 2026 meeting are incorporated. This is the learner-session outline, not a client decision deck.

**Teaching analogy:** One convenience store, two kinds of helpers. Day 1 follows the back-office operations runner: a request arrives, moves between services, waits for a decision, and leaves visible evidence at each stop.

**Learner deck:** [CPAll-Power-Automate-Day-1.pptx](./docs/public/downloads/CPAll-Power-Automate-Day-1.pptx)

## Timing map

| Time | Activity | Slides / exercise |
|---|---|---|
| 09:00–09:30 | Automation basics, Trigger, Action, Connector and embedded governance | Slides 1–10 |
| 09:30–10:15 | Outlook first Instant cloud flow and Inbox verification | Slides 11–14 + Exercise 1 |
| 10:15–10:30 | Break | — |
| 10:30–11:30 | Forms and Excel: one request, one `RequestsTable` row | Slides 15–20 + Exercise 2 |
| 11:30–12:00 | Add `Start and wait for an approval` | Slides 21–23 + Exercise 3 Practice 1 |
| 12:00–13:00 | Lunch | — |
| 13:00–13:30 | Complete Condition and update the matching row | Slides 24–25 + Exercise 3 Practices 2–3 |
| 13:30–14:00 | Instructor-selected: Approval reinforcement or optional SharePoint extension | Slides 26–28 + selected route |
| 14:00–14:30 | Teams: post one result to direct chat | Slides 29–31 + Exercise 8 |
| 14:30–14:45 | Break | — |
| 14:45–15:15 | Integrated Approved and Rejected tests | Slide 32 + guided test |
| 15:15–15:35 | Live error recovery using Run history and Run After | Slide 33 + Exercise 5 |
| 15:35–15:50 | AI Builder instructor demonstration and discussion | Slides 34–35 |
| 15:50–16:00 | Review and Q&A | Slide 36 |

Total: 420 minutes — 330 instruction/activity, 30 breaks and 60 lunch.

## Slides 1–10: Opening, foundations and guardrails

### Slide 1 — Power Automate Day 1

- **Teach:** วันนี้เราจะทำให้คำของานหนึ่งรายการเดินทางจาก Form ไปถึงผลแจ้งเตือนได้เอง
- **Visual:** Forms → Excel → Approval → Teams; SharePoint shown as an optional branch
- **Speaker cue:** เปิดด้วยคำถาม “ถ้ามีคำขอ 20 รายการ เราจะรู้ได้อย่างไรว่ารายการใดไปถึงขั้นไหน?”
- **Link:** [Day 1 learner journey](./docs/index.md)
- **Analogy bridge:** Back-office operations runner → Power Automate cloud flow → today one request moves through the core services, with SharePoint available as an extra filing cabinet.

### Slide 2 — What you will build

- **Teach:** ผู้เรียนจะเห็นผลจริงของ core connector ทีละตัว และเลือกต่อยอด SharePoint ได้เมื่อห้องพร้อม
- **Visual:** Core connector touchpoints with one optional SharePoint branch
- **Speaker cue:** ย้ำว่าทุกขั้นมีผลที่ตรวจได้ ไม่ต้องจำทุกเมนูพร้อมกัน

### Slide 3 — One task-request story

- **Teach:** เรื่องเดียวตลอดวันช่วยให้เห็นว่าข้อมูลเดิมเดินทางอย่างไร
- **Visual:** Request card changing from Pending to Approved or Rejected
- **Speaker cue:** ใช้ข้อมูลสมมติและ workbook ส่วนตัวเท่านั้น
- **Analogy bridge:** ใบคำขอหนึ่งใบในร้าน → request record เดียว → ติดตาม `RequestId` เดิมตั้งแต่ Form ถึง Teams

### Slide 4 — Success at 16:00

- **Teach:** สร้าง ทดสอบ ตรวจผลปลายทาง และอ่าน Run history ได้ โดยไม่ต้องผ่าน SharePoint
- **Visual:** Build, Check, Decide, Recover
- **Speaker cue:** ให้ผู้เรียนเลือกหนึ่งทักษะที่อยากนำไปใช้หลังคลาส

### Slide 5 — What makes a task automatable

- **Teach:** งานที่เหมาะมีจุดเริ่ม ข้อมูล กติกา และผลลัพธ์ชัด
- **Visual:** Repeatable recipe versus judgment-heavy work
- **Speaker cue:** เปรียบ flow กับสูตรอาหาร คนยังเป็นผู้เลือกเมนูและตรวจรส

### Slide 6 — Trigger, Action and Connector

- **Teach:** Trigger เริ่มงาน, Action ทำงาน, Connector เชื่อมบริการ
- **Visual:** Request arrives → operations runner carries it → work station completes a step
- **Speaker cue:** Trigger คือเหตุการณ์ที่เรียกผู้ช่วยหลังร้าน, Connector คือทางเข้าใช้บริการ, Action คืองานหนึ่งอย่างที่บริการนั้นทำ
- **Analogy bridge:** ใบคำขอเข้าถาด → Trigger; ทางที่ผู้ช่วยเข้าถึงจุดงาน → Connector; การส่งอีเมลหรือเพิ่มแถว → Action

### Slide 7 — Three cloud flow types

- **Teach:** Instant เริ่มโดยคน, Automated เริ่มจากเหตุการณ์, Scheduled เริ่มตามเวลา
- **Visual:** Button, incoming form, clock
- **Speaker cue:** วันนี้ build Instant และ Automated; Scheduled อยู่ใน take-home reference

### Slide 8 — Connector map for today

- **Teach:** Outlook, Forms, Excel, Approvals และ Teams เป็น core Standard connectors; SharePoint เป็น Standard connector ใน extension
- **Visual:** Five core connector touchpoints; SharePoint shown separately as optional; OneDrive shown as storage shelf
- **Speaker cue:** OneDrive เก็บ workbook ที่เตรียมไว้ ไม่ต้องทำ flow ซ้ำเพื่อพิสูจน์ connector อีกครั้ง
- **Analogy bridge:** จุดบริการหลักในหลังร้าน → core Standard connectors → SharePoint เป็นตู้เอกสารเสริมเมื่อพื้นที่พร้อม

### Slide 9 — Permission and policy still matter

- **Teach:** Standard connector ยังต้องมีบัญชี connection, permission และ DLP policy ที่อนุญาต
- **Visual:** Three checkpoints: account, connection, policy
- **Speaker cue:** เปรียบกับบัตรโดยสารที่ยังต้องขึ้นรถสายถูกและผ่านประตูที่เปิด
- **Link:** [Instructor readiness](./instructor-readiness-checklist.md)

### Slide 10 — Safe data and human checks

- **Teach:** ใช้ข้อมูลสมมติ ตรวจผลจริง และไม่ส่งข้อมูลลับออกนอกระบบที่กำหนด
- **Visual:** Synthetic request card and human verification tick
- **Speaker cue:** เครื่องหมาย Succeeded ไม่แทนการตรวจ Inbox, Excel หรือ Teams; ผู้ที่เลือก SharePoint ต้องตรวจไฟล์เพิ่ม

## Slides 11–14: Outlook first flow

### Slide 11 — The smallest useful flow

- **Teach:** Manual trigger รับข้อมูลแล้ว `Send an email (V2)` ส่งผลทันที
- **Visual:** Two-node flow
- **Speaker cue:** เริ่มเล็กเหมือนทดลองกดกริ่งก่อนต่อระบบทั้งบ้าน
- **Link:** [Exercise 1](./docs/exercises/01-first-task-notification.md)

### Slide 12 — Trigger inputs

- **Teach:** `TaskTitle` และ `RecipientEmail` เป็นข้อมูลที่ flow ต้องใช้
- **Visual:** Two input fields flowing to email fields
- **Speaker cue:** ให้ผู้เรียนตรวจชนิดและชื่อ input ก่อนเพิ่ม action

### Slide 13 — Map Dynamic content

- **Teach:** Output ของ trigger กลายเป็น input ของ Outlook action
- **Visual:** Tagged values moving into To and Subject
- **Speaker cue:** เปรียบ Dynamic content กับช่องว่างในจดหมายเวียน

### Slide 14 — Inbox is the checkpoint

- **Teach:** Run ต้อง Succeeded และอีเมลต้องมาถึงพร้อมค่าที่ถูกต้อง
- **Visual:** Run history beside matching Inbox message
- **Speaker cue:** ให้ผู้เรียนเทียบค่าที่กรอกกับอีเมล ไม่หยุดที่เครื่องหมายสีเขียว

## Slides 15–20: Forms and Excel

### Slide 15 — A Form starts the request

- **Teach:** Form ทำให้ข้อมูลเริ่มต้นครบและเป็นรูปแบบเดียวกัน
- **Visual:** Six short form fields
- **Speaker cue:** ชี้ว่าฟอร์มเหมือนใบรับเรื่อง ไม่ใช่ฐานข้อมูล
- **Link:** [Exercise 2](./docs/exercises/02-collect-and-record-requests.md)

### Slide 16 — One response, one row

- **Teach:** `When a new response is submitted` ตามด้วย `Get response details` แล้วเพิ่มหนึ่งแถว
- **Visual:** Form response → details → Excel row
- **Speaker cue:** หยุดทดสอบเมื่อ response แรกเพิ่ม row ได้ ก่อนต่อขั้นอื่น

### Slide 17 — Prepared personal workbook

- **Teach:** แต่ละคนใช้ `task-request-tracker.xlsx` ของตนใน OneDrive และ table ชื่อ `RequestsTable`
- **Visual:** Personal OneDrive folder and eight-column table
- **Speaker cue:** ตรวจ worksheet/table แล้วปิด workbook ก่อน run
- **Link:** [Excel tracker](https://raw.githubusercontent.com/teerasej/cpall-gosoft-power-automate-2026/main/docs/public/downloads/task-request-tracker.xlsx)
- **Analogy bridge:** สมุดรับเรื่องหลังร้าน → `RequestsTable` → หนึ่ง Form response ต้องเพิ่มหนึ่งแถวและเก็บ `RequestId` ไว้ตามงาน

### Slide 18 — Map the eight columns

- **Teach:** `RequestId` เป็น key; fields อื่นเก็บเรื่อง ผู้ขอ หมวด วันต้องการ สถานะ และผลตัดสินใจ
- **Visual:** Form-to-table mapping
- **Speaker cue:** `Status` เริ่มเป็น Pending และ `Decision` ยังว่าง

### Slide 19 — RequestId is the tracking number

- **Teach:** Forms `Response Id` ใช้ค้นหาแถวเดิมในขั้นอนุมัติ
- **Visual:** Ticket number stamped on one request row
- **Speaker cue:** เปรียบกับเลขรับเรื่องที่ช่วยไม่ให้อัปเดตผิดรายการ

### Slide 20 — Check the row, not just the run

- **Teach:** ตรวจว่ามีหนึ่ง row ใหม่และค่าตรงกับ Form
- **Visual:** Submitted request beside the matching row
- **Speaker cue:** รอการอัปเดตแล้ว refresh; อย่าเปิดแก้ workbook ระหว่าง connector เขียน

## Slides 21–25: Approval and decision

### Slide 21 — Start and wait for an approval

- **Teach:** `Start and wait for an approval` ส่งคำขอและรอ `Outcome`
- **Visual:** Approval card with Approve/Reject
- **Speaker cue:** ใช้ผู้อนุมัติหนึ่งคนเพื่อให้ผู้เริ่มต้นเห็นผลเร็ว
- **Link:** [Exercise 3](./docs/exercises/03-ask-for-a-decision.md)
- **Analogy bridge:** ผู้ช่วยยื่นใบให้หัวหน้าและรอคำตัดสิน → `Start and wait for an approval` → ตรวจว่า Approve/Reject กลับมาที่ flow

### Slide 22 — Configure the approval

- **Teach:** Title, Assigned to และ Details ต้องทำให้ผู้อนุมัติตัดสินใจได้
- **Visual:** Annotated approval fields
- **Speaker cue:** ใช้ `Response Id` ใน Details เพื่อย้อนตรวจคำขอ

### Slide 23 — Approval versus email options

- **Teach:** Email options เป็นคำตอบแบบเบา; Approvals ให้ output และประวัติเฉพาะกระบวนการอนุมัติ
- **Visual:** Compact two-column comparison
- **Speaker cue:** อธิบายสั้น ๆ แล้วกลับสู่ action ที่ผู้เรียนกำลังสร้าง

### Slide 24 — Outcome controls the Condition

- **Teach:** `Outcome is equal to Approve` แยก If yes กับ If no
- **Visual:** Approval Outcome → Condition → two branches
- **Speaker cue:** ให้ผู้เรียนพูดกติกาเป็นภาษาคนก่อนสร้าง Condition
- **Analogy bridge:** ถาดสองสีหลังคำตัดสิน → Condition branches → Approve และ Reject ต้องอัปเดตแถว `RequestId` เดียวกัน

### Slide 25 — Update the matching row

- **Teach:** `Update a row` ใช้ Key Column `RequestId` และ Forms `Response Id`
- **Visual:** Approve/Reject branches pointing back to one exact row
- **Speaker cue:** ตรวจทั้ง Status และ Decision และทดสอบคนละ RequestId

## Slides 26–28: Instructor-selected route

### Slide 26 — Choose the 13:30 route

- **Teach:** วิทยากรเลือก Approval reinforcement หรือ SharePoint extension เพียงเส้นทางเดียว
- **Visual:** One decision point leading to two activities that rejoin at Teams
- **Speaker cue:** หากข้าม SharePoint ให้เปิดกิจกรรม reinforcement และข้ามไป Slide 29 หลัง checkpoint ผ่าน
- **Links:** [Approval reinforcement](./docs/exercises/07-core-approval-reinforcement.md) และ [SharePoint extension](./docs/exercises/07-archive-approved-request-in-sharepoint.md)
- **Analogy bridge:** หลังตรวจสมุดรับเรื่องแล้ว เลือกว่าจะตรวจงานซ้ำหรือเพิ่มตู้เอกสาร ก่อนกลับไปแจ้งผลที่เคาน์เตอร์เดียวกัน

### Slide 27 — SharePoint readiness routes

- **Teach:** Route A สร้างและตรวจ private Team site; Route B ตรวจ site ที่ IT เตรียมให้ ผู้เรียนเปิดเพียง route เดียว
- **Visual:** Two isolated route links producing the same readiness record
- **Speaker cue:** ส่ง direct link ของ route ที่เลือก ไม่ให้ผู้เรียนอ่านหรือทำอีก route; หาก Upload / Open / Delete ไม่ผ่านให้กลับ reinforcement
- **Link:** [SharePoint extension route selector](./docs/exercises/07-archive-approved-request-in-sharepoint.md)

### Slide 28 — Rejoin at the checkpoint

- **Teach:** Reinforcement พิสูจน์ `Response Id` ใน Approval, Excel และ email; SharePoint พิสูจน์ Approved มีไฟล์และ Rejected ไม่มีไฟล์
- **Visual:** Two evidence paths joining the same Teams start point
- **Speaker cue:** บันทึก SharePoint เป็น Passed, Skipped by instructor หรือ Blocked; ไม่มีสถานะใดขวาง Exercise 8

## Slides 29–31: Teams result message

### Slide 29 — Add a direct Teams result

- **Teach:** `Post message in a chat or channel` ส่งผลไปยัง direct chat โดยไม่ต้องสร้าง Team/channel
- **Visual:** Two decision branches joining direct chat
- **Speaker cue:** Workflows app และ connector path ต้องผ่าน rehearsal
- **Link:** [Exercise 8](./docs/exercises/08-notify-requester-in-teams.md)
- **Analogy bridge:** ผู้ช่วยแจ้งผลกลับจุดรับเรื่อง → Teams direct chat → ทั้ง Approved และ Rejected ต้องมีข้อความผลลัพธ์

### Slide 30 — Map recipient and message

- **Teach:** Recipient มาจาก `Requester email`; ข้อความมี RequestId, Title, result และ next step
- **Visual:** Dynamic content mapped to message template
- **Speaker cue:** ใช้อีเมลฝึกของตนเองและข้อมูลสมมติ

### Slide 31 — Check both Teams messages

- **Teach:** Approved และ Rejected ต้องส่งข้อความที่ต่างกันและตรงกับ RequestId
- **Visual:** Two direct-chat messages side by side
- **Speaker cue:** เปิดข้อความจริงและเทียบกับ Run history

## Slides 32–36: Integration, recovery and close

### Slide 32 — Integrated two-path test

- **Teach:** ทดสอบ Form สองรายการ: Approve หนึ่งรายการและ Reject หนึ่งรายการ
- **Visual:** Core acceptance matrix for Excel and Teams with an optional SharePoint evidence column
- **Speaker cue:** Core: Approved/Rejected update Excel and send Teams. Optional SharePoint: Approved creates a file and Rejected does not.
- **Link:** [Sample requests](./docs/resources/sample-requests.md)

### Slide 33 — Recover from a controlled failure

- **Teach:** Run history ชี้จุดล้มเหลว และ Run After กำหนดสิ่งที่เกิดเมื่อ action fail
- **Visual:** Try scope → failed expression → recovery notification → repaired rerun
- **Speaker cue:** ทำ controlled failure หนึ่งครั้ง ซ่อม แล้วพิสูจน์ว่า run ใหม่สำเร็จ
- **Link:** [Exercise 5](./docs/exercises/05-understand-and-recover-from-errors.md)
- **Analogy bridge:** จุดงานหยุดบนกระดานหลังร้าน → Run history and Run After → อ่านจุดล้มเหลว ซ่อม แล้วพิสูจน์ด้วย successful run ใหม่

### Slide 34 — Govern the whole workflow

- **Teach:** ตรวจ owner, connection, least access, data boundary และ monitoring ก่อนนำไปใช้จริง
- **Visual:** Five guardrails around the completed flow
- **Speaker cue:** Governance ไม่ใช่บทท้ายแยกออกมา แต่เป็นกติกาที่ใช้ทุก connector

### Slide 35 — AI Builder overview and demonstration

- **Teach:** AI Builder เพิ่มการอ่านหรือจัดประเภทข้อมูลใน flow ได้ แต่วันนี้เป็น demo/discussion เท่านั้น
- **Visual:** Incoming document → AI result → familiar flow action
- **Speaker cue:** สาธิต use case ขนาดเล็กหรือ saved result; ไม่ให้ผู้เรียนเตรียม model/license และไม่เพิ่ม hands-on

### Slide 36 — Review and Q&A

- **Teach:** เลือก Trigger, Connector และ checkpoint ให้เหมาะกับงานจริงหนึ่งเรื่อง
- **Visual:** Core connector journey with SharePoint shown as an optional extension
- **Speaker cue:** ทบทวน Outlook, Forms, Excel, Approvals, Teams และ error recovery; SharePoint เป็นหลักฐานเสริมเมื่อเลือกทำ; จบ 16:00
- **Analogy bridge:** ผู้ช่วยหลังร้านทำตามขั้นตอนที่กำหนด → Day 1 Power Automate; พรุ่งนี้ผู้ช่วยหน้าเคาน์เตอร์จะสนทนาและส่งงานที่ยืนยันแล้วมาให้ flow

## Optional / take-home references

- [Exercise 7 — SharePoint extension route selector](./docs/exercises/07-archive-approved-request-in-sharepoint.md)
- [Instructor-selected Approval reinforcement](./docs/exercises/07-core-approval-reinforcement.md)
- [Exercise 4 — Scheduled Pending summary](./docs/exercises/04-daily-pending-summary.md)

SharePoint and the take-home references are not required completion criteria for the live Day 1 journey. Approval reinforcement is used only when selected by the instructor.
