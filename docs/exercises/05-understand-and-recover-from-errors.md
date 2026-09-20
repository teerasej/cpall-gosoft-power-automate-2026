# แบบฝึกหัดที่ 5: เข้าใจและรับมือข้อผิดพลาด

เราจะสร้าง flow แยกสำหรับทดลองความผิดพลาดอย่างปลอดภัย แล้วใช้ `Scope`, `Run After` และ Run history เพื่อดูว่าเกิดอะไรขึ้นและแจ้งเตือนได้อย่างไร

> **License:** ใช้ Built-in actions และ `Office 365 Outlook` Standard connector ไม่ใช้ Premium connector

## Prerequisites

- ใช้อีเมลของตัวเองเป็นผู้รับการแจ้งเตือน
- แบบฝึกหัดนี้ไม่แก้ flow หลักหรือ tracker

---

## Practice 1: สร้าง Controlled failure

**Primary target:** ทำให้ action หนึ่งล้มเหลวแบบตั้งใจ เพื่อให้มี run ที่ใช้ฝึกวิเคราะห์ได้

1. เลือก **Create** → **Instant cloud flow** แล้วใส่ชื่อ:

   ```text
   Error Handling Practice - [Your Name]
   ```

2. เลือก trigger `Manually trigger a flow` แล้วเลือก **Create**
3. เลือก **+** ใต้ trigger แล้วเพิ่ม Built-in action `Scope`
4. คลิกชื่อ action ด้านบนแผงรายละเอียด เปลี่ยนชื่อเป็น `Try` แล้วกด **Tab**
5. เลือก **+ ภายในกรอบ Try** แล้วเพิ่ม `Compose` action จาก `Data Operation` **ให้แน่ใจว่า action ที่เพิ่มอยู่ภายใน Scope**
6. คลิกช่อง **Inputs** พิมพ์ `/` → **Insert expression** (หน้าจอเดิมอาจใช้แท็บ **Expression**) แล้วใส่ใน editor:

   ```text
   int('not-a-number')
   ```

7. เลือก **Add** เพื่อแทรก expression
8. ตรวจว่า Inputs แสดง token `int(...)` ไม่ใช่ข้อความธรรมดา
9. จากนั้นเลือก **Save** → **Test** → **Manually** → **Test** → **Run flow** → **Done**
10. เปิด run ที่แสดง `Failed` แล้วขยาย `Try` และ `Compose`

### Checkpoint

- Run history แสดง action ที่ผิดพลาด พร้อม error message ที่ชี้ว่าค่าไม่สามารถแปลงเป็นจำนวนได้

---

## Practice 2: เพิ่ม Recovery path ด้วย Run After

**Primary target:** กำหนด Catch scope ให้ทำงานเมื่อ Try ล้มเหลว เพื่อส่งการแจ้งเตือนที่เข้าใจได้

1. เลือก **Edit** ที่มุมบนขวา แล้วกลับไปที่ flow designer
2. ด้านล่างของ `Try` คลิก **+**
3. แล้วเพิ่ม `Scope` ตัวที่ 2
4. แล้วเปลี่ยนชื่อของ Scope ตัวที่สองเป็น `Catch`
5. ภายใน `Catch` เพิ่ม `Send an email (V2)`
6. ส่งหาอีเมลของตัวเอง หัวข้อ
   ```text
   Practice flow failed
   ```
7. ใน Body ใส่ชื่อ flow และข้อความ
   ```text
   Open Run history and inspect the failed action.
   ```
8. คลิก `Catch` → แท็บ **Settings** → **Run after** แล้วขยาย `Try` (หน้าจอเดิมอาจใช้เมนู **Configure run after**)
9.  เลือก **Has failed** และ **Has timed out** ก่อน แล้วจึงกดยกเลิก **Is successful** โดยไม่เลือก **Is skipped**; ตรวจว่าเหลือเครื่องหมายถูกเพียงสองสถานะแรก เพื่อไม่ให้ส่งอีเมลแจ้งข้อผิดพลาดเมื่อ Try ทำงานสำเร็จ
10. เลือก **Save** และทดสอบอีกครั้ง
11. เปิด Run history แล้วตรวจว่า `Try` ล้มเหลว แต่ `Catch` ทำงานและส่งอีเมล

### Checkpoint

- เมื่อ Try ล้มเหลว Catch ทำงานตาม Run After และได้รับอีเมลแจ้งเตือน

> **💡 Tip:** Scope เหมือนถาดที่รวมหลายขั้นตอน ส่วน Run After คือกติกาว่าจะหยิบถาดถัดไปเมื่อสถานการณ์ใด

---

## Practice 3: ซ่อม flow และยืนยันการ run flow ว่าไม่เกิดปัญหาแล้ว

**Primary target:** แก้ต้นเหตุและรันซ้ำ เพื่อยืนยันว่า flow กลับมาทำงานสำเร็จโดยไม่เรียก Catch

1. เปลี่ยน expression ใน Compose เป็น:

   ```text
   int('25')
   ```

2. เลือก **Save** แล้วทดสอบใหม่
3. ตรวจว่า Compose แสดงค่า `25`
4. ตรวจว่า Catch ถูก `Skipped`

### Checkpoint

- Run ล่าสุดแสดง `Succeeded`, Compose มีค่า 25 และ Catch ไม่ส่งอีเมล

---

## Summary

เราได้อ่าน Run history, ระบุต้นเหตุ, ตั้ง recovery path และยืนยัน flow หลังแก้ไข

กิจกรรมเสริมหลังชั้นเรียน → [ออกแบบ Automation สำหรับงานของเรา](./06-automate-my-task.md)
