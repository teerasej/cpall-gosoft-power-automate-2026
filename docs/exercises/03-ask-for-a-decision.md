# แบบฝึกหัดที่ 3: ขออนุมัติและอัปเดตคำขอ

เราจะต่อยอด flow เดิมให้สร้าง approval หนึ่งรายการ รอผล `Approve` หรือ `Reject` แล้วอัปเดตแถวเดิมใน Excel จาก `Outcome`

> **License:** ใช้ `Standard approvals`, `Office 365 Outlook` และ `Excel Online (Business)` ซึ่งเป็น Standard connectors

## Prerequisites

- Flow `Record Task Request - [Your Name]` จากแบบฝึกหัดที่ 2 ทำงานสำเร็จ
- กำหนดอีเมลผู้อนุมัติสำหรับการฝึก โดยใช้อีเมลของตัวเองหรือบัญชีที่วิทยากรจัดให้

## Workflow ที่เราจะสร้าง

```mermaid
flowchart LR
    A["Record request"] --> B["Start and wait for an approval"]
    B --> C{"Outcome"}
    C -->|Approve| D["Update row: Approved"]
    C -->|Reject| E["Update row: Rejected"]
    D --> F["Notify requester"]
    E --> F
```

---

## Practice 1: สร้าง approval หนึ่งรายการ

**Primary target:** รอรับผลจาก `Start and wait for an approval` เพื่อให้ flow มีค่า `Outcome` สำหรับตัดสินใจ

1. เปิด flow `Record Task Request - [Your Name]`
2. หลังอีเมลยืนยัน เพิ่ม action `Start and wait for an approval` จาก `Standard approvals`
3. กำหนดค่า:

   - **Approval type:** `Approve/Reject - First to respond`
   - **Title:** `Decision needed: ` + Dynamic content `Task title`
   - **Assigned to:** พิมพ์อีเมลผู้อนุมัติสำหรับการฝึก แล้วกด **Tab** ตรวจว่าอีเมลกลายเป็นรายการผู้รับในช่อง
   - **Details:** แสดง `Description`, `Category`, `Needed by`, `Requester email` และ `Response Id`

4. เลือก **Save**
5. ส่ง Form ใหม่ 1 ครั้ง แล้วเปิด **Run history** ของ flow ตรวจว่า action `Start and wait for an approval` แสดง **Waiting**
6. เปิด Outlook ของผู้อนุมัติ แล้วเปิดอีเมลหัวข้อ `Decision needed: ...` ตรวจข้อมูลคำขอและ `Request ID`

### Checkpoint

- เห็น approval ที่มีปุ่ม `Approve` และ `Reject` และ flow รออยู่ที่ action นี้

ก่อนเริ่ม Practice 2 ให้เลือก **Approve** ในอีเมล ใส่ **Comments** ได้ตามต้องการ แล้วเลือก **Submit** ตรวจว่าแสดง **Approved** และรอ run จบ แถวนี้ยังเป็น `Pending` ได้ เพราะยังไม่ได้เพิ่ม `Update a row` อย่าใช้รายการนี้ตรวจผลของ Practice 2–3; หลังแก้ไขและบันทึก flow ให้ส่ง Form ใหม่เสมอ

> **💡 Comparison:** `Send email with options` เหมาะกับคำตอบทางอีเมลแบบเบา ส่วน `Start and wait for an approval` ให้ output และประวัติสำหรับกระบวนการอนุมัติโดยตรง วันนี้เราใช้แบบหลังเป็นเส้นทางหลัก

---

## Practice 2: แยกเส้นทางด้วย Condition

**Primary target:** ตรวจค่า `Outcome` เพื่อให้ flow เลือกเส้นทาง Approved หรือ Rejected และอัปเดต `RequestId` ที่ถูกต้อง

1. หลัง `Start and wait for an approval` เพิ่ม Built-in action `Condition`
2. เลือก Dynamic content `Outcome` จาก `Start and wait for an approval` ในช่องซ้าย เลือก `is equal to` แล้วพิมพ์ `Approve` ในช่องขวา โดยใช้ตัวพิมพ์ให้ตรง:

   ```text
   Outcome is equal to Approve
   ```

3. ในแขนง **True** (บางหน้าจอใช้ **If yes**) เพิ่ม `Update a row` ของ Excel Online (Business)
4. เลือก workbook และ `RequestsTable` เดิม
5. กำหนด **Key Column** เป็น `RequestId` และ **Key Value** เป็น Dynamic content `Response Id` จาก Forms trigger ไม่ใช่ Approval ID
6. ที่ **Advanced parameters** เลือก **Show all** แล้วใส่ `Status` เป็น `Approved` และ `Decision` เป็น `Approve` ปล่อยคอลัมน์อื่นว่าง เพราะเราต้องการอัปเดตเฉพาะสองคอลัมน์นี้
7. ในแขนง **False** (บางหน้าจอใช้ **If no**) เพิ่ม `Update a row` แบบเดียวกัน แล้วใส่ `Status` เป็น `Rejected` และ `Decision` เป็น `Reject`
8. เลือก **Save**

### Checkpoint

- Condition มี 2 เส้นทางจาก `Outcome` และทั้งสองเส้นทางค้นหาแถวด้วย `RequestId` ค่าเดียวกับ Forms response ID

> **💡 Tip:** Condition เหมือนพนักงานที่เคาน์เตอร์ อ่านผลอนุมัติแล้วส่งเอกสารไปช่องที่ถูกต้อง

---

## Practice 3: แจ้งผลและทดสอบทั้งสองเส้นทาง

**Primary target:** ยืนยันผลปลายทางทั้ง Approved และ Rejected เพื่อพิสูจน์ว่า flow อัปเดตแถวถูกต้อง

1. ต่อจาก `Update a row` ในแต่ละแขนง เพิ่ม `Send an email (V2)`
2. เลือก Dynamic content `Requester email` จาก `Get response details` เป็นผู้รับ และใช้หัวข้อ `Decision for: ` ตามด้วย Dynamic content `Task title`; ใส่ `Response Id` ใน Body เพื่อเทียบกับ Excel ได้
3. ใน **True** (บางหน้าจอใช้ **If yes**) ระบุ `Decision: Approved`
4. ใน **False** (บางหน้าจอใช้ **If no**) ระบุ `Decision: Rejected`
5. เลือก **Save**
6. ส่ง Form ครั้งที่ 1 แล้วเลือก `Approve`
7. รอ run สำเร็จและตรวจ Excel กับอีเมล
8. ส่ง Form ครั้งที่ 2 แล้วเลือก `Reject`
9. รอ run สำเร็จและตรวจ Excel กับอีเมล

### Checkpoint

- มีรายการหนึ่งเป็น `Approved` และอีกหนึ่งรายการเป็น `Rejected` โดยอัปเดตคนละ `RequestId`

---

## Summary

เราได้สร้าง workflow ที่รอผล approval แยกเส้นทาง อัปเดตแถวเดิม และแจ้งผลผู้ขอครบทั้งสองกรณี

ขั้นตอนถัดไป → [เก็บคำขอที่อนุมัติแล้วใน SharePoint](./07-archive-approved-request-in-sharepoint.md)

จากนั้น → [แจ้งผลผู้ขอผ่าน Microsoft Teams](./08-notify-requester-in-teams.md)
