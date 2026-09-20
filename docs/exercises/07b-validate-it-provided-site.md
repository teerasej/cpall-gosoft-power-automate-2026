---
prev:
  text: "3 · ขออนุมัติและอัปเดต"
  link: /exercises/03-ask-for-a-decision
next:
  text: "ทำ SharePoint archive ต่อ"
  link: /exercises/07-archive-approved-request-in-sharepoint#practice-1-สร้างไฟล์เมื่ออนุมัติ
---

# Route B: ตรวจและใช้ SharePoint site ที่ IT เตรียมให้

> **ใช้หน้านี้เมื่อ:** วิทยากรหรือ IT ส่ง Site Address และชื่อ document library หรือโฟลเดอร์สำหรับการฝึกแล้ว ไม่ต้องสร้าง site ใหม่และไม่ต้องเปิด Route A

เราจะตรวจว่าบัญชีผู้เรียนเปิดพื้นที่ที่กำหนดและสร้างไฟล์ได้จริง ก่อนนำค่าที่ผ่านการตรวจไปใช้ใน Power Automate


## Practice 1: ตรวจบัญชีและพื้นที่ที่ได้รับ

**Primary target:** ยืนยันว่าเปิด site และ document library ที่ IT กำหนดด้วยบัญชีผู้เรียนที่ถูกต้อง

1. เปิด Site Address จากวิทยากรหรือ IT โดยไม่คัดลอก URL จากผู้เรียนคนอื่น
2. ตรวจรูปโปรไฟล์หรือบัญชีใน browser ว่าเป็นบัญชีเดียวกับที่จะใช้สร้าง SharePoint connection ใน Power Automate
3. เปิด document library ที่วิทยากรระบุ ชื่ออาจเป็น `Documents`, `Shared Documents` หรือชื่อที่องค์กรตั้งไว้
4. หาก IT เตรียมโฟลเดอร์รายบุคคล ให้เปิดเฉพาะโฟลเดอร์ของตน หากยังไม่มี ให้สร้างโฟลเดอร์ตามรูปแบบ:

   ```text
   PA-[เลขที่ผู้เรียน 2 หลัก]-[ชื่อภาษาอังกฤษ]
   ```

5. หากเปิด site หรือสร้างโฟลเดอร์ไม่ได้ ให้หยุดและแจ้งวิทยากร ไม่ต้องขอใช้ connection ของคนอื่น

### Checkpoint

- เปิด site, library และโฟลเดอร์ที่ได้รับมอบหมายได้ด้วยบัญชีผู้เรียน

---

## Practice 2: พิสูจน์ permission ในการสร้างและบันทึกไฟล์

**Primary target:** พิสูจน์ว่าบัญชีผู้เรียนสร้าง เปิด และลบไฟล์ในโฟลเดอร์ที่ได้รับมอบหมายได้

1. ดาวน์โหลด [permission-check.txt](/downloads/permission-check.txt)
2. เปิดโฟลเดอร์ของตน แล้วเลือก **Create or upload > Files upload** หรือ **Upload > Files** เพื่ออัปโหลดไฟล์
3. เปิดไฟล์และตรวจว่าเห็นข้อความ `Training permission check.` กับ `Synthetic practice file.`
4. ปิด preview เลือกไฟล์ แล้วเลือก **Delete** เพื่อส่งไป **Recycle Bin** เก็บโฟลเดอร์ไว้และไม่ต้องล้าง Recycle Bin
5. กรอก Readiness record:

   ```text
   Site Address: [URL ที่ IT ให้]
   Document library: [ชื่อ library ที่ยืนยันแล้ว]
   Learner folder: [ชื่อโฟลเดอร์ของผู้เรียน]
   Permission check: Upload / Open / Delete passed
   ```

### Checkpoint

- Upload, Open และ Delete ผ่านในโฟลเดอร์ของผู้เรียน
- Readiness record ครบทั้งสี่บรรทัด

> **⚠️ Important:** ห้ามลบ site, document library หรือโฟลเดอร์ของผู้อื่น Site นี้เป็นทรัพยากรที่ IT จัดให้และไม่อยู่ในขั้นตอน Cleanup ของผู้เรียน

## Microsoft Learn references

- [Sharing and permissions in the SharePoint modern experience](https://learn.microsoft.com/sharepoint/modern-experience-sharing-permissions)
- [SharePoint connector](https://learn.microsoft.com/en-us/connectors/sharepointonline/)

พร้อมแล้ว → [ไปยังส่วนสร้าง SharePoint archive](./07-archive-approved-request-in-sharepoint.md#practice-1-สร้างไฟล์เมื่ออนุมัติ)

หาก readiness ไม่ผ่าน → [ทบทวนเส้นทาง Approval](./07-core-approval-reinforcement.md)
