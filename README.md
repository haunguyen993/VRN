# 🇻🇳 Website Chiến thắng Điện Biên Phủ

## Giới thiệu

Website giới thiệu về Chiến thắng Điện Biên Phủ (1954) - "Lừng lẫy năm châu, chấn động địa cầu". Đây là một trang web một trang (one-page website) được thiết kế hiện đại, sinh động với theme màu đỏ - vàng - xanh lá, thể hiện tinh thần dân tộc Việt Nam.

## 🎨 Tính năng

### Giao diện
- **Thiết kế hiện đại**: Sử dụng gradient, shadow và animation mượt mà
- **Theme màu dân tộc**: Đỏ (đại diện cho máu anh hùng), Vàng (ngôi sao), Xanh lá (màu quân phục)
- **Typography**: Font Merriweather cho tiêu đề trang nghiêm, Roboto cho nội dung dễ đọc
- **Responsive**: Hiển thị tốt trên mọi thiết bị (mobile, tablet, desktop)

### Hiệu ứng tương tác
- **Scroll Effects**: Fade-in animation khi cuộn trang
- **Parallax**: Hiệu ứng parallax nhẹ cho hero section
- **Counter Animation**: Số liệu thống kê tự động đếm
- **Hover Effects**: Hiệu ứng hover cho các card và button
- **Lightbox**: Xem ảnh phóng to trong thư viện hình ảnh

### Navigation
- **Fixed Header**: Header cố định với navigation smooth scroll
- **Mobile Menu**: Menu hamburger cho thiết bị di động
- **Active States**: Highlight section đang xem
- **Scroll to Top**: Nút lên đầu trang
- **Keyboard Navigation**: Hỗ trợ điều hướng bằng phím (Alt + Arrow keys)

## 📁 Cấu trúc file

```
VRN/
├── index.html          # File HTML chính
├── styles.css          # File CSS với tất cả styling
├── script.js           # File JavaScript cho tương tác
└── README.md          # Hướng dẫn sử dụng
```

## 🚀 Cách sử dụng

### 1. Chạy trực tiếp
- Mở file `index.html` bằng trình duyệt web
- Không cần server, chạy trực tiếp từ file

### 2. Sử dụng Live Server (khuyến nghị)
```bash
# Nếu có VS Code với Live Server extension
# Click chuột phải vào index.html > "Open with Live Server"

# Hoặc sử dụng Python
python -m http.server 8000

# Hoặc sử dụng Node.js
npx serve .
```

### 3. Truy cập
- Mở trình duyệt và truy cập `http://localhost:8000` (nếu dùng server)
- Hoặc mở trực tiếp file `index.html`

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px - Hiển thị đầy đủ tính năng
- **Tablet**: 768px - 1024px - Layout điều chỉnh phù hợp
- **Mobile**: < 768px - Menu hamburger, layout single column

## 🎯 Các phần nội dung

1. **Giới thiệu** - Hero section với thông tin tổng quan
2. **Bối cảnh lịch sử** - Timeline các sự kiện quan trọng
3. **Diễn biến chiến dịch** - 3 giai đoạn chính của chiến dịch
4. **Nguyên nhân & Ý nghĩa** - Phân tích nguyên nhân thắng lợi và ý nghĩa lịch sử
5. **Anh hùng tiêu biểu** - Giới thiệu các anh hùng liệt sĩ
6. **Điện Biên hôm nay** - Tình hình hiện tại của Điện Biên Phủ
7. **Thư viện hình ảnh** - Gallery với lightbox effect
8. **Nguồn tham khảo** - Các nguồn tài liệu tham khảo

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc semantic, accessibility
- **CSS3**: Flexbox, Grid, Animations, Custom Properties
- **JavaScript ES6+**: Intersection Observer, Event Listeners, Modern APIs
- **Font Awesome**: Icons
- **Google Fonts**: Merriweather, Roboto
- **Unsplash**: Placeholder images

## ⚡ Tối ưu hóa

### Performance
- **Lazy Loading**: Images load khi cần thiết
- **Throttled Scroll**: Tối ưu scroll events
- **CSS Animations**: Sử dụng transform thay vì thay đổi layout
- **Minimal Dependencies**: Chỉ sử dụng thư viện cần thiết

### Accessibility
- **Semantic HTML**: Sử dụng đúng thẻ HTML
- **Skip Links**: Liên kết bỏ qua cho keyboard navigation
- **Focus Management**: Quản lý focus states
- **Alt Text**: Mô tả cho tất cả hình ảnh
- **Color Contrast**: Đảm bảo độ tương phản màu sắc

### SEO
- **Meta Tags**: Title, description, viewport
- **Structured Data**: Semantic markup
- **Performance**: Fast loading, optimized images

## 🎨 Customization

### Thay đổi màu sắc
Chỉnh sửa CSS variables trong `:root`:
```css
:root {
    --primary-red: #dc2626;
    --primary-yellow: #fbbf24;
    --primary-green: #16a34a;
    /* ... */
}
```

### Thay đổi nội dung
- Chỉnh sửa trực tiếp trong file `index.html`
- Thay thế hình ảnh bằng cách cập nhật `src` attributes

### Thêm hiệu ứng
- Thêm class `fade-in` cho elements cần animation
- Tùy chỉnh timing trong `script.js`

## 🔧 Troubleshooting

### Hình ảnh không hiển thị
- Kiểm tra kết nối internet (sử dụng Unsplash CDN)
- Thay thế bằng hình ảnh local nếu cần

### Animation không hoạt động
- Đảm bảo JavaScript được load
- Kiểm tra console để xem lỗi
- Tắt `prefers-reduced-motion` nếu đang bật

### Mobile menu không hoạt động
- Kiểm tra viewport meta tag
- Đảm bảo JavaScript events được bind đúng

## 📄 License

Dự án này được tạo ra cho mục đích giáo dục và tuyên truyền lịch sử. Nội dung về Chiến thắng Điện Biên Phủ thuộc về lịch sử dân tộc Việt Nam.

## 👥 Đóng góp

Mọi đóng góp để cải thiện website đều được hoan nghênh:
- Báo cáo lỗi
- Đề xuất tính năng mới
- Cải thiện nội dung lịch sử
- Tối ưu hóa performance

## 📞 Liên hệ

Dự án được thực hiện bởi nhóm học sinh với mục đích học tập và tuyên truyền giáo dục lịch sử.

---

**"Chiến thắng Điện Biên Phủ - Lừng lẫy năm châu, chấn động địa cầu"** 🇻🇳
