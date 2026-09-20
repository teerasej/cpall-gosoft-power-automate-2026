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
5. เลือกการ์ด **Manually trigger a flow** > **Parameters** > **Add an input** > **Text** แล้วเปลี่ยนชื่อช่องด้านซ้ายจาก `Text` เป็น:

   ```text
   TaskTitle
   ```

6. เลือก **Add an input** > **Text** อีกครั้ง แล้วเปลี่ยนชื่อเป็น:

   ```text
   RecipientEmail
   ```
7. ตรวจว่ามี input ครบทั้งสองค่า แล้วทำ Practice 2 ต่อใน designer เดิม โดยยังไม่ต้องเลือก **Save** เพราะ flow ต้องมี trigger และ action อย่างน้อยหนึ่งรายการก่อนบันทึก

### Checkpoint

- หน้า designer แสดง trigger พร้อม input `TaskTitle` และ `RecipientEmail` ครบ 2 ค่า

---

## Practice 2: ส่งอีเมลด้วย Dynamic content

**Primary target:** ส่งค่าจาก trigger เข้าอีเมล เพื่อให้ผู้รับเห็นชื่องานที่กรอกตอน Run

1. เลือกปุ่ม **+** ใต้ trigger เพื่อเปิด **Add an action**
2. ค้นหา:

   ```text
   Send an email (V2)
   ```

   เลือกแท็บ **Standard** แล้วเลือก action ใต้ `Office 365 Outlook` ระวังชื่อ action ที่เหมือนกันใต้ `Outlook.com`
3. กำหนดค่า:

   - **To:** เลือกปุ่มรูปเฟือง **Settings** ข้างชื่อช่อง > **Use dynamic content** แล้วคลิกในช่อง **To** พิมพ์ `/` > **Insert dynamic content** ค้นหา `RecipientEmail` และเลือกชื่อนี้จากรายการ **Manually trigger a flow**
   - **Subject:** พิมพ์ `New task: ` แล้วต่อด้วย Dynamic content `TaskTitle`
   - **Body:**

     ```text
     A new task is ready for review.
     Task: [TaskTitle]
     Created from Power Automate training.
     ```

     แทน `[TaskTitle]` ด้วย Dynamic content `TaskTitle` โดยคลิกตำแหน่งที่ต้องการ พิมพ์ `/` > **Insert dynamic content** แล้วค้นหา `TaskTitle` ใช้วิธีเดียวกันใน **Subject** อย่าพิมพ์ชื่อ input แทนการเลือก token

4. เลือก **Save**
5. กดปุ่ม **Publish** รอข้อความ **Your flow is ready to go. We recommend you test it.**
6. เลือก **Test** > **Manually** > **Test** หากมีหน้าตรวจ connection ให้รอเครื่องหมายถูกที่ `Office 365 Outlook` แล้วเลือก **Continue**
7. กรอกค่าทดสอบ:

    - **TaskTitle**

       ```text
       Prepare weekly team update
       ```

    - **RecipientEmail:** อีเมลของตัวเอง
8. เลือก **Run flow** 
9. รอสักครู่แล้วค่อยไปที่ Inbox เพื่อตรวจการรับอีเมลล์

### Checkpoint

- Run history แสดง `Succeeded` และได้รับอีเมลที่มีชื่องานตรงกับ input

> **💡 Tip:** Dynamic content เหมือนช่องว่างในแบบฟอร์มจดหมาย ระบบจะนำค่าจริงมาใส่ให้เมื่อ flow ทำงาน

> **⚠️ Note:** หากยังไม่ได้รับอีเมล ให้ตรวจ Junk Email และเปิด action ใน Run history เพื่อดูค่า `Inputs` และ `Outputs`

---

## Summary

เราได้สร้าง trigger, action และ connector แรก พร้อมทดสอบ input และ Dynamic content จากการทำงานจริง

ขั้นตอนถัดไป → [รับและบันทึกคำของาน](./02-collect-and-record-requests.md)
