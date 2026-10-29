# LanEm Glow – Landing page pass makeup 🌸

Trang web tĩnh (HTML + CSS + JavaScript thuần), **không cần cài Node, không cần build**.

## Mở trên VS Code
1. Giải nén thư mục, mở bằng VS Code (File → Open Folder).
2. Cài extension **Live Server** (của Ritwick Dey).
3. Chuột phải `index.html` → **Open with Live Server**.
   (Hoặc đơn giản là double-click `index.html` để mở bằng trình duyệt.)

## Cấu trúc
```
lanem-glow/
├─ index.html        ← nội dung trang (tiêu đề, giới thiệu, link TikTok/FB/SĐT)
├─ css/style.css     ← màu sắc, giao diện (đổi màu hồng ở đầu file, mục :root)
├─ js/products.js    ← ★ DANH SÁCH SẢN PHẨM – chỉ cần sửa file này
├─ js/app.js         ← logic lọc, tìm kiếm, giỏ hàng (CONFIG ở đầu file: SĐT, link)
└─ images/           ← bỏ ảnh sản phẩm vào đây
```

## Thêm sản phẩm mới
Mở `js/products.js`, thêm 1 dòng vào nhóm phù hợp:
```js
P("son", "Son Romand Juicy", "seal", 226, 113);
```
- `"son"` = nhóm (lamsach, skincare, chongnang, nen, ma, mat, son, khac)
- `"seal"` = nguyên seal, hoặc `"test"` = test 1 lần
- `226, 113` = giá gốc, giá sale (đơn vị **nghìn đồng**)
- Giá tùy loại: `null, null` → hiện "Liên hệ"

### Thêm ảnh bằng link trên mạng (không cần tải về)
Dán thẳng link ảnh vào cuối dòng:
```js
P("son", "Son Romand Juicy", "seal", 226, 113, "https://i.imgur.com/abc123.jpg");
```
Ảnh tự được cắt vừa khung vuông của thẻ sản phẩm. Muốn hiện đủ cả ảnh (không cắt mép):
```js
P("son", "Son Romand Juicy", "seal", 226, 113, { img: "https://...jpg", fit: "contain" });
```
Thêm link tham khảo: `{ img: "https://...jpg", link: "https://..." }`

**Lấy link ảnh đúng cách:** chuột phải vào ảnh → *Copy image address* (link thường kết thúc `.jpg`, `.png`, `.webp`).
Link ảnh lỗi thì thẻ tự hiện emoji, trang không bị vỡ.
Một số nơi (Shopee, TikTok, Facebook, Google Drive) hay chặn hoặc làm link ảnh hết hạn. Nơi ổn định: **Imgur, ImgBB, Cloudinary, GitHub**.

Vẫn có thể dùng ảnh trong máy: bỏ vào `images/` rồi ghi `"images/romand.jpg"`.

Xóa sản phẩm đã hết: xóa dòng đó (hoặc thêm `//` đầu dòng).

## Đổi thông tin liên hệ
- `index.html`: tìm `0384940597`, link tiktok, facebook.
- `js/app.js`: sửa `CONFIG` ở đầu file.

## Đưa lên mạng miễn phí
Kéo thả cả thư mục lên **Netlify Drop** (app.netlify.com/drop) hoặc dùng **GitHub Pages / Vercel**.
