import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    lang: 'th-TH',
    title: 'Power Automate Day 1',
    description: 'แบบฝึกหัด Power Automate สำหรับผู้เริ่มต้น',
    base: '/cpall-gosoft-power-automate-2026/',
    cleanUrls: true,
    lastUpdated: true,
    ignoreDeadLinks: [/^\/downloads\//],
    head: [
      ['meta', { name: 'theme-color', content: '#17324d' }],
      ['meta', { name: 'color-scheme', content: 'light dark' }]
    ],
    themeConfig: {
      siteTitle: 'Power Automate Day 1',
      nav: [
        { text: 'หน้าแรก', link: '/' },
        { text: 'แบบฝึกหัด', link: '/exercises/01-first-task-notification' },
        {
          text: 'ไฟล์ประกอบ',
          items: [
            {
              text: 'ดาวน์โหลด Excel tracker',
              link: 'https://raw.githubusercontent.com/teerasej/cpall-gosoft-power-automate-2026/main/docs/public/downloads/task-request-tracker.xlsx'
            },
            { text: 'ดาวน์โหลดสไลด์ผู้เรียน', link: '/downloads/CPAll-Power-Automate-Day-1.pptx' },
            { text: 'ตัวอย่างคำของาน', link: '/resources/sample-requests' }
          ]
        }
      ],
      sidebar: [
        {
          text: 'Power Automate Day 1',
          items: [{ text: 'ภาพรวมการเรียน', link: '/' }]
        },
        {
          text: 'เส้นทางการฝึกหลัก',
          collapsed: false,
          items: [
            { text: '1 · ส่งการแจ้งเตือนงาน', link: '/exercises/01-first-task-notification' },
            { text: '2 · รับและบันทึกคำของาน', link: '/exercises/02-collect-and-record-requests' },
            { text: '3 · ขออนุมัติและอัปเดต', link: '/exercises/03-ask-for-a-decision' },
            { text: '8 · แจ้งผลผ่าน Teams', link: '/exercises/08-notify-requester-in-teams' },
            { text: '5 · รับมือข้อผิดพลาด', link: '/exercises/05-understand-and-recover-from-errors' }
          ]
        },
        {
          text: 'Instructor-selected / Optional',
          items: [
            { text: 'ทบทวน Approval · Instructor-selected', link: '/exercises/07-core-approval-reinforcement' },
            { text: '7 · SharePoint · Optional', link: '/exercises/07-archive-approved-request-in-sharepoint' },
            { text: 'สรุปงานค้างประจำวัน · Optional', link: '/exercises/04-daily-pending-summary' }
          ]
        },
        {
          text: 'ไฟล์ประกอบ',
          items: [
            { text: 'ดาวน์โหลดไฟล์', link: '/resources/downloads' },
            { text: 'ตัวอย่างคำของาน', link: '/resources/sample-requests' }
          ]
        }
      ],
      outline: { level: [2, 4], label: 'ในหน้านี้' },
      docFooter: { prev: 'ก่อนหน้า', next: 'ถัดไป' },
      lastUpdated: {
        text: 'อัปเดตล่าสุด',
        formatOptions: { dateStyle: 'medium', timeStyle: 'short' }
      },
      editLink: {
        pattern: 'https://github.com/teerasej/cpall-gosoft-power-automate-2026/edit/main/docs/:path',
        text: 'แก้ไขหน้านี้บน GitHub'
      },
      search: {
        provider: 'local',
        options: {
          translations: {
            button: { buttonText: 'ค้นหา', buttonAriaLabel: 'ค้นหาเอกสาร' },
            modal: {
              noResultsText: 'ไม่พบผลลัพธ์',
              resetButtonTitle: 'ล้างการค้นหา',
              footer: {
                selectText: 'เลือก',
                navigateText: 'เลื่อน',
                closeText: 'ปิด'
              }
            }
          }
        }
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/teerasej/cpall-gosoft-power-automate-2026' }
      ],
      footer: {
        message: 'เนื้อหาจำลองสำหรับการฝึกอบรม Microsoft Power Automate',
        copyright: 'Power Automate Day 1 · 2026'
      }
    },
    mermaid: {
      theme: 'base',
      themeVariables: {
        primaryColor: '#edf3f8',
        primaryTextColor: '#17324d',
        primaryBorderColor: '#c83c42',
        lineColor: '#52738f',
        secondaryColor: '#fff4f4',
        tertiaryColor: '#f7f9fb'
      }
    }
  })
)
