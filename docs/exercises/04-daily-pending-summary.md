# แบบฝึกหัดเสริม: ส่งสรุปงานค้างประจำวัน

เราจะสร้าง Scheduled cloud flow ที่เปิดสมุดบันทึก Excel ตามเวลา คัดเฉพาะรายการ `Pending` แล้วส่งสรุปเข้าอีเมล

> **License:** ใช้ `Excel Online (Business)` และ `Office 365 Outlook` ซึ่งเป็น Standard connectors รวมถึง Built-in actions `Filter array`, `Condition`, `Variable` และ `Apply to each`

## Prerequisites

- Workbook มีข้อมูลตัวอย่างหรือข้อมูลทดสอบอย่างน้อย 3 แถว
- มีทั้งกรณี `Pending`, `Approved` และ `Rejected`

---

## Practice 1: อ่านและคัดรายการ Pending

**Primary target:** ใช้ Scheduled trigger และ `Filter array` เพื่อให้เหลือเฉพาะรายการที่ต้องติดตาม

1. เลือก **Create** > **Scheduled cloud flow**
2. ตั้งชื่อ:

   ```text
   Daily Pending Task Summary - [Your Name]
   ```

3. ตั้ง Repeat every `1 Day` และเลือกเวลาฝึกตามที่วิทยากรกำหนด
4. เพิ่ม `List rows present in a table` แล้วเลือก workbook กับ `RequestsTable`
5. เพิ่ม `Filter array`
6. ใน **From** เลือกค่า `value` จาก `List rows present in a table`
7. ตั้งเงื่อนไข `Status` is equal to `Pending`
8. เพิ่ม `Initialize variable` ก่อน action `Condition`
9. ตั้งชื่อ `PendingSummary`, Type `String`, Value เว้นว่าง
10. เพิ่ม `Condition` แล้วใส่ expression:

    ```text
    length(body('Filter_array'))
    ```

    เลือก `is greater than` และใส่ `0`

11. เลือก **Save**

### Checkpoint

- Filter array รับรายการจาก Excel และ Condition ตรวจจำนวนผลลัพธ์ที่เหลืออยู่

> **⚠️ Note:** หากชื่อ action ถูกเปลี่ยน ระบบจะปรับชื่อใน expression ให้ต่างจากตัวอย่าง ให้เลือก action ผ่าน Dynamic content หรือ Expression editor ของ flow ปัจจุบัน

---

## Practice 2: สร้างข้อความสรุปด้วย Apply to each

**Primary target:** วนอ่านรายการ Pending และประกอบข้อความสรุปหนึ่งฉบับสำหรับผู้รับ

1. ในแขนง **If yes** เพิ่ม `Apply to each`
2. ใน **Select an output** เลือก Body ของ `Filter array`
3. ภายใน loop เพิ่ม `Append to string variable`
4. เลือกตัวแปร `PendingSummary`
5. สร้างข้อความหนึ่งบรรทัดต่อรายการ:

   ```text
   • [RequestId] — [Title] — Needed by: [NeededBy]
   ```

   แทนค่าในวงเล็บด้วย Dynamic content ของรายการปัจจุบัน และขึ้นบรรทัดใหม่ท้ายข้อความ

6. หลัง `Apply to each` เพิ่ม `Send an email (V2)`
7. ส่งหาอีเมลของตัวเอง หัวข้อ `Daily pending task summary`
8. ใน Body ใส่จำนวนรายการด้วย expression `length(body('Filter_array'))` และตัวแปร `PendingSummary`
9. ในแขนง **If no** เพิ่ม `Send an email (V2)` หัวข้อเดียวกัน และ Body `No pending tasks today.`
10. เลือก **Save**

### Checkpoint

- แขนง If yes ส่งรายชื่อ Pending และแขนง If no ส่งข้อความว่าไม่มีงานค้าง

---

## Practice 3: ทดสอบ 0, 1 และหลายรายการ

**Primary target:** ทดสอบข้อมูลขอบเขตสามแบบ เพื่อยืนยันว่า summary ไม่ตกหล่นและไม่ส่งผลลวง

1. ใช้ข้อมูลตัวอย่างให้มี Pending หลายรายการ แล้วเลือก **Test** > **Manually**
2. ตรวจจำนวนและ RequestId ในอีเมล
3. เปลี่ยนให้เหลือ Pending หนึ่งรายการ ทดสอบใหม่ และตรวจว่าอีเมลมีหนึ่งบรรทัด
4. เปลี่ยน Pending ทั้งหมดเป็นสถานะอื่น ทดสอบใหม่ และตรวจข้อความ `No pending tasks today.`
5. คืนสถานะตัวอย่างตามเดิม
6. เลือก **Turn off** สำหรับ scheduled flow หลังจบการฝึก

### Checkpoint

- ได้ผลถูกต้องทั้ง 0, 1 และหลาย Pending records และ flow ถูกปิดหลังทดสอบ

> **💡 Optional extension:** ทดลองใช้ `Create HTML table` กับผลจาก `Filter array` เพื่อให้อีเมลแสดงตาราง แทนการต่อข้อความด้วยตัวแปร

---

## Summary

เราได้สร้าง flow ตามเวลา อ่านหลายแถว คัดข้อมูล วนทำงาน และจัดการกรณีไม่มีรายการอย่างชัดเจน

กลับไป → [เส้นทางการฝึก Day 1](../index.md)
