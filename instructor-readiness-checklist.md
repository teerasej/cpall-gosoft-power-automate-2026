# Instructor readiness checklist — Power Automate Day 1

ใช้รายการนี้ก่อนวันอบรมและก่อนเริ่มแต่ละช่วงปฏิบัติ

ลำดับหลักคือ 1 → 2 → 3 → 8 → 5 เวลา 13:30 วิทยากรเลือก **Approval reinforcement** หรือ **SharePoint extension** เพียงเส้นทางเดียว ทั้งสองทางกลับมาเริ่ม Exercise 8 เหมือนกัน SharePoint, แบบฝึกหัด 4 และ 6 ไม่เป็นเงื่อนไขผ่าน Day 1

การตรวจ connection หรือเอกสารไม่เท่ากับการผ่าน live run ให้บันทึก Passed / Failed / Blocked พร้อมหลักฐานผลปลายทางแต่ละกิจกรรม และแยกผลบัญชีวิทยากรออกจาก participant-equivalent account

## Tenant และบัญชี

- [ ] ผู้เรียนเข้า `https://make.powerautomate.com` และสร้าง Instant กับ Automated cloud flow ใน environment ที่องค์กรจัดให้ได้
- [ ] core learner flow ใช้ `Office 365 Outlook`, `Microsoft Forms`, `Excel Online (Business)`, `Standard approvals`, `Microsoft Teams` และ Built-in actions ตาม DLP policy; SharePoint เป็น Standard connector ใน extension เท่านั้น
- [ ] mailbox, OneDrive, Forms และ Approvals ของผู้เรียนพร้อมใช้งาน
- [ ] ระบุอีเมลผู้อนุมัติสำหรับการฝึก และแจ้งผู้รับก่อนทดสอบ
- [ ] ก่อน 13:30 เลือกกิจกรรมเดียวให้ทั้งห้องหรือกำหนดรายกลุ่มอย่างชัดเจน: Approval reinforcement หรือ SharePoint extension
- [ ] หากเลือก SharePoint ให้กำหนด Route A (ผู้เรียนสร้าง site) หรือ Route B (IT เตรียม site) และส่ง direct link ของ route นั้น ผู้เรียนไม่ต้องเปิดอีก route
- [ ] Route A direct link: `https://teerasej.github.io/cpall-gosoft-power-automate-2026/exercises/07a-create-and-validate-own-site`
- [ ] Route B direct link: `https://teerasej.github.io/cpall-gosoft-power-automate-2026/exercises/07b-validate-it-provided-site`
- [ ] Approval reinforcement direct link: `https://teerasej.github.io/cpall-gosoft-power-automate-2026/exercises/07-core-approval-reinforcement`
- [ ] Teams `Workflows` app ถูกตั้งเป็น Allow และ direct-chat path ผ่าน rehearsal ด้วย participant-equivalent account
- [ ] เปิดรูปโปรไฟล์ใน Teams แล้วตรวจว่าบัญชีและองค์กรตรงกับบัญชีที่ใช้สร้าง flow ก่อนทดสอบ Exercise 8

## ไฟล์และข้อมูลฝึก

- [ ] เปิด `task-request-tracker.xlsx` ได้ เห็น worksheet `Requests` และ table `RequestsTable`
- [ ] Headers แปดคอลัมน์ยังเป็น `RequestId`, `Title`, `Description`, `RequesterEmail`, `Category`, `NeededBy`, `Status`, `Decision`
- [ ] ผู้เรียนอัปโหลดสำเนาของตัวเองไปยัง `OneDrive/PowerAutomateTraining/`; ไม่มี workbook กลางร่วมกันทั้งห้อง
- [ ] ใช้ข้อมูลสมมติจาก `sample-requests.md`
- [ ] เตือนให้ปิด Excel ระหว่าง connector เขียนข้อมูลและทดสอบทีละรายการ
- [ ] หากเลือก SharePoint ผู้เรียนทุกคนมี Readiness record ที่ระบุ Site Address, library, learner folder และ Upload / Open / Delete passed

## Smoke test ของวิทยากร

- [ ] Exercise 1: Outlook email มาถึง Inbox และค่าตรงกับ manual trigger
- [ ] Exercise 2: Form response หนึ่งรายการเพิ่มหนึ่งแถวใน `RequestsTable`
- [ ] Exercise 3: `Start and wait for an approval` แสดง Approve/Reject และคืน `Outcome`
- [ ] Approve และ Reject อัปเดตคนละแถวด้วย `RequestId` ที่ถูกต้อง
- [ ] Core reinforcement: Approval, Excel และอีเมลตรงกันทั้ง Approved กับ Rejected โดยใช้คนละ `Response Id`
- [ ] SharePoint extension (ถ้าเลือก): Approved สร้างไฟล์ และ Rejected ไม่สร้างไฟล์
- [ ] Exercise 8: แชต `Workflows` แสดง `RequestId`, `Title`, decision และ next step ถูกต้องทั้งสองเส้นทาง และ Run history มี `id` กับ `messageLink`
- [ ] Exercise 5: controlled failure เรียก recovery path ผ่าน **Settings > Run after** โดยเลือกเฉพาะ **Has failed** และ **Has timed out**
- [ ] หลังซ่อมค่าแล้ว flow เดิม run สำเร็จ, Catch เป็น Skipped และไม่มีอีเมลแจ้ง failure
- [ ] ทดสอบด้วย Form response ใหม่หลัง Save แต่ละครั้ง และจบ approval test ก่อนแก้ flow รอบต่อไป
- [ ] AI Builder เป็น instructor-only premium demonstration แยกจาก learner flows; ตรวจสิทธิ์/ความจุของวิทยากร หรือใช้ saved-result fallback โดยไม่ให้ผู้เรียนเปิด trial
- [ ] ปิด Scheduled flow ที่ใช้เตรียม optional/take-home Exercise 4 หลังทดสอบ

## จุดหยุดตรวจตามเวลา

| Time | Readiness checkpoint |
|---|---|
| 09:30 | ทุกคนเข้า designer และสร้าง Instant cloud flow ได้ |
| 10:15 | Outlook email มาถึงจริง ไม่ใช่ดูเพียงสถานะ Succeeded |
| 11:30 | Form หนึ่ง response เพิ่มหนึ่ง Excel row |
| 12:00 | Approval หนึ่งรายการมาถึงผู้อนุมัติ |
| 13:30 | Approved/Rejected อัปเดตแถวเดิมด้วย RequestId |
| 14:00 | จบกิจกรรมที่เลือก: Approval reinforcement ผ่าน หรือ SharePoint extension ผ่าน/ถูก Skip/Blocked อย่างชัดเจน |
| 14:30 | Teams direct chat มาถึงผู้ขอ |
| 15:15 | ผ่าน integrated test ทั้ง Approve และ Reject |
| 15:35 | Controlled failure, recovery และ repaired rerun ผ่าน |

## Fallback สำหรับห้องเรียน

| จุดติดขัด | Fallback |
|---|---|
| Forms ใช้งานไม่ได้ | ใช้ข้อมูลจาก saved Form response และให้วิทยากรสาธิต trigger |
| OneDrive หรือ Excel connector ใช้งานไม่ได้ | ให้ผู้เรียน map fields จากตัวอย่างหน้าจอ แล้วใช้ saved run แสดงผล |
| Approval ไม่มาถึง | ตรวจ Assigned to, connection และ Run history; ใช้ saved result เพื่ออธิบาย `Outcome` ระหว่างรอ |
| SharePoint site, library หรือ permission ไม่พร้อม | หยุด extension และส่งผู้เรียนไป Approval reinforcement หรือ Exercise 8; บันทึก `Blocked` โดยไม่กระทบผลผ่าน core Day 1 |
| Teams `Workflows` app, บัญชี/องค์กร หรือ direct chat ไม่พร้อม | ตรวจบัญชีจากรูปโปรไฟล์ก่อน; หากยังไม่พร้อมให้ใช้ instructor demonstration/saved result และบันทึกเป็น readiness failure |
| DLP block connector | หยุดการเชื่อมต่อ บันทึก policy/error และเปลี่ยนเป็น instructor demonstration |
| UI label ต่างจากเอกสาร | ใช้ชื่อ action/connector เป็นหลักและแก้คู่มือจากหน้า UI ที่ rehearsal แล้ว |

## สิ่งที่ต้องบันทึกหลัง rehearsal

- วันที่, tenant, participant-equivalent account และชื่อ environment ที่ใช้ทดสอบ
- UI labels ที่ต่างจากคู่มือ และเวลาใช้งานจริงของแต่ละช่วง
- Approval delivery/result, Excel delay, Teams `Workflows` status และกิจกรรมที่เลือกเวลา 13:30
- ผล Accept/Fail ของ Outlook, Forms→Excel, Approve, Reject, Teams และ recovery; SharePoint บันทึกแยกเป็น `Passed`, `Skipped by instructor` หรือ `Blocked`
- สำหรับ Route A บันทึกชื่อกับ URL ของ practice site และผู้รับผิดชอบ cleanup; ห้ามลบ Route B site
- สถานะ AI Builder demo และ saved-result fallback
- ข้อจำกัดที่ต้องแจ้งผู้เรียนก่อนเริ่ม โดยไม่เพิ่มขั้นตอน setup กลางชั้นเรียน
