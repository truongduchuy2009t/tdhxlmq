const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Cấu hình thư mục chứa mã nguồn tĩnh (HTML, CSS, hình ảnh, media...)
app.use(express.static(path.join(__dirname, 'public')));

// Route chính trả về file giao diện Bio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route riêng cho trang Wedding (trỏ tới file wedding.html trong thư mục public)
app.get('/wedding', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'wedding.html'));
});

// Route dự phòng (Fallback) cho các đường dẫn khác
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Khởi động server lắng nghe trên cổng của Render/Local
app.listen(PORT, () => {
    console.log(`🚀 Server tdhxlmq đang chạy tại cổng http://localhost:${PORT}`);
});
