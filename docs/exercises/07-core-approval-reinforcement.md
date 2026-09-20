---
prev:
  text: "3 · ขออนุมัติและอัปเดต"
  link: /exercises/03-ask-for-a-decision
next:
  text: "8 · แจ้งผลผ่าน Teams"
  link: /exercises/08-notify-requester-in-teams
---

# กิจกรรมทางเลือก: ทบทวนและพิสูจน์เส้นทาง Approve/Reject

> **Instructor-selected:** ทำหน้านี้เมื่อวิทยากรไม่ใช้กิจกรรม SharePoint หรือเมื่อ SharePoint readiness ไม่ผ่าน ผู้เรียนไม่ต้องเปิดหรืออ่าน Route A และ Route B

เราจะใช้เวลาเสริมความมั่นใจใน workflow หลัก โดยพิสูจน์ว่าคำขอ Approved และ Rejected ใช้ `Response Id` ที่ถูกต้องตั้งแต่ Approval ไปถึง Excel และอีเมล

## Practice 1: พิสูจน์เส้นทาง Approved

**Primary target:** ยืนยันว่าคำขอ Approved หนึ่งรายการอัปเดตแถวที่ตรงกันและส่งอีเมลผลที่ตรวจสอบย้อนกลับได้

1. เปิด flow `Record Task Request - [Your Name]` และตรวจว่า Save แล้ว
2. ส่ง Form ใหม่หนึ่งครั้งด้วยข้อมูลสมมติ และจด `Response Id`
3. เปิด approval ตรวจ `Request ID` แล้วเลือก `Approve`
4. รอ run เป็น `Succeeded`
5. เปิด `RequestsTable` และหาแถวด้วย `RequestId` เดียวกัน ตรวจ `Status: Approved` กับ `Decision: Approve`
6. เปิดอีเมลแจ้งผลและเทียบ `Response Id` กับแถวใน Excel

### Checkpoint

- Approval, Excel และอีเมลอ้างถึง `Response Id` เดียวกัน และผลเป็น Approved

---

## Practice 2: พิสูจน์เส้นทาง Rejected

**Primary target:** ยืนยันว่าคำขอ Rejected อีกหนึ่งรายการอัปเดตคนละแถวและส่งผลที่ถูกต้อง

1. ส่ง Form ใหม่อีกหนึ่งครั้งและจด `Response Id` ใหม่
2. เปิด approval ตรวจ `Request ID` แล้วเลือก `Reject`
3. รอ run เป็น `Succeeded`
4. เปิด `RequestsTable` และหาแถวด้วย `RequestId` ใหม่ ตรวจ `Status: Rejected` กับ `Decision: Reject`
5. เปิดอีเมลแจ้งผลและเทียบ `Response Id` กับแถวใน Excel
6. หากค่าไม่ตรง ให้ตรวจ Dynamic content, **Key Column: RequestId** และ **Key Value: Response Id** แล้วส่ง Form ใหม่เพื่อทดสอบหลังแก้ไข

### Checkpoint

- Approved และ Rejected อยู่คนละแถว และแต่ละแถวตรงกับ Approval กับอีเมลของตน

## Summary

เราได้พิสูจน์เส้นทางหลักโดยไม่ต้องใช้ SharePoint พร้อมต่อ Teams จาก flow ของแบบฝึกหัดที่ 3 ได้ทันที

เข้าสู่เส้นทางหลัก → [แจ้งผลผ่าน Microsoft Teams](./08-notify-requester-in-teams.md)

กลับไป → [เส้นทางการฝึก Day 1](../index.md)
