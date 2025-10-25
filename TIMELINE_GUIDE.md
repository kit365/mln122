# 📚 Hướng Dẫn Sử Dụng Timeline Component

## 🎯 Tính Năng Mới

### 1. **Nội Dung Chi Tiết Hơn**
- Mỗi timeline item có nội dung mở rộng với:
  - Hoàn cảnh cụ thể và số liệu thực tế
  - Lịch làm việc chi tiết
  - Phân tích tài chính (giá trị tạo ra vs nhận được)
  - Các khóa học "bắt buộc"
  - Kế hoạch hành động cụ thể

### 2. **Chỗ Cho Hình Ảnh**
- Mỗi timeline có placeholder cho hình ảnh
- Mô tả chi tiết về hình ảnh cần thiết
- Dễ dàng thay thế bằng hình ảnh thực tế

### 3. **Nút Điều Hướng**
- **Nút Previous/Next**: Di chuyển giữa các timeline
- **Dots Navigation**: Click trực tiếp vào timeline muốn xem
- **Progress Bar**: Hiển thị tiến độ timeline hiện tại
- **Keyboard Support**: Có thể thêm phím tắt (← →)

## 🎨 Giao Diện Mới

### **Layout Responsive**
- Desktop: Hiển thị đầy đủ với sidebar
- Mobile: Tối ưu cho màn hình nhỏ
- Tablet: Layout cân bằng

### **Animation Mượt Mà**
- Fade in/out khi chuyển timeline
- Hover effects cho các nút
- Smooth transitions

### **Color Coding**
- 🎓 **Bắt đầu**: Màu xanh (labor)
- 🚀 **Bị lừa dối**: Màu đỏ (surplus)
- 📚 **Bóc lột tinh vi**: Màu đỏ đậm
- 💡 **Tỉnh ngộ**: Màu xanh (labor)
- ⚡ **Hành động**: Màu đỏ (surplus)

## 📝 Nội Dung Timeline

### **Timeline 1: Tốt nghiệp Đại học (Tháng 6/2024)**
- GPA: 3.8/4.0, top 10% khóa
- Kinh nghiệm thực tập 2 công ty
- Thành thạo 3 ngôn ngữ lập trình
- Kỳ vọng lương: 15-20 triệu VNĐ

### **Timeline 2: Ứng tuyển Startup (Tháng 7/2024)**
- Lương: 8 triệu VNĐ (thấp hơn 50% kỳ vọng)
- Slogan: "Con người là tài sản quý giá nhất"
- Văn hóa: "We're a family", "Passion over money"
- Lời hứa: "Đầu tư vào tương lai"

### **Timeline 3: Giai đoạn 'Đào tạo' (Tháng 8-10/2024)**
- Lịch làm việc: 12-14 tiếng/ngày
- Khóa học "bắt buộc": 136 giờ
- Kết quả: Tạo giá trị gấp 3 lần lương
- Vẫn nhận 8 triệu/tháng

### **Timeline 4: Nhận ra sự thật (Tháng 11-12/2024)**
- Giá trị tạo ra: 250 triệu VNĐ/tháng
- Nhận được: 11 triệu VNĐ/tháng
- Tỷ lệ bóc lột: 95.6%
- CEO mua Tesla bằng lợi nhuận

### **Timeline 5: Hành động (2025 - Hiện tại)**
- Kế hoạch đàm phán lương
- Tìm kiếm cơ hội mới
- Mục tiêu: 30+ triệu VNĐ/tháng
- Không tin lời hứa "phát triển" mơ hồ

## 🔧 Cách Thêm Hình Ảnh

### **Bước 1: Chuẩn bị hình ảnh**
- Kích thước: 800x600px (tỷ lệ 4:3)
- Format: JPG, PNG, WebP
- Chất lượng: Cao, rõ nét

### **Bước 2: Thay thế placeholder**
```jsx
// Thay thế dòng này:
<div className="text-4xl mb-2">📸</div>

// Bằng:
<img 
  src="/images/timeline-1.jpg" 
  alt="Long trong lễ tốt nghiệp"
  className="w-full h-64 object-cover rounded-lg"
/>
```

### **Bước 3: Cập nhật mô tả**
- Cập nhật `imagePlaceholder` trong data
- Thêm alt text phù hợp
- Đảm bảo responsive

## 🎮 Cách Sử Dụng Navigation

### **Nút Previous/Next**
- Click mũi tên trái/phải
- Hoặc dùng phím ← → (có thể thêm)
- Animation mượt mà

### **Dots Navigation**
- Click vào chấm tròn
- Chuyển trực tiếp đến timeline
- Visual feedback rõ ràng

### **Progress Bar**
- Hiển thị tiến độ hiện tại
- Màu gradient từ labor đến surplus
- Animation khi chuyển timeline

## 📊 Phân Tích Marx - Lênin

Mỗi timeline đều có phần phân tích dựa trên lý thuyết Marx:

1. **Sản xuất sức lao động**: Long đầu tư học tập
2. **Mua sức lao động**: Tư bản mua với giá thấp
3. **Giá trị thặng dư tương đối**: Tăng năng suất không tăng lương
4. **Nhận thức bóc lột**: Hiểu bản chất thực sự
5. **Đấu tranh giai cấp**: Hành động để giành lại giá trị

## 🌍 Kết Nối SDG 8

- **Mục tiêu**: Việc làm bền vững và tăng trưởng kinh tế
- **Thực trạng**: Bóc lột lao động cao
- **Cần thay đổi**: Lương công bằng, quyền lợi bảo vệ
- **Hành động**: Đấu tranh cho quyền lợi người lao động

## 🚀 Tương Lai

### **Có thể mở rộng:**
- Thêm video cho mỗi timeline
- Interactive charts và graphs
- Voice narration
- Multi-language support
- Export to PDF/PPT

### **Tối ưu hóa:**
- Lazy loading cho hình ảnh
- Preload timeline data
- Better mobile experience
- Accessibility improvements
