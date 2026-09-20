# แบบฝึกหัดที่ 2: รับและบันทึกคำของาน

เราจะสร้างแบบฟอร์มรับคำของาน แล้วให้ Power Automate บันทึกคำขอลงสมุดบันทึก Excel ของเราโดยอัตโนมัติ พร้อมส่งอีเมลยืนยันกลับไปหาผู้ขอ

> **License:** ใช้ `Microsoft Forms`, `Excel Online (Business)` และ `Office 365 Outlook` ซึ่งเป็น Standard connectors ต้องตรวจสอบสิทธิ์ก่อนเริ่มอบรม

## Prerequisites

- อัปโหลด [task-request-tracker.xlsx](/downloads/task-request-tracker.xlsx?v=20260920-1) ไปยัง `OneDrive for Business/PowerAutomateTraining/`
- เปิด workbook แล้วตรวจว่ามี worksheet `Requests` และ table ชื่อ `RequestsTable`
- ใช้ Form หนึ่งชุดกับ workbook ส่วนตัวหนึ่งไฟล์ เพื่อให้ `Response Id` ไม่ชนกับข้อมูลจาก Form อื่น
- ปิด workbook ก่อนทดสอบ flow และส่งคำขอทีละรายการ รอ run จบก่อนส่งรายการต่อไป

---

## Practice 1: สร้างแบบฟอร์มรับคำของาน

**Primary target:** สร้าง Microsoft Form ที่เก็บข้อมูลตาม schema ของ tracker เพื่อให้ flow นำคำตอบไปจับคู่กับ Excel ได้

1. เปิด `Microsoft Forms` แล้วเลือก **New Form** หากพบแผง **Draft with Copilot** ให้เลือก **Close** เพื่อสร้างคำถามด้วยตัวเอง
2. ตั้งชื่อ Form:

   ```text
   Task Request - [Your Name]
   ```

3. เลือก **Quick start with** เพื่อเลือกชนิดคำถามแรก หลังจากนั้นใช้ **Add new question** เพิ่มคำถามตามตารางนี้ และตรวจให้ทุกข้อเปิด **Required** สำหรับ Description ให้เปิด **Long answer** ส่วน Category ใช้ **Add option** จนครบ 4 ตัวเลือก และไม่เปิด **Multiple answers**

   | Question | Type | Options |
   |---|---|---|
   | Task title | Text | Short answer |
   | Description | Text | Long answer |
   | Requester email | Text | Short answer |
   | Category | Choice | Operations, Finance, HR, IT Support |
   | Needed by | Date | — |

4. เลือก **Preview** แล้วส่งคำขอทดสอบ 1 รายการจาก [ตัวอย่างคำของาน](../resources/sample-requests.md)

### Checkpoint

- Form เก็บคำตอบได้ครบ 5 ค่า และมี response ทดสอบอย่างน้อย 1 รายการ

---

## Practice 2: บันทึกคำขอลง Excel

**Primary target:** เชื่อม Forms กับ Excel table เพื่อให้ทุก response ใหม่กลายเป็นแถวที่มีสถานะ `Pending`

1. ใน Power Automate เลือก **Create** > **Automated cloud flow**
2. ตั้งชื่อ flow:

   ```text
   Record Task Request - [Your Name]
   ```

3. เลือก trigger `When a new response is submitted` ของ Microsoft Forms แล้วเลือก **Create**
4. ใน **Form Id** เลือก Form ที่สร้างใน Practice 1
5. เพิ่ม action `Get response details` แล้วเลือก Form เดิม
6. ใน **Response Id** เลือก Dynamic content `Response Id` จาก trigger
7. เพิ่ม action `Add a row into a table` ของ Excel Online (Business)
8. เลือกตำแหน่งตามนี้:

   - **Location:** `OneDrive for Business`
   - **Document Library:** เลือกคลังเอกสารส่วนตัวที่มี workbook ชื่ออาจต่างตามภาษา เช่น `เอกสาร` ในบัญชีที่ทดสอบ ให้ยืนยันด้วยการเปิด **File** แล้วพบโฟลเดอร์ของเรา
   - **File:** เลือกไอคอนโฟลเดอร์ (**Open folder**) แล้วใช้ลูกศรเข้า `PowerAutomateTraining` และเลือก `task-request-tracker.xlsx` ไม่พิมพ์ path โดยเดา
   - **Table:** `RequestsTable`

9. หลังเลือก Table แล้วรอให้ schema โหลด จากนั้นเลือก **Advanced parameters** > **Show all** เพื่อแสดงคอลัมน์ ตรวจว่า token ปรากฏในช่องก่อนเปลี่ยนไปช่องถัดไป แล้วจับคู่ค่าลงแต่ละคอลัมน์ โดยเลือก `Response Id` จาก trigger และเลือกคำตอบของ Form จาก `Get response details` ผ่าน Dynamic content; พิมพ์เฉพาะ `Pending` เป็นข้อความคงที่:

   | Excel column | Value |
   |---|---|
   | RequestId | `Response Id` |
   | Title | `Task title` |
   | Description | `Description` |
   | RequesterEmail | `Requester email` |
   | Category | `Category` |
   | NeededBy | `Needed by` |
   | Status | `Pending` |
   | Decision | เว้นว่าง |

10. เลือก **Save**
11. ส่ง Form ใหม่ 1 ครั้งหลังบันทึก flow แล้วรอให้ flow ทำงานเสร็จ คำตอบที่ส่งก่อนสร้าง flow ใน Practice 1 ไม่ใช่รายการทดสอบนี้
12. เปิด workbook หลัง run สำเร็จ และตรวจแถวใหม่

### Checkpoint

- มีแถวใหม่ที่ `RequestId` ตรงกับ Forms response ID และ `Status` เป็น `Pending`

> **⚠️ Note:** หากไม่พบไฟล์หรือ table ให้ตรวจว่าไฟล์อยู่ใน OneDrive ของบัญชีเดียวกับ connection และ table ชื่อ `RequestsTable`

---

## Practice 3: ส่งอีเมลยืนยันผู้ขอ

**Primary target:** เพิ่มอีเมลยืนยันหลังบันทึกสำเร็จ เพื่อให้ผู้ขอทราบว่าระบบรับคำขอแล้ว

1. กลับไปแก้ flow `Record Task Request - [Your Name]`
2. หลัง `Add a row into a table` เพิ่ม `Send an email (V2)`
3. กำหนดค่า:

   - **To:** `Requester email`
   - **Subject:** `Request received: ` + `Task title`
   - **Body:** แสดง `Response Id`, `Task title`, `Needed by` และข้อความ `Status: Pending`

4. เลือก **Save** แล้วส่ง Form ใหม่อีก 1 ครั้ง
5. ตรวจ Excel ก่อน แล้วจึงตรวจอีเมลยืนยัน

### Checkpoint

- คำขอหนึ่งรายการสร้าง Excel row หนึ่งแถว และส่งอีเมลยืนยันหนึ่งฉบับ

> **💡 Tip:** ลำดับ action เหมือนลำดับในใบรับงาน เราบันทึกข้อมูลให้สำเร็จก่อนจึงส่งใบยืนยัน

---

## Summary

เราได้สร้าง Automated cloud flow ที่รับ response, ดึงรายละเอียด, บันทึก Excel และยืนยันผู้ขอแบบ end-to-end

ขั้นตอนถัดไป → [ขออนุมัติและอัปเดตคำขอ](./03-ask-for-a-decision.md)
