# แบบฝึกหัดที่ 1: ส่งการแจ้งเตือนงานครั้งแรก

เราจะเริ่มจาก flow ขนาดเล็กที่กดทำงานเองได้ แล้วส่งรายละเอียดงานเข้าอีเมล เหมือนกดกริ่งเพื่อบอกระบบว่า “เริ่มทำงานได้แล้ว”

> **License:** ใช้ `Office 365 Outlook` ซึ่งเป็น Standard connector ต้องตรวจสอบสิทธิ์ mailbox และการสร้าง cloud flow ก่อนเริ่มอบรม

## Prerequisites

- เข้า [Power Automate](https://make.powerautomate.com) และเชื่อมต่อ Outlook ได้
- ทราบอีเมลของตัวเอง

---

## Practice 1: สร้าง Instant cloud flow

**Primary target:** สร้าง manual trigger ที่รับรายละเอียดงาน เพื่อให้ flow พร้อมรับ input เมื่อผู้ใช้กด Run

1. เปิด Power Automate แล้วเลือก **Create**
2. เลือก **Instant cloud flow**
3. ตั้งชื่อ flow:

   ```text
   My First Task Notification - [Your Name]
   ```

4. เลือก trigger **Manually trigger a flow** แล้วเลือก **Create**
5. เพิ่ม Text input ชื่อ `TaskTitle`
6. เพิ่ม Text input ชื่อ `RecipientEmail`
7. เลือก **Save**

### Checkpoint

- หน้า designer แสดง trigger พร้อม input `TaskTitle` และ `RecipientEmail` ครบ 2 ค่า

---

## Practice 2: ส่งอีเมลด้วย Dynamic content

**Primary target:** ส่งค่าจาก trigger เข้าอีเมล เพื่อให้ผู้รับเห็นชื่องานที่กรอกตอน Run

1. ใต้ trigger เลือก **Add an action**
2. ค้นหา `Send an email (V2)` จาก `Office 365 Outlook`
3. กำหนดค่า:

   - **To:** เลือก Dynamic content `RecipientEmail`
   - **Subject:** พิมพ์ `New task: ` แล้วต่อด้วย Dynamic content `TaskTitle`
   - **Body:**

     ```text
     A new task is ready for review.
     Task: [TaskTitle]
     Created from Power Automate training.
     ```

     แทน `[TaskTitle]` ด้วย Dynamic content `TaskTitle`

4. เลือก **Save** แล้วเลือก **Test** > **Manually**
5. ใส่ชื่องาน `Prepare weekly team update` และอีเมลของตัวเอง
6. เลือก **Run flow** แล้วตรวจ Inbox

### Checkpoint

- Run history แสดง `Succeeded` และได้รับอีเมลที่มีชื่องานตรงกับ input

> **💡 Tip:** Dynamic content เหมือนช่องว่างในแบบฟอร์มจดหมาย ระบบจะนำค่าจริงมาใส่ให้เมื่อ flow ทำงาน

> **⚠️ Note:** หากยังไม่ได้รับอีเมล ให้ตรวจ Junk Email และเปิด action ใน Run history เพื่อดูค่า `Inputs` และ `Outputs`

---

## Summary

เราได้สร้าง trigger, action และ connector แรก พร้อมทดสอบ input และ Dynamic content จากการทำงานจริง

ขั้นตอนถัดไป → [รับและบันทึกคำของาน](../02-collect-and-record-requests/README.md)
