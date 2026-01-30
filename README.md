# Mini E-Commerce Collaboration Project

## 📋 Project Overview
นี่คือโปรเจกต์ Mini E-Commerce (Version 1) สำหรับการฝึกฝน GitHub Workflow และการทำงานเป็นทีม

โปรเจกต์นี้จำลองสถานการณ์จริงที่นักพัฒนา 2 คนต้องร่วมกันแก้ไขปัญหาและปรับปรุงโปรเจกต์ให้ดีขึ้น

## 🎯 วัตถุประสงค์
- เข้าใจและประยุกต์ใช้ GitHub Flow ในการทำงานร่วมกับผู้อื่น
- ฝึกฝนการใช้ Git commands ที่จำเป็นสำหรับการทำงานเป็นทีม
- เรียนรู้กระบวนการ Pull Request (PR) และ Code Review
- ฝึกทักษะการแก้ไข Merge Conflict

## 👥 บทบาทในโปรเจกต์
- **Dev A (Frontend/UX Developer)**: รับผิดชอบการปรับปรุงหน้าตา (UI/UX), Loading States และ Notification
- **Dev B (Backend/Logic Developer)**: รับผิดชอบการปรับปรุงประสิทธิภาพระบบค้นหาและ Validation ข้อมูล

## 📁 โครงสร้างโปรเจกต์
```
mini-ecommerce/
├── index.html          # หน้าเว็บหลัก
├── js/
│   ├── main.js        # JavaScript หลักของโปรเจกต์
│   └── products.json  # ข้อมูลสินค้า
├── css/
│   └── style.css      # Stylesheet
└── README.md          # ไฟล์นี้
```

## 🚀 การเริ่มต้นใช้งาน

### Prerequisites
- Git installed
- GitHub account
- Web browser
- Text editor (VS Code recommended)

### Setup Instructions

#### สำหรับ Dev A (Repository Owner):
```bash
# 1. สร้าง repository บน GitHub ชื่อ mini-ecommerce-collaboration
# 2. Clone โปรเจกต์นี้หรือสร้างโปรเจกต์ใหม่

# 3. Initialize Git และ push ไปยัง GitHub
git init
git add .
git commit -m "Initial project version 1"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main

# 4. เพิ่ม Dev B เป็น Collaborator ใน Settings > Collaborators
```

#### สำหรับ Dev B:
```bash
# 1. รับคำเชิญจาก Dev A
# 2. Clone repository
git clone <repository-url>
cd mini-ecommerce-collaboration
```

## 🔧 Git Workflow

### 1. สร้าง Feature Branch
```bash
# Dev A
git checkout -b feature/ui-ux-improvements

# Dev B
git checkout -b feature/search-and-validation
```

### 2. ทำงานและ Commit
```bash
git add .
git commit -m "feat: your feature description"
git push origin <your-branch-name>
```

### 3. สร้าง Pull Request
- ไปที่ GitHub repository
- คลิก "New Pull Request"
- เลือก branch ของคุณเพื่อ merge เข้า main
- เขียน description อธิบายการเปลี่ยนแปลง
- Assign reviewer

### 4. Code Review
- Reviewer ตรวจสอบโค้ด
- แสดงความเห็นหรือขอแก้ไข
- Approve เมื่อพอใจ

### 5. Merge
- Merge Pull Request เข้า main
- ลบ branch ที่ไม่ใช้แล้ว

## 📝 งานที่ต้องทำ

### Dev A Tasks (feature/ui-ux-improvements):
- [ ] เพิ่ม Loading State
- [ ] ปรับปรุง UI/UX (transitions, hover effects)
- [ ] ทำให้ responsive (flex layout)
- [ ] อัปเดตข้อมูลสินค้า (รูปภาพจริง + format ราคา)

### Dev B Tasks (feature/search-and-validation):
- [ ] ปรับปรุง logic การค้นหา (trim, case-insensitive)
- [ ] เพิ่ม validation สำหรับ empty search
- [ ] จัดการกับ edge cases

## 🔀 Handling Merge Conflicts

หาก GitHub แจ้งว่า "Can't automatically merge":
```bash
# 1. Update main branch
git checkout main
git pull origin main

# 2. Rebase your feature branch
git checkout <your-feature-branch>
git rebase main

# 3. แก้ไข conflicts ในไฟล์ที่มีปัญหา
# 4. Mark as resolved
git add <conflicted-files>
git rebase --continue

# 5. Force push (ระวัง!)
git push --force-with-lease origin <your-feature-branch>
```

## 📊 Version History
- **Version 1 (Current)**: Basic e-commerce with simple product display and search
- **Version 2 (Target)**: Improved UI/UX, better search, loading states, validation

## 🎓 Learning Outcomes
หลังจากทำ lab นี้เสร็จ คุณจะได้เรียนรู้:
- การใช้ Git branching strategy
- การทำ Pull Requests และ Code Review
- การแก้ไข Merge Conflicts
- การทำงานร่วมกันเป็นทีมด้วย Git
- Best practices สำหรับ version control

## 📚 Resources
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 📞 Support
หากมีปัญหาหรือคำถาม:
- สร้าง Issue ใน GitHub repository
- ติดต่ออาจารย์ผู้สอน
- หารือกับเพื่อนในทีม

## 🏆 Grading Criteria (60 คะแนน)
- Team Collaboration: 15 คะแนน
- Git Workflow: 15 คะแนน
- Code Review: 15 คะแนน
- Final Product: 15 คะแนน
- Bonus: 10 คะแนน (Advanced features)

---
**ENGSE203 - Software Engineering**  
**Part 2: GitHub Workflow & Team Collaboration**
