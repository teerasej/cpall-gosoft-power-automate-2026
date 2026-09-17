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
   - **Assigned to:** อีเมลผู้อนุมัติสำหรับการฝึก
   - **Details:** แสดง `Description`, `Category`, `Needed by`, `Requester email` และ `Response Id`

4. เลือก **Save**
5. ส่ง Form ใหม่ 1 ครั้ง แล้วเปิด approval ที่ส่งถึงผู้อนุมัติ

### Checkpoint

- เห็น approval ที่มีปุ่ม `Approve` และ `Reject` และ flow รออยู่ที่ action นี้

> **💡 Comparison:** `Send email with options` เหมาะกับคำตอบทางอีเมลแบบเบา ส่วน `Start and wait for an approval` ให้ output และประวัติสำหรับกระบวนการอนุมัติโดยตรง วันนี้เราใช้แบบหลังเป็นเส้นทางหลัก

---

## Practice 2: แยกเส้นทางด้วย Condition

**Primary target:** ตรวจค่า `Outcome` เพื่อให้ flow เลือกเส้นทาง Approved หรือ Rejected และอัปเดต `RequestId` ที่ถูกต้อง

1. หลัง `Start and wait for an approval` เพิ่ม Built-in action `Condition`
2. กำหนดเงื่อนไข:

   ```text
   Outcome is equal to Approve
   ```

3. ในแขนง **If yes** เพิ่ม `Update a row` ของ Excel Online (Business)
4. เลือก workbook และ `RequestsTable` เดิม
5. กำหนด **Key Column** เป็น `RequestId` และ **Key Value** เป็น Dynamic content `Response Id`
6. ใส่ `Status` เป็น `Approved` และ `Decision` เป็น `Approve`
7. ในแขนง **If no** เพิ่ม `Update a row` แบบเดียวกัน แล้วใส่ `Status` เป็น `Rejected` และ `Decision` เป็น `Reject`
8. เลือก **Save**

### Checkpoint

- Condition มี 2 เส้นทางจาก `Outcome` และทั้งสองเส้นทางค้นหาแถวด้วย `RequestId` ค่าเดียวกับ Forms response ID

> **💡 Tip:** Condition เหมือนพนักงานที่เคาน์เตอร์ อ่านผลอนุมัติแล้วส่งเอกสารไปช่องที่ถูกต้อง

---

## Practice 3: แจ้งผลและทดสอบทั้งสองเส้นทาง

**Primary target:** ยืนยันผลปลายทางทั้ง Approved และ Rejected เพื่อพิสูจน์ว่า flow อัปเดตแถวถูกต้อง

1. ต่อจาก `Update a row` ในแต่ละแขนง เพิ่ม `Send an email (V2)`
2. ส่งหา `Requester email` และใช้หัวข้อ `Decision for: ` + `Task title`
3. ใน **If yes** ระบุ `Decision: Approved`
4. ใน **If no** ระบุ `Decision: Rejected`
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
