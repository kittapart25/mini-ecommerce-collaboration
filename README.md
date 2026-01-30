# Mini E-Commerce Collaboration Project

## 📋 Project Overview
โปรเจกต์ Mini E-Commerce สำหรับฝึกฝน GitHub Workflow และการทำงานเป็นทีม โดยพัฒนาจาก Version 1 (Basic) ไปสู่ Version 2 (Improved)

## 🎯 Features
- ✅ แสดงรายการสินค้าพร้อมรูปภาพจริง
- ✅ ระบบค้นหาสินค้าแบบ Real-time
- ✅ Loading State เมื่อโหลดข้อมูล
- ✅ Responsive Grid Layout
- ✅ Hover Animation บน Product Cards
- ✅ Format ราคาด้วย comma separator
- ✅ Validation สำหรับ Empty Search Input

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)
- JSON (Data Storage)
- Git & GitHub (Version Control)

## 📁 Project Structure
```
mini-ecommerce/
├── index.html          # หน้าเว็บหลัก
├── css/
│   └── style.css      # Styles และ Animations
├── js/
│   ├── main.js        # JavaScript Logic
│   └── products.json  # ข้อมูลสินค้า (6 รายการ)
└── README.md          # Documentation
```

## 👥 Team Members
- **Dev A (Frontend/UX Developer)**: รับผิดชอบ UI/UX Improvements
  - Loading State Implementation
  - Responsive Grid Layout
  - Hover Animations
  - Product Image Updates
  - Price Formatting

- **Dev B (Backend/Logic Developer)**: รับผิดชอบ Logic Improvements
  - Search Function Enhancement
  - Input Validation
  - Trim Whitespace Handling

## 🚀 How to Run
1. Clone repository:
```bash
git clone https://github.com/kittapart25/mini-ecommerce-collaboration.git
cd mini-ecommerce-collaboration
```

2. เปิดไฟล์ `index.html` ในเบราว์เซอร์
   - หรือใช้ Live Server ใน VS Code

## 🔄 Git Workflow
โปรเจกต์นี้ใช้ GitHub Flow:
1. สร้าง Feature Branch จาก `main`
2. พัฒนาฟีเจอร์ใน Branch แยก
3. สร้าง Pull Request
4. Code Review โดยทีม
5. Merge เข้า `main` หลัง Approve

### Branches
- `main` - Production-ready code
- `feature/ui-ux-improvements` - UI/UX enhancements
- `feature/search-and-validation` - Search logic improvements

## 📊 Development Timeline
1. **Initial Setup** - Project structure และ basic features
2. **Dev A Work** - UI/UX improvements
3. **Dev B Work** - Search และ validation
4. **Merge Conflict Resolution** - รวมโค้ดจากทั้งสองทีม
5. **Final Review** - Testing และ bug fixes

## 🎓 Learning Outcomes
- การใช้ Git Branching Strategy
- การทำ Pull Requests และ Code Review
- การแก้ไข Merge Conflicts
- การทำงานร่วมกันเป็นทีม
- Best practices สำหรับ Version Control

## 📝 Commit Convention
- `feat:` - ฟีเจอร์ใหม่
- `fix:` - แก้ไข bugs
- `chore:` - งานบำรุงรักษา
- `docs:` - เอกสาร

## 🔗 Links
- **Repository**: https://github.com/kittapart25/mini-ecommerce-collaboration
- **Pull Requests**: https://github.com/kittapart25/mini-ecommerce-collaboration/pulls?q=is%3Apr+is%3Aclosed

## 📄 License
This project is for educational purposes - ENGSE203 Software Engineering Course

---
**Course**: ENGSE203 - Software Engineering  
**Lab**: Part 2 - GitHub Workflow & Team Collaboration  
**Date**: January 2026
