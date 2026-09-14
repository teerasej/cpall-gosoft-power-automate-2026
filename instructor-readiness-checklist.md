# Instructor readiness checklist — Power Automate Day 1

ใช้รายการนี้ก่อนวันอบรมและก่อนเริ่มแต่ละช่วงปฏิบัติ

## Tenant และบัญชี

- [ ] ผู้เรียนเข้า `https://make.powerautomate.com` และสร้าง Instant กับ Automated cloud flow ใน environment ที่องค์กรจัดให้ได้
- [ ] `Office 365 Outlook`, `Microsoft Forms`, `Excel Online (Business)`, `Standard approvals`, `SharePoint`, `Microsoft Teams` และ `OneDrive for Business` ใช้งานร่วมกันได้ตาม DLP policy
- [ ] mailbox, OneDrive, Forms และ Approvals ของผู้เรียนพร้อมใช้งาน
- [ ] ระบุอีเมลผู้อนุมัติสำหรับการฝึก และแจ้งผู้รับก่อนทดสอบ
- [ ] ระบุ SharePoint training site และ document library ที่ผู้เรียนมีสิทธิ์เขียน
- [ ] Teams `Workflows` app ถูกตั้งเป็น Allow และ direct-chat path ผ่าน rehearsal

## ไฟล์และข้อมูลฝึก

- [ ] เปิด `task-request-tracker.xlsx` ได้ เห็น worksheet `Requests` และ table `RequestsTable`
- [ ] Headers แปดคอลัมน์ยังเป็น `RequestId`, `Title`, `Description`, `RequesterEmail`, `Category`, `NeededBy`, `Status`, `Decision`
- [ ] ผู้เรียนอัปโหลดสำเนาของตัวเองไปยัง `OneDrive/PowerAutomateTraining/`; ไม่มี workbook กลางร่วมกันทั้งห้อง
- [ ] ใช้ข้อมูลสมมติจาก `sample-requests.md`
- [ ] เตือนให้ปิด Excel ระหว่าง connector เขียนข้อมูลและทดสอบทีละรายการ
- [ ] ผู้เรียนสร้างโฟลเดอร์ `PA-[เลขที่ผู้เรียน]-[ชื่อภาษาอังกฤษ]` ใน library ที่กำหนดได้

## Smoke test ของวิทยากร

- [ ] Exercise 1: Outlook email มาถึง Inbox และค่าตรงกับ manual trigger
- [ ] Exercise 2: Form response หนึ่งรายการเพิ่มหนึ่งแถวใน `RequestsTable`
- [ ] Exercise 3: `Start and wait for an approval` แสดง Approve/Reject และคืน `Outcome`
- [ ] Approve และ Reject อัปเดตคนละแถวด้วย `RequestId` ที่ถูกต้อง
- [ ] Exercise 7: Approved สร้างไฟล์ใน SharePoint และ Rejected ไม่สร้างไฟล์
- [ ] Exercise 8: direct Teams chat แสดง `RequestId`, `Title`, decision และ next step ถูกต้องทั้งสองแขนง
- [ ] Exercise 5: controlled failure เรียก recovery path ผ่าน `Configure run after`
- [ ] หลังซ่อมค่าแล้ว flow เดิม run สำเร็จ
- [ ] AI Builder demonstration เปิดได้ด้วยบัญชีวิทยากร หรือมี saved-result fallback
- [ ] ปิด Scheduled flow ที่ใช้เตรียม optional/take-home Exercise 4 หลังทดสอบ

## จุดหยุดตรวจตามเวลา

| Time | Readiness checkpoint |
|---|---|
| 09:30 | ทุกคนเข้า designer และสร้าง Instant cloud flow ได้ |
| 10:15 | Outlook email มาถึงจริง ไม่ใช่ดูเพียงสถานะ Succeeded |
| 11:30 | Form หนึ่ง response เพิ่มหนึ่ง Excel row |
| 12:00 | Approval หนึ่งรายการมาถึงผู้อนุมัติ |
| 13:30 | Approved/Rejected อัปเดตแถวเดิมด้วย RequestId |
| 14:00 | Approved สร้าง SharePoint text file |
| 14:30 | Teams direct chat มาถึงผู้ขอ |
| 15:15 | ผ่าน integrated test ทั้ง Approve และ Reject |
| 15:35 | Controlled failure, recovery และ repaired rerun ผ่าน |

## Fallback สำหรับห้องเรียน

| จุดติดขัด | Fallback |
|---|---|
| Forms ใช้งานไม่ได้ | ใช้ข้อมูลจาก saved Form response และให้วิทยากรสาธิต trigger |
| OneDrive หรือ Excel connector ใช้งานไม่ได้ | ให้ผู้เรียน map fields จากตัวอย่างหน้าจอ แล้วใช้ saved run แสดงผล |
| Approval ไม่มาถึง | ตรวจ Assigned to, connection และ Run history; ใช้ saved result เพื่ออธิบาย `Outcome` ระหว่างรอ |
| SharePoint site, library หรือ permission ไม่พร้อม | ใช้ prepared instructor flow/saved result และบันทึกเป็น readiness failure; ไม่อ้างว่าผู้เรียนผ่าน hands-on |
| Teams `Workflows` app หรือ direct chat ไม่พร้อม | ใช้ instructor demonstration/saved result และบันทึกเป็น readiness failure |
| DLP block connector | หยุดการเชื่อมต่อ บันทึก policy/error และเปลี่ยนเป็น instructor demonstration |
| UI label ต่างจากเอกสาร | ใช้ชื่อ action/connector เป็นหลักและแก้คู่มือจากหน้า UI ที่ rehearsal แล้ว |

## สิ่งที่ต้องบันทึกหลัง rehearsal

- วันที่, tenant, participant-equivalent account และชื่อ environment ที่ใช้ทดสอบ
- UI labels ที่ต่างจากคู่มือ และเวลาใช้งานจริงของแต่ละช่วง
- Approval delivery/result, Excel delay, SharePoint site/library/permission และ Teams `Workflows` status
- ผล Accept/Fail ของ Outlook, Forms→Excel, Approve, Reject, SharePoint, Teams และ recovery
- สถานะ AI Builder demo และ saved-result fallback
- ข้อจำกัดที่ต้องแจ้งผู้เรียนก่อนเริ่ม โดยไม่เพิ่มขั้นตอน setup กลางชั้นเรียน
