# แบบฝึกหัดเสริมที่ 8: แจ้งผลผู้ขอผ่าน Microsoft Teams

เราจะต่อยอด flow จากแบบฝึกหัดที่ 3 ให้ส่งข้อความตรงถึงผู้ขอผ่าน `Microsoft Teams` หลังจากทราบผล Approve หรือ Reject โดยไม่ต้องสร้าง Team หรือ channel สำหรับห้องเรียน

> **License:** ใช้ Microsoft Teams connector ซึ่งเป็น Standard connector ใน Power Automate ไม่ใช้ Premium connector

> **สถานะการตรวจสอบ:** ขั้นตอนนี้ยังไม่ได้ rehearsal ใน training tenant — `ต้องตรวจสอบก่อนเริ่มอบรม` และต้องยืนยันว่า Teams `Workflows` app ถูกตั้งเป็น Allow

## Prerequisites

- Flow `Record Task Request - [Your Name]` จาก [แบบฝึกหัดที่ 3](../03-ask-for-a-decision/README.md) ทำงานครบทั้ง Approved และ Rejected
- ผู้เรียนเข้า Microsoft Teams ด้วยบัญชีเดียวกับที่ใช้สร้าง flow ได้
- ใช้อีเมลของตนเองในช่อง `RequesterEmail` ระหว่างทดสอบ
- Client IT ยืนยันว่า Teams `Workflows` app ใช้งานได้
- เส้นทาง `Flow bot` ต้องทดสอบใน commercial Microsoft 365 tenant ก่อนวันอบรม

> **💡 Analogy:** อีเมลเหมือนส่งจดหมายเข้ากล่อง ส่วน direct Teams chat เหมือนนำโน้ตไปวางบนโต๊ะของผู้รับโดยตรง

## Workflow ที่เราจะต่อยอด

```mermaid
flowchart LR
    A["Decision"] --> B{"Approve?"}
    B -->|Yes| C["Update: Approved"]
    B -->|No| D["Update: Rejected"]
    C --> E["Teams direct message: Approved"]
    D --> F["Teams direct message: Rejected"]
```

---

## Practice 1: เพิ่มข้อความสำหรับ Approved

**Primary target:** ส่งผล Approved ไปยัง direct chat ของผู้ขอด้วย Dynamic content จากคำขอเดิม

1. เปิด flow `Record Task Request - [Your Name]`
2. ในแขนง **If yes** เพิ่ม action หลัง `Update a row` หรือหลัง `Create file` หากทำแบบฝึกหัดเสริมที่ 7 แล้ว
3. ค้นหา connector `Microsoft Teams`
4. เลือก action `Post message in a chat or channel`
5. หากระบบขอ connection ให้ Sign in ด้วยบัญชี Microsoft 365 สำหรับการฝึก
6. กำหนดค่า:

   - **Post as:** `Flow bot`
   - **Post in:** `Chat with Flow bot`
   - **Recipient:** Dynamic content `Requester email`
   - **Message:** ใช้ข้อความด้านล่าง

   ```text
   ผลคำขอ: Approved
   RequestId: [Response Id]
   Title: [Task title]
   Next step: งานได้รับการอนุมัติแล้ว โปรดดำเนินการตามขั้นตอนที่ทีมกำหนด
   ```

7. เลือก **Save**

### Expected output

- แขนง Approved มี action ที่ส่ง direct Teams message ไปยัง `Requester email`

### Checkpoint

- ค่า `Post as`, `Post in` และ `Recipient` ตรงตามที่กำหนด และข้อความมี `Response Id` กับ `Task title`

---

## Practice 2: เพิ่มข้อความสำหรับ Rejected

**Primary target:** สร้างข้อความอีกหนึ่งแบบเพื่อให้ผู้รับเห็นผลและ next step ที่ถูกต้อง

1. ในแขนง **If no** เพิ่ม `Post message in a chat or channel` หลัง `Update a row`
2. กำหนดค่า `Post as`, `Post in` และ `Recipient` เหมือน Practice 1
3. ใช้ข้อความ:

   ```text
   ผลคำขอ: Rejected
   RequestId: [Response Id]
   Title: [Task title]
   Next step: โปรดตรวจรายละเอียดกับผู้ตัดสินใจก่อนส่งคำขอใหม่
   ```

4. เลือก **Save**

### Expected output

- แต่ละแขนงมีข้อความของตนเอง และส่งถึงผู้ขอคนเดียวกับข้อมูลใน Form

### Checkpoint

- ข้อความ Approved และ Rejected ใช้สถานะกับ next step คนละแบบอย่างชัดเจน

---

## Practice 3: ทดสอบ direct chat ทั้งสองผล

**Primary target:** ยืนยันผลปลายทางใน Teams ไม่ใช่ดูเพียงสถานะ `Succeeded`

1. เปิด Microsoft Teams ด้วยบัญชีผู้ขอ
2. ส่ง Form ใหม่แล้วเลือก `Approve`
3. รอ run จบและเปิดข้อความจาก Flow bot
4. ตรวจ `RequestId`, `Title`, ผล และ next step
5. ส่ง Form ใหม่อีกครั้งแล้วเลือก `Reject`
6. ตรวจข้อความ Teams ครั้งที่สอง
7. เปิด Run history และเทียบ output ของ Teams action กับข้อความที่ได้รับ

### Expected output

- ผู้ขอได้รับ direct message หนึ่งข้อความสำหรับ Approved และอีกหนึ่งข้อความสำหรับ Rejected

### Checkpoint

- ข้อความทั้งสองรายการตรงกับ Response Id ของ Form และแสดงผลคนละเส้นทางถูกต้อง

---

## Optional variation: ส่งเข้าช่องของทีม

ทำส่วนนี้เฉพาะเมื่อ Client IT ยืนยัน Team และ standard channel สำหรับการฝึกแล้ว

1. เพิ่มหรือคัดลอก action `Post message in a chat or channel`
2. ตั้ง **Post as** เป็น `Flow bot`
3. ตั้ง **Post in** เป็น `Channel`
4. เลือก Team และ channel ที่วิทยากรแจ้ง
5. ใช้ข้อความสมมติที่ไม่มีข้อมูลส่วนบุคคลหรือข้อมูลงานจริง
6. ทดสอบหนึ่งครั้งและลบข้อความตามวิธี cleanup ที่ตกลงกับ IT

> **⚠️ Note:** ไม่ใช้ private channel ในกิจกรรมนี้ เพราะ action นี้ไม่รองรับการโพสต์ข้อความไปยัง private channel

## Troubleshooting

| อาการ | ตรวจสอบและแก้ไข |
|---|---|
| ไม่พบ action หรือ action ถูก block | ให้ IT ตรวจว่า Teams `Workflows` app เป็น Allow และ DLP policy อนุญาต connector |
| สร้าง Teams connection ไม่ได้ | ตรวจว่าบัญชีเดียวกันเข้า Teams ได้ แล้ว Sign in ใหม่จาก Connections |
| Flow bot ส่งไม่ได้ | ยืนยันว่าเป็น commercial tenant; หากยังไม่ผ่าน rehearsal ให้ใช้ instructor demonstration หรือ saved result |
| Recipient ไม่ถูกต้อง | ใช้ Dynamic content `Requester email` และทดสอบด้วยอีเมลของตนเอง |
| Run สำเร็จแต่หา chat ไม่พบ | ค้นหา `Flow bot` หรือเปิด Chat ล่าสุด แล้วเทียบเวลาและ RequestId |
| เลือก Team หรือ channel ไม่ได้ | ส่วน channel เป็น optional เท่านั้น; กลับไปใช้ `Chat with Flow bot` |

## Summary

เราได้ส่งผลการตัดสินใจไปยัง direct Teams chat โดยใช้ข้อมูลจาก flow เดิม และไม่ต้องเตรียม Team หรือ channel สำหรับกิจกรรมหลัก

## Microsoft Learn references

- [Microsoft Teams connector — Standard classification and limitations](https://learn.microsoft.com/en-us/connectors/teams/)
- [Send a message in Teams using Power Automate](https://learn.microsoft.com/en-us/power-automate/teams/send-a-message-in-teams)

แบบฝึกหัดหลักถัดไป → [ส่งสรุปงานค้างประจำวัน](../04-daily-pending-summary/README.md)

กลับไป → [เส้นทางการฝึก Day 1](../../README.md)
