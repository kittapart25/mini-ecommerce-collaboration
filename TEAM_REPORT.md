# Team Report: Mini E-Commerce Collaboration Project
## ENGSE203 - Software Engineering | Part 2: GitHub Workflow & Team Collaboration

---

## 1. การแบ่งหน้าที่ความรับผิดชอบ

### Dev A (Frontend/UX Developer)
**Branch**: `feature/ui-ux-improvements`

**ความรับผิดชอบ**:
- การออกแบบและปรับปรุง User Interface
- เพิ่ม Loading State เพื่อแสดงสถานะการโหลดข้อมูล
- ปรับปรุง Product Card ให้มี Hover Animation (transform: scale)
- สร้าง Responsive Grid Layout (display: flex, flex-wrap)
- อัปเดตข้อมูลสินค้า (รูปภาพจริงจาก Unsplash)
- สร้าง formatPrice() function สำหรับจัดรูปแบบราคา (เพิ่ม comma)

**ไฟล์ที่รับผิดชอบ**:
- `index.html` - เพิ่ม loader element
- `css/style.css` - ปรับปรุง styles, animations, responsive layout
- `js/products.json` - อัปเดตข้อมูลสินค้า (6 รายการ)
- `js/main.js` - เพิ่ม loader logic และ formatPrice function

### Dev B (Backend/Logic Developer)
**Branch**: `feature/search-and-validation`

**ความรับผิดชอบ**:
- ปรับปรุง Search Logic ให้มีประสิทธิภาพมากขึ้น
- เพิ่ม Input Validation
- จัดการ Edge Cases (empty input, whitespace)
- ทดสอบและแก้ไข Merge Conflicts

**ไฟล์ที่รับผิดชอบ**:
- `js/main.js` - ปรับปรุง search function
  - เพิ่ม `.trim()` สำหรับตัดช่องว่าง
  - เพิ่มเงื่อนไข: ถ้า search ว่าง แสดงสินค้าทั้งหมด
  - ปรับปรุง filter logic

---

## 2. ปัญหาที่พบและวิธีแก้ไข

### ปัญหาที่ 1: Merge Conflict ในไฟล์ main.js
**สถานการณ์**: เมื่อ Dev B พยายาม merge branch เข้า main พบว่ามี conflict เพราะ Dev A ได้แก้ไขไฟล์เดียวกัน

**สาเหตุ**:
- Dev A เพิ่ม loader และ formatPrice function
- Dev B ปรับปรุง search function
- ทั้งสองคนแก้ไขบริเวณเดียวกันของไฟล์

**วิธีแก้ไข**:
```bash
# 1. Switch to main และ pull ล่าสุด
git checkout main
git pull origin main

# 2. Merge main เข้า feature branch
git checkout feature/search-and-validation
git merge main

# 3. แก้ไข conflict ใน VS Code
# - รวมโค้ดจากทั้งสองส่วน
# - ลบ conflict markers (<<<<<<, =======, >>>>>>>)

# 4. Stage และ commit
git add js/main.js
git commit -m "Merge main - Combine Dev A and Dev B improvements"

# 5. Push
git push origin feature/search-and-validation
```

**บทเรียน**: ควรสื่อสารกับทีมเพื่อหลีกเลี่ยงการแก้ไขไฟล์เดียวกันพร้อมกัน หรือใช้ modular design

### ปัญหาที่ 2: Conflict Markers ถูก Commit ไปด้วย
**สถานการณ์**: ไฟล์ main.js บน GitHub main branch ยังมี `<<<<<<<`, `=======`, `>>>>>>>` อยู่

**สาเหตุ**: Commit โดยไม่ได้ตรวจสอบว่าแก้ไข conflict เสร็จหรือยัง

**วิธีแก้ไข**:
1. Pull ไฟล์จาก GitHub
2. แก้ไข conflict markers
3. Commit: "fix: Remove conflict markers from main.js"
4. Push กลับไป

**บทเรียน**: ต้องตรวจสอบไฟล์ให้ดีก่อน commit และควรใช้ `git status` เพื่อดูสถานะ

### ปัญหาที่ 3: SSH Permission Denied
**สถานการณ์**: เปลี่ยน remote URL เป็น SSH แต่ไม่สามารถ push ได้

**วิธีแก้ไข**:
```bash
# เปลี่ยนกลับไปใช้ HTTPS
git remote set-url origin https://github.com/kittapart25/mini-ecommerce-collaboration.git
```

**บทเรียน**: ต้องตั้งค่า SSH key กับ GitHub ก่อนใช้ SSH URL

---

## 3. การใช้งาน Git Commands และ Workflow

### Git Commands ที่ใช้

#### Basic Commands:
```bash
git init                    # เริ่มต้น repository
git add .                   # Stage ไฟล์ทั้งหมด
git commit -m "message"     # Commit พร้อมข้อความ
git push origin <branch>    # Push ไปยัง GitHub
git pull origin <branch>    # Pull จาก GitHub
git status                  # ตรวจสอบสถานะ
```

#### Branching:
```bash
git branch                          # ดู branches
git checkout -b <branch-name>       # สร้างและสลับ branch ใหม่
git checkout <branch-name>          # สลับ branch
git merge <branch>                  # Merge branch
git branch -d <branch>              # ลบ branch
```

#### Remote:
```bash
git remote add origin <url>         # เพิ่ม remote
git remote -v                       # ดู remote URLs
git remote set-url origin <url>     # เปลี่ยน remote URL
```

#### Advanced:
```bash
git log --oneline --all --graph     # ดู commit history แบบ graph
git push --force-with-lease         # Force push (ระมัดระวัง)
```

### Workflow ที่ใช้

**GitHub Flow**:
1. สร้าง Feature Branch จาก main
2. พัฒนาฟีเจอร์
3. Commit เป็นระยะ (ทุก 20-30 นาที)
4. Push ไปยัง GitHub
5. สร้าง Pull Request
6. Code Review โดยทีม
7. แก้ไขตาม feedback
8. Merge เข้า main
9. ลบ feature branch

---

## 4. บทเรียนที่ได้รับจากการทำงานเป็นทีม

### 4.1 การสื่อสารมีความสำคัญ
- ควรแจ้งให้ทีมรู้ว่ากำลังแก้ไขไฟล์ไหน
- ใช้ Pull Request เป็นช่องทางสื่อสาร
- Comment ในโค้ดให้ชัดเจน

### 4.2 Code Review เป็นประโยชน์
- ช่วยจับ bugs ก่อน merge
- แลกเปลี่ยนความรู้ระหว่างทีม
- ปรับปรุงคุณภาพโค้ด

### 4.3 แก้ไข Conflict ต้องระวัง
- ตรวจสอบว่ารวมโค้ดถูกต้อง
- ทดสอบหลังแก้ไข conflict
- อย่า force push โดยไม่จำเป็น

### 4.4 Commit Messages มีความสำคัญ
- ใช้ Conventional Commits (feat:, fix:, chore:)
- เขียนข้อความที่อธิบายการเปลี่ยนแปลงชัดเจน
- ช่วยให้เข้าใจ history ได้ง่าย

### 4.5 การแบ่งงานที่ดี
- แบ่งตาม expertise (Frontend/Backend)
- ทำงานแบบ parallel ได้
- ลด conflict

---

## 5. ความคิดเห็นเกี่ยวกับ Version Control

### ข้อดีของ Git & GitHub:
✅ **Collaboration**: หลายคนทำงานพร้อมกันได้โดยไม่ทับซ้อน  
✅ **Version History**: ย้อนกลับไปเวอร์ชันเก่าได้  
✅ **Branching**: ทดลองฟีเจอร์ใหม่โดยไม่กระทบ main  
✅ **Code Review**: ตรวจสอบคุณภาพโค้ดก่อน merge  
✅ **Documentation**: Pull Request เป็นเอกสารการเปลี่ยนแปลง  
✅ **Backup**: โค้ดอยู่บน Cloud ปลอดภัย

### ข้อควรระวัง:
⚠️ **Learning Curve**: ต้องเรียนรู้คำสั่งพื้นฐาน  
⚠️ **Merge Conflicts**: อาจเกิดได้ถ้าไม่ระวัง  
⚠️ **Force Push**: อันตราย ต้องใช้อย่างระมัดระวัง

### ประโยชน์ในโลกจริง:
- **ทุกบริษัท Software ใช้ Version Control**
- **Open Source Projects ใช้ GitHub**
- **CI/CD Pipeline ต่อกับ Git**
- **Portfolio สำหรับหางาน**

---

## 6. สรุป

โปรเจกต์นี้สอนให้เราเห็นถึงความสำคัญของ Version Control และการทำงานเป็นทีม เราได้ฝึกทักษะที่จำเป็นสำหรับการเป็น Software Engineer มืออาชีพ:

✅ Git Commands และ Workflow  
✅ Branching Strategy  
✅ Pull Request และ Code Review  
✅ Merge Conflict Resolution  
✅ Team Communication  
✅ Documentation

การทำงานเป็นทีมไม่ใช่แค่แบ่งงานกัน แต่ต้องมีการสื่อสาร ช่วยเหลือกัน และเรียนรู้จากกัน Version Control เป็นเครื่องมือที่ช่วยให้การทำงานเป็นทีมมีประสิทธิภาพและเป็นระเบียบมากขึ้น

---

## 7. References
- Git Documentation: https://git-scm.com/doc
- GitHub Guides: https://guides.github.com/
- Conventional Commits: https://www.conventionalcommits.org/
- GitHub Flow: https://docs.github.com/en/get-started/quickstart/github-flow

---

**ผู้จัดทำ**: Dev A และ Dev B  
**วันที่**: 30 มกราคม 2026  
**Course**: ENGSE203 - Software Engineering
