# ตัวอย่างคำของานสำหรับการฝึก

ข้อมูลทั้งหมดเป็นข้อมูลสมมติ ผู้เรียนสามารถใช้ทดสอบ Form, approval และผลปลายทาง โดยไม่ต้องนำข้อมูลจริงขององค์กรมาใช้

| Sample | Task title | Description | Requester email | Category | Needed by | Approvals result | Expected SharePoint result | Expected Teams result |
|---|---|---|---|---|---|---|---|---|
| A | Prepare weekly team update | Compile highlights for the Friday team update | ใช้อีเมลฝึกของตนเอง | Operations | วันทำการถัดไป | Approve | สร้างไฟล์ `Request-[Response Id].txt` | ได้ข้อความ Approved |
| B | Review travel expense note | Check whether the explanation is complete | ใช้อีเมลฝึกของตนเอง | Finance | อีก 3 วัน | Reject | ไม่สร้างไฟล์ | ได้ข้อความ Rejected |
| C | Confirm onboarding checklist | Review the new starter checklist | ใช้อีเมลฝึกของตนเอง | HR | สัปดาห์หน้า | Approve | สร้างไฟล์ `Request-[Response Id].txt` | ได้ข้อความ Approved |
| D | Reset training account | Verify the practice account can sign in | ใช้อีเมลฝึกของตนเอง | IT Support | วันนี้ | Reject | ไม่สร้างไฟล์ | ได้ข้อความ Rejected |

> **⚠️ Note:** ห้ามใส่ข้อมูลลูกค้า รหัสผ่าน ข้อมูลส่วนบุคคล หรือเอกสารลับลงในแบบฝึกหัด
