# Instructor readiness checklist — Power Automate Day 1

ใช้รายการนี้ก่อนวันอบรมและก่อนเริ่มแต่ละช่วงปฏิบัติ

## Tenant และบัญชี

- [ ] ผู้เรียนเข้า `https://make.powerautomate.com` ได้
- [ ] ผู้เรียนสร้าง Instant, Automated และ Scheduled cloud flow ได้ใน environment ที่องค์กรจัดให้
- [ ] ผู้เรียนไม่ต้องสร้าง environment ใหม่
- [ ] `Microsoft Forms`, `Office 365 Outlook`, `Excel Online (Business)` และ `OneDrive for Business` เปิดใช้งานตาม DLP policy
- [ ] mailbox และ OneDrive ของผู้เรียนถูก provision แล้ว
- [ ] ผู้เรียนสร้าง Form และเชื่อม connection ของตัวเองได้
- [ ] ระบุอีเมลผู้ตัดสินใจสำหรับการฝึก และแจ้งผู้รับก่อนทดสอบ

## Optional extensions: SharePoint และ Microsoft Teams

- [ ] ระบุ `Site Address` ของ SharePoint training site ที่มี default `Documents` library
- [ ] ทดสอบด้วยบัญชีผู้เรียนว่าเปิด library และสร้าง/ลบไฟล์ในโฟลเดอร์ของตนได้
- [ ] ไม่ต้องเตรียม custom SharePoint list, columns, content type หรือ site แยกรายบุคคล
- [ ] ผู้เรียนเข้า Microsoft Teams ด้วยบัญชีเดียวกับ Power Automate ได้
- [ ] Teams `Workflows` app ถูกตั้งเป็น Allow ใน Teams admin center
- [ ] DLP policy อนุญาตให้ flow ใช้ SharePoint หรือ Microsoft Teams ร่วมกับ connectors ใน core path
- [ ] ยืนยันว่า direct message แบบ `Flow bot` ทำงานใน commercial tenant ด้วยบัญชีผู้เรียน
- [ ] หากต้องการ channel variation ให้ระบุ Team, standard channel, posting identity และวิธีลบข้อความทดสอบ
- [ ] ขั้นตอน SharePoint และ Teams ที่ยังไม่ผ่าน participant-account rehearsal ต้องติดป้าย `ต้องตรวจสอบก่อนเริ่มอบรม`

## ไฟล์และข้อมูลฝึก

- [ ] เปิด `task-request-tracker.xlsx` ได้ และเห็น `RequestsTable`
- [ ] ผู้เรียนดาวน์โหลดและอัปโหลดสำเนาของตัวเองไปยัง `OneDrive/PowerAutomateTraining/`
- [ ] ไม่มีการใช้ workbook กลางร่วมกันทั้งห้อง
- [ ] ใช้ข้อมูลสมมติจาก `sample-requests.md`
- [ ] เตือนให้ปิด Excel ระหว่าง connector เขียนข้อมูลและทดสอบทีละรายการ

## Smoke test ของวิทยากร

- [ ] Exercise 1 ส่งอีเมลสำเร็จ
- [ ] Forms response สร้าง Excel row และส่งอีเมลยืนยัน
- [ ] `Send email with options` แสดงตัวเลือกและคืนค่า `SelectedOption`
- [ ] ทั้ง Approved และ Rejected อัปเดต row ด้วย `RequestId` ที่ถูกต้อง
- [ ] Scheduled summary ทำงานกับ 0, 1 และหลาย Pending records
- [ ] Controlled failure เรียก Catch ผ่าน `Configure run after`
- [ ] Optional Exercise 7: Approved สร้างไฟล์ในโฟลเดอร์ผู้เรียน และ Rejected ไม่สร้างไฟล์
- [ ] Optional Exercise 7: ผู้เรียนสองคนที่มี Forms `Response Id` เดียวกันไม่เกิด filename conflict เพราะใช้คนละโฟลเดอร์
- [ ] Optional Exercise 8: direct Teams chat แสดง `RequestId`, `Title`, decision และ next step ถูกต้องทั้งสองแขนง
- [ ] Optional Exercise 8: direct chat ทำงานโดยไม่ต้องสร้าง Team หรือ channel
- [ ] ปิด scheduled flows หลังทดสอบ

## Fallback สำหรับห้องเรียน

| จุดติดขัด | Fallback |
|---|---|
| Forms ใช้งานไม่ได้ | ใช้ Exercise 1 ต่อและให้วิทยากรสาธิต Automated trigger |
| OneDrive หรือ Excel connector ใช้งานไม่ได้ | ให้ผู้เรียนออกแบบ mapping จากตัวอย่างหน้าจอ แล้ววิทยากรสาธิต run ที่บันทึกไว้ |
| Email options ไม่แสดง | เปิด Outlook on the web หรือใช้ saved result เพื่ออธิบาย `SelectedOption` |
| SharePoint site, folder หรือ permission ไม่พร้อม | คง Excel เป็น core path และเปลี่ยน Exercise 7 เป็น instructor demonstration หรือ saved result |
| Teams `Workflows` app หรือ Flow bot ไม่พร้อม | คง Outlook notification เป็น core path และเปลี่ยน Exercise 8 เป็น instructor demonstration หรือ saved result |
| Team หรือ channel ไม่พร้อม | ใช้ direct `Chat with Flow bot`; channel posting เป็น optional variation เท่านั้น |
| DLP block connector | หยุดการเชื่อมต่อ บันทึกชื่อ policy/error และเปลี่ยนเป็น instructor demonstration |
| UI label ต่างจากเอกสาร | ใช้ชื่อ action/connector เป็นหลัก และอธิบายตำแหน่งจากหน้าปัจจุบัน |

## สิ่งที่ต้องบันทึกหลัง rehearsal

- วันที่, tenant และบัญชีที่ใช้ทดสอบ
- UI labels ที่เปลี่ยนจากเอกสาร
- เวลาจริงของแต่ละ Exercise
- ข้อจำกัดของ Outlook action card และ Excel delay ที่พบจริง
- Site Address, library name, permission และเวลาที่ใช้จริงของ SharePoint extension
- สถานะ Teams `Workflows` app, direct-chat result และ tenant type ที่ทดสอบ
- การตัดสินใจว่า Exercise 7–8 เป็น `Optional hands-on`, `Instructor demonstration` หรือ `Omit`
- ขั้นตอนใดต้องใช้ saved-result fallback
