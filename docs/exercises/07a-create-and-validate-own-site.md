---
prev:
  text: "3 · ขออนุมัติและอัปเดต"
  link: /exercises/03-ask-for-a-decision
next:
  text: "ทำ SharePoint archive ต่อ"
  link: /exercises/07-archive-approved-request-in-sharepoint#practice-1-สร้างไฟล์เมื่ออนุมัติ
---

# Route A: สร้างและตรวจ SharePoint site ของตนเอง

> **ใช้หน้านี้เมื่อ:** วิทยากรยืนยันว่าบัญชีผู้เรียนได้รับอนุญาตให้สร้าง SharePoint site หากไม่เห็นคำสั่งสร้าง site ให้หยุดและแจ้งวิทยากร ไม่ต้องเปิด Route B เว้นแต่วิทยากรมอบ site ให้

เราจะสร้าง private Team site สำหรับข้อมูลฝึกเท่านั้น แล้วพิสูจน์ว่า document library พร้อมให้ Power Automate เขียนไฟล์ได้

> **💡 Analogy:** ก่อนนำเอกสารเข้าตู้ เราต้องประกอบตู้ ติดป้ายถาด และลองเปิดปิดลิ้นชักให้เรียบร้อย

## Practice 1: สร้าง private Team site

**Primary target:** สร้าง Team site ส่วนตัวสำหรับการฝึกและบันทึก Site Address ที่ถูกต้อง

1. เปิด Microsoft 365 **App launcher > SharePoint**
2. ที่หน้า SharePoint เลือก **Build > Site** หรือ **+ Create site** ตามหน้าจอขององค์กร
3. เลือก **Team site > Standard team > Use template**
4. ตั้ง **Site name** เป็นชื่อเฉพาะ เช่น:

   ```text
   PA-Training-[เลขที่ผู้เรียน 2 หลัก]-[ชื่อภาษาอังกฤษ]
   ```

5. ใส่คำอธิบายว่าเป็น site สำหรับข้อมูลสมมติในการฝึก ตรวจชื่อและ URL ที่ระบบสร้างว่าไม่ชนกับ site อื่น
6. เลือก **Privacy settings: Private - only members can access this site**
7. เลือกภาษาเริ่มต้นตามที่วิทยากรกำหนดก่อนสร้าง เพราะภาษาหลักเปลี่ยนภายหลังไม่ได้ ใน workshop นี้ให้เลือก `English` เมื่อองค์กรอนุญาต
8. เลือก **Create site** รอจน provisioning เสร็จ แล้วเลือก **Go to site** โดยไม่เพิ่มบุคคลที่ไม่เกี่ยวข้อง
9. คัดลอก URL เฉพาะหน้า site เช่น `https://contoso.sharepoint.com/sites/PA-Training-07-Narin` ลงใน Readiness record

### Checkpoint

- เปิด site ที่สร้างได้และเห็นว่าเป็น private Team site
- Readiness record มี `Site Address` ที่เปิดได้ด้วยบัญชีผู้เรียน

> **⚠️ Note:** หากไม่มี **Build > Site** หรือ **+ Create site** แสดงว่า self-service site creation อาจถูกปิดโดยองค์กร ให้หยุด Route A และแจ้งวิทยากร

---

## Practice 2: ตรวจ document library และสิทธิ์เขียน

**Primary target:** พิสูจน์ว่า library และโฟลเดอร์พร้อมให้บัญชีผู้เรียนสร้าง เปิด และลบไฟล์

1. เปิด default document library ชื่อ `Documents` หรือชื่อที่ site แสดง
2. เลือก **Create or upload > Folder** หรือ **New > Folder**
3. ตั้งชื่อโฟลเดอร์เป็น:

   ```text
   PA-[เลขที่ผู้เรียน 2 หลัก]-[ชื่อภาษาอังกฤษ]
   ```

4. ดาวน์โหลด [permission-check.txt](/downloads/permission-check.txt)
5. เปิดโฟลเดอร์ของตน แล้วเลือก **Create or upload > Files upload** หรือ **Upload > Files** เพื่ออัปโหลดไฟล์
6. เปิดไฟล์และตรวจว่าเห็นข้อความ `Training permission check.` กับ `Synthetic practice file.`
7. ปิด preview เลือกไฟล์ แล้วเลือก **Delete** เพื่อส่งไป **Recycle Bin** เก็บโฟลเดอร์ไว้และไม่ต้องล้าง Recycle Bin
8. กรอก Readiness record:

   ```text
   Site Address: [URL ของ site]
   Document library: [ชื่อ library ที่เห็น]
   Learner folder: [ชื่อโฟลเดอร์]
   Permission check: Upload / Open / Delete passed
   ```

### Checkpoint

- มีโฟลเดอร์ส่วนตัวหนึ่งโฟลเดอร์
- Upload, Open และ Delete ผ่านด้วยบัญชีเดียวกับที่จะใช้ SharePoint connector

## Cleanup หลังจบชั้นเรียน

กิจกรรมลบ site แยกจาก workshop และไม่ต้องทำก่อนเข้าสู่ Teams

1. ตรวจชื่อกับ URL ให้ตรงกับ private practice site ที่สร้างใน Route A
2. ยืนยันว่าไม่มีเนื้อหาที่ต้องเก็บและไม่มีบุคคลอื่นกำลังใช้งาน
3. ลบ site เฉพาะเมื่อ policy ขององค์กรอนุญาตให้เจ้าของ site ทำได้ หากไม่ได้รับอนุญาต ให้ส่งชื่อกับ URL ให้ IT ดำเนินการ
4. อย่าลบ root site, site ที่ IT เตรียมให้ หรือ site อื่นที่ไม่ได้สร้างใน Route A

> **⚠️ Important:** Team site แบบ group-connected เชื่อมกับ Microsoft 365 group การลบ site อาจลบ group และทรัพยากรที่เกี่ยวข้อง เช่น mailbox, calendar หรือ Teams channels ด้วย จึงต้องตรวจชื่อและได้รับอนุญาตก่อนเสมอ

## Microsoft Learn references

- [Create a team site in SharePoint](https://support.microsoft.com/office/create-a-team-site-in-sharepoint-ef10c1e7-15f3-42a3-98aa-b5972711777d)
- [Manage site creation in SharePoint](https://learn.microsoft.com/sharepoint/manage-site-creation)
- [Delete a site](https://learn.microsoft.com/sharepoint/delete-site-collection)

พร้อมแล้ว → [ไปยังส่วนสร้าง SharePoint archive](./07-archive-approved-request-in-sharepoint.md#practice-1-สร้างไฟล์เมื่ออนุมัติ)

หาก readiness ไม่ผ่าน → [ทบทวนเส้นทาง Approval](./07-core-approval-reinforcement.md)
