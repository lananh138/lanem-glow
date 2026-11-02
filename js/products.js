/* ============================================================
   DANH SÁCH SẢN PHẨM - CHỈ CẦN SỬA FILE NÀY ĐỂ THÊM / SỬA SẢN PHẨM
   ------------------------------------------------------------
   Cú pháp một dòng:
     P("nhóm", "Tên sản phẩm", "tình trạng", giá gốc (nghìn đồng), giá sale (nghìn đồng), { img: "...", link: "..." });

   - nhóm: "lamsach" | "skincare" | "chongnang" | "nen" | "ma" | "mat" | "son" | "khac"
   - tình trạng: "seal" (nguyên seal) hoặc "test" (test 1 lần / swatch nhẹ)
   - giá: tính bằng NGHÌN đồng. Ví dụ 190 = 190.000đ
   - nếu giá tùy loại: ghi null, null  -> web sẽ hiện "Liên hệ"
   - tham số cuối là tùy chọn, có 2 cách viết:
        Cách 1 (ngắn nhất): dán thẳng link ảnh trên mạng
            P("son", "Son Romand", "test", 226, 113, "https://i.imgur.com/abc123.jpg");
        Cách 2: dùng thêm link tham khảo / cách cắt ảnh
            P("son", "Son Romand", "test", 226, 113, { img: "https://...jpg", link: "https://...", fit: "contain" });
        - img:  link ảnh công khai (hoặc "images/ten.jpg" nếu ảnh nằm trong máy)
        - link: link sản phẩm gốc để khách tham khảo
        - fit:  "cover" (mặc định, ảnh lấp đầy khung, có thể cắt mép)
                "contain" (hiện đủ cả ảnh, có viền hồng nhạt hai bên)
        Link ảnh lỗi / không tải được -> tự hiện emoji, trang không bị vỡ.
   ============================================================ */

const CATEGORIES = [
  { id: "all",       label: "Tất cả",              emoji: "✨" },
  { id: "lamsach",   label: "Tẩy trang & Rửa mặt", emoji: "🧼" },
  { id: "skincare",  label: "Skincare",            emoji: "💧" },
  { id: "chongnang", label: "Chống nắng",          emoji: "☀️" },
  { id: "nen",       label: "Nền, lót & phấn",     emoji: "🎨" },
  { id: "ma",        label: "Má hồng & Khối",      emoji: "🌸" },
  { id: "mat",       label: "Mắt & Mày",           emoji: "👁️" },
  { id: "son",       label: "Son môi",             emoji: "💄" },
  { id: "khac",      label: "Phụ kiện & Khác",     emoji: "🎀" },
];

const PRODUCTS = [];
function P(cat, name, status, orig, sale, extra) {
  PRODUCTS.push({
    id: PRODUCTS.length + 1,
    cat, name,
    status: status === "test" ? "test" : "seal",
    orig: orig == null ? null : orig * 1000,
    sale: sale == null ? null : sale * 1000,
    // extra có thể là một đường link ảnh (chuỗi) hoặc { img, link, fit }
    img: typeof extra === "string" ? extra : (extra && extra.img) || "",
    link: (extra && extra.link) || "",
    fit: (extra && extra.fit) || "cover",
  });
}

/* ---------- TẨY TRANG & RỬA MẶT ---------- */
P("lamsach", "Nước tẩy trang Judydoll", "seal", 180, 90,"https://down-vn.img.susercontent.com/file/sg-11134201-825at-muop60cvfw8w49.webp");
P("lamsach", "Nước tẩy trang 3in1 Q.P Cosmetique", "seal", 80, 40,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mud7t0hnpvr5ca.webp");
P("lamsach", "Nước tẩy trang Colorkey", "seal", 180, 90,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mpnkif3i4phccd.webp");
P("lamsach", "Nước tẩy trang Dermayu", "seal", 160, 80,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mr8c39h2vpc5cb.webp");
P("lamsach", "Nước tẩy trang Senka", "seal", 180, 90,"https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mdr2qmk33ged2e.webp");
P("lamsach", "Sữa rửa mặt Cỏ Cây Hoa Lá", "seal", 294, 145,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mu4cttzuvtab79.webp");
P("lamsach", "Sữa Rửa Mặt Cám Gạo", "seal", 180, 90,"https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mjdxb3lfbj0n8f.webp");
P("lamsach", "Sữa rửa mặt Cerave 88ml", "seal", 140, 70,"https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mcyfnun947do68.webp");
P("lamsach", "Sữa rửa mặt Sắc Ngọc Khang", "seal", 100, 50,"https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mcitrzjs615of5.webp");
P("lamsach", "Sữa rửa mặt SVR", "seal", 540, 260,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mosgfzqriuxb8a.webp");
P("lamsach", "Sữa rửa mặt Retolab", "seal", 180, 90,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-monqc3rfz8cr6f.webp");
P("lamsach", "Sữa rửa mặt Colorkey", "seal", 129, 60,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mqzzd1hlj37q06.webp");
P("lamsach", "Sáp tẩy trang M.Len Diary", "seal", 237, 118,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mqhakcy58vtae2.webp");
P("lamsach", "Sáp tẩy trang L'Adore Colors", "test", 230, 115,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mrqsycw0lgqq7d.webp");
P("lamsach", "Sáp tẩy trang Ucanbe", "seal", 180, 90,"https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mfpbgqpn9oncd3.webp");
P("lamsach", "Sáp tẩy trang Ositree", "seal", 225, 112,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mundayl8b4lfa3.webp");
P("lamsach", "Dầu tẩy trang Dopi", "seal", 280, 140,"https://down-vn.img.susercontent.com/file/sg-11134201-825bb-mrimnnsheayw77.webp");
P("lamsach", "Tẩy tế bào chết Retolab", "seal", 280, 140,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mt7zogbjtjpie2.webp");

/* ---------- SKINCARE ---------- */
P("skincare", "Kem trị mụn Trioderma", "seal", 190, 95, "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mhkql1vwf18oab.webp");
P("skincare", "Gel Chấm Mụn DermaX ", "seal", 180, 90, "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-muu1yexrkdft2a.webp");
P("skincare", "Chấm mụn Dr.PONG", "seal", 220, 110, "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-msnjhdhk229xab.webp");
P("skincare", "Kem Dưỡng Giảm Mụn La Roche Posay", "seal", 240, 120, "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lphvxb4ghhdh66.webp");
P("skincare", "Toner pad Medicube", "seal", 700, 300,"https://down-vn.img.susercontent.com/file/sg-11134201-824gm-mfnuyadcqosub7.webp");
P("skincare", "Toner pad Medicube PDRN", "seal", 700, 300,"https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m92izyaczdke87@resize_w900_nl.webp");
P("skincare", "Toner Sơn Đòong", "seal", 200, 100,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mtt349ft7uo8c1.webp");
P("skincare", "Toner Repiel", "seal", 330, 165,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mp32r10imadq6d.webp");
P("skincare", "Toner pad Abib", "seal", 460, 230,"https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-ma1371zk1qbm9d.webp");
P("skincare", "Serum Chống Lão Hóa giúp Dưỡng Ẩm Kans", "seal", 340, 170,"https://down-vn.img.susercontent.com/file/sg-11134201-8258m-murbccpkvtole8.webp");
P("skincare", "Serum dưỡng sáng mờ thâm Repiel", "seal", 380, 190,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mu4bdh6zyxaf3c.webp");
P("skincare", "Serum dưỡng ẩm sáng da Abib", "seal", 420, 210,"https://www.guardian.com.vn/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/c/o/copy_of_h_nh_nh_listing_5__10.png");
P("skincare", "Serum phục hồi Chando (mới)", "seal", 1075, 500,"https://down-vn.img.susercontent.com/file/vn-11134201-7ra0g-m9qu3nz7iatgb8.webp");
P("skincare", "Serum Innisfree", "seal", 620, 310,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mnw7hwkck9ad59@resize_w900_nl.webp");
P("skincare", "Serum trị mụn Trioderma", "seal", 345, 170,"https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mf7yagrvf30s38.webp");
P("skincare", "Serum dưỡng sáng 377", "seal", 270, 140,"https://down-vn.img.susercontent.com/file/cf23f909c2a64867f932915f880bf91a.webp");
P("skincare", "Serum dưỡng sáng Simple", "seal", 235, 115,"https://down-vn.img.susercontent.com/file/sg-11134275-82622-mjnzvj8mz9c2a7.webp");
P("skincare", "Retinol Some By Mi", "test", 400, 200,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mokosp7yyih7a8.webp");
P("skincare", "Peel hồng L'Oréal", "seal", 449, 220,"https://cdn.hstatic.net/products/1000391653/lor670.1_07fa94f4552a4f32b5a58161ccd25dc4_master.jpg");
P("skincare", "Kem dưỡng kép Retinol Some By Mi", "test", 420, 200,"https://down-vn.img.susercontent.com/file/sg-11134207-8259d-mgfvih01i1aka7.webp");
P("skincare", "Kem mắt Retinol Some By Mi", "test", 400, 200,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mtrqwu1p143k2c.webp");
P("skincare", "Kem dưỡng sáng da chống nắng Olay", "test", 750, 350,"https://www.guardian.com.vn/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/3/0/3031663_1_.png");
P("skincare", "Kem Dưỡng Dear Klairs Vitamin Toning Barrier Cream 60g", "test", 450, 225,"https://down-vn.img.susercontent.com/file/sg-11134275-81zws-mn3vppqcffgjde.webp");
P("skincare", "Kem dưỡng Dr.Pong", "seal", 150, 75,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mrfa32qazev8d0.webp");
P("skincare", "Kem Dưỡng Phục Hồi Và Làm Dịu Da La Roche-Posay", "seal", 400, 200,"https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpdtnftd6f6635.webp");
P("skincare", "Kem băng trà xanh Innisfree", "seal", 570, 270,"https://down-vn.img.susercontent.com/file/sg-11134275-824jg-mf20uk74a87g6f.webp");
P("skincare", "Kem dưỡng mochi Garnier", "test", 193, 96,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mncqr0txb5z6e0.webp");
P("skincare", "Kem dưỡng Cerave cho da khô 50ml", "test", 250, 125,"https://down-vn.img.susercontent.com/file/vn-11134201-7ra0g-m7fvisi6vkrc6b.webp");
P("skincare", "Kem Dưỡng Eucerin Giúp Làm Giảm Dầu", "test", 560, 270,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mqvde862w5xc8e.webp");
P("skincare", "Kem dưỡng Olay", "seal", 179, 89,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mr1si0p1fais2f.webp");
P("skincare", "Hộp mặt nạ Retinol 30 miếng", "seal", 460, 230,"https://down-vn.img.susercontent.com/file/sg-11134207-8258s-msku46mx5cll79.webp");
P("skincare", "Lotion dưỡng sáng 377", "seal", 300, 150,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-moxk0jmekzrj91.webp");

/* ---------- CHỐNG NẮNG ---------- */
P("chongnang", "Kem chống nắng Bioré", "seal", 256, 127,"https://biorevietnam.vn/wp-content/uploads/2023/08/1-2.png");
P("chongnang", "Bioré UV Aqua Rich", "seal", 200, 100,"https://biorevietnam.vn/wp-content/uploads/2023/08/2-1.png");
P("chongnang", "Serum chống nắng La Roche-Posay", "test", 520, 250,"https://www.guardian.com.vn/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/l/a/larocheposay-product-sun-anthelios-uvair_serum_sunscreen-spf50_50ml-3337875932349-atf-pim-packshot_front.jpg");
P("chongnang", "Kem chống nắng La Roche-Posay", "seal", 520, 250,"https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90):format(webp)/lrp_anthelios_uvmune_400_oil_gel_cream_ap_bottle_packshot_front_f43835fdee.png");
P("chongnang", "Kem chống nắng Medicube", "test", 390, 195,"https://img.lazcdn.com/g/p/b4821ff3523559a71e8b3c425743fd75.jpg_720x720q80.jpg_.webp");
P("chongnang", "Kem chống nắng BOM", "seal", 490, 245,"https://www.guardian.com.vn/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/3/0/3019908_1_.jpg");
P("chongnang", "Kem chống nắng Ositree", "test", 312, 156,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mmfs3plwfncw32.webp");
P("chongnang", "Kem chống nắng Simple", "test", 229, 100,"https://www.guardian.com.vn/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/s/i/simple_hi_guideline4_hydrating.png");
P("chongnang", "Kem chống nắng Edit B", "test", 467, 233,"https://i.ebayimg.com/images/g/m24AAeSwg41o8faX/s-l1600.webp");
P("chongnang", "Kem chống nắng Dear Klairs", "test", 300, 150,"https://medias.watsons.vn/publishing/WTCVN-219369-front-IT6TQb21-zoom.png?version=1790355618&imageresize=680_680");
P("chongnang", "Kem chống nắng Neutrogena", "test", 270, 135,"https://www.guardian.com.vn/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/o/copy_of_hi_nh_a_nh_listing_3__1_3.png");
P("chongnang", "Kem chống nắng Meiking", "test", 250, 125,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mt9h6fkrf66gd6.webp");
P("chongnang", "Kem chống nắng Cerave", "seal", 340, 170,"https://www.guardian.com.vn/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/c/o/copy_of_h_nh_nh_listing_89__1.png");
P("chongnang", "Kem chống nắng Sahemul", "seal", 270, 135,"https://cdn.famitaa.net/storage/uploads/noidung/kem-chong-nang-sahemul-50g_00818.webp");
P("chongnang", "Kem chống nắng Loreal", "test", 380, 190,"https://www.guardian.com.vn/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/3/0/3027053_5_.png");

/* ---------- NỀN, LÓT & PHẤN ---------- */
P("nen", "Kem nền BOM", "test", 526, 260,"https://www.guardian.com.vn/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/s/9/s997a8b07b4334a07b5446ff2fecaa834u_up78xgysmkwceqsi.png");
P("nen", "Kem nền Hexze", "seal", 164, 82,"https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mglshdv7rmyyb2.webp");
P("nen", "Kem nền Mistine", "seal", 250, 125,"https://down-vn.img.susercontent.com/file/sg-11134201-7rd3k-ltyvlqyb3eupaf.webp");
P("nen", "Kem nền Dopi", "seal", 220, 110,"https://www.guardian.com.vn/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/b/a/backshot_1.jpg");
P("nen", "Kem nền Ucanbe", "seal", 189, 94,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mj0qyhmgfw1tbf.webp");
P("nen", "Kem nền Kate", "test", 280, 140,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mk1qu8qwzf9e67.webp");
P("nen", "Kem nền Carslan", "seal", 324, 162,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mtsz0vo7zimgf0.webp");
P("nen", "Kem Nền chống nắng Carslan", "test", 400, 200,"https://down-vn.img.susercontent.com/file/vn-11134201-81ztc-mrpm3p3dx4w10f.webp");
P("nen", "Kem Nền Carslan Black Magnet", "test", 300, 150,"https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mhrf4rw6cp34e0.webp");
P("nen", "Kem nền Meiking", "seal", 180, 90,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mthyjk933cay45.webp");
P("nen", "Kem nền Loreal", "test", 330, 165,"https://down-vn.img.susercontent.com/file/vn-11134201-7ras8-maupocjkdejc7a.webp");
P("nen", "Kem nền Perfect Diary", "seal", 257, 128,"https://down-vn.img.susercontent.com/file/sg-11134201-7rd56-lx7uq03gzux4d6@resize_w900_nl.webp");
P("nen", "Kem lót Ositree", "seal", 200, 100,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://s3-images.chiaki.vn/seller/1768819241300/cloud-image-1768819241300-2.png");
P("nen", "Kem lót Hoa Tây Tử", "test", 720, 360,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mq35w4hzqh3i94.webp");
P("nen", "Kem lót Mistine", "seal", 220, 110,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mtnlinbewnb575.webp");
P("nen", "Kem lót FunnyElves", "seal", 340, 170,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mmnhkchqgv7m02.webp");
P("nen", "Kem lót Focallure", "seal", 160, 160,"https://down-vn.img.susercontent.com/file/cn-11134207-7ras8-m48oo18g5a8p45.webp");
P("nen", "Kem lười nâng tone Little Ondine", "seal", 260, 130,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mrn9wp0fz4ec65.webp");
P("nen", "Che khuyết điểm Redchamber", "test", 800, 400,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mtqgo7loqpl1bc.webp");
P("nen", "Che khuyết điểm đa năng 5 màu Mooekiss", "test", 186, 93,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-msy2doszd2bofa.webp");
P("nen", "Cushion Carslan", "seal", 430, 215,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mts9fl5ipwqq41.webp");
P("nen", "Cushion Hexze 3in1", "seal", 172, 86,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mqiw3tv1b5zi31.webp");
P("nen", "Cushion About Cell", "seal", 320, 160,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mmtq3spovhtt13.webp");
P("nen", "Cushion Hoa Tây tử có lõi thay thế", "seal",700, 350,"https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mi4e7wuzuz2e3c.webp");
P("nen", "Cushion Ages'20", "seal",550, 275,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mrtkjmiw1r7la6.webp");
P("nen", "Cushion Mooekiss", "seal", 250, 125,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mpc34c8c52iq0d.webp");
P("nen", "Cushion Colorkey", "seal", 250, 125,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mnuajb17deyt7a.webp");
P("nen", "Cushion CITRINE", "seal", 540, 270,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mubyghvdut4xe7.webp");
P("nen", "Cushion Essence Nâng Tone Kiềm Dầu ", "seal", 259, 125,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mp0pi55a800035.webp");
P("nen", "Cushion Mistine", "seal", 390, 194,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mothg81kh91p98.webp");
P("nen", "Cushion Dirovo", "seal", 280, 140,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mn30zqdry5mw6a.webp");
P("nen", "Cushion Focallure", "seal", 160, 80,"https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljp3a8ovl9kkaf.webp");
P("nen", "Phấn phủ Pramy", "test", 334, 164,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mu7ft4s8q2o170.webp");
P("nen", "Phấn phủ thuỷ tinh MENOW", "seal", 180, 90,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mpj4kfgfn08w0e.webp");
P("nen", "Phấn Phủ Nén Thỏ Menow Rabbit Compact Powder", "test", 200, 100,"https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mh0734enrj0sa9.webp");
P("nen", "Phấn phủ JMCY", "seal", 80, 40,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mum1u6pgl4w1fc.webp");
P("nen", "Phấn phủ Judydoll", "test", 180, 90,"https://down-vn.img.susercontent.com/file/sg-11134201-825az-muop68xu47bed1.webp");
P("nen", "Phấn Nén MURMURMUSE", "test", 260, 130,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-munag2srqo7ad4.webp");
P("nen", "Phấn phủ Colorkey", "seal", 290, 145,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mlhs6fwwp8njcb.webp");
P("nen", "Phấn phủ Meiking", "seal", 250, 125,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mt4mvfxz32tmcc.webp");
P("nen", "Phấn phủ Carslan", "test", 350, 175,"https://down-vn.img.susercontent.com/file/vn-11134201-81ztc-mtg76u9gyvi9cc.webp");
P("nen", "Phấn phủ Mooekiss", "seal", 160, 80,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-muixzt3fpede10.webp");
P("nen", "Phấn phủ Focallure", "seal", 63, 30,"https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2d89jvs04vo2d.webp");
P("nen", "Phấn phủ Timephoria", "test", 280, 140,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-msywcnslbtoie7.webp");

/* ---------- MÁ HỒNG & KHỐI ---------- */
P("ma", "Má hồng Timephoria", "test", 210, 105,"https://cdn.hstatic.net/products/1000006063/download_fcd7d2afccb54cce81f4d2963d5d43a5_1024x1024.jpg");
P("ma", "Má hồng cushion Into You", "test", 256, 125,"https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mgoss1zvuxho06.webp");
P("ma", "Má hồng Romantic Beauty", "seal", 146, 73,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mubw2c3tq5mqb8.webp");
P("ma", "Má hồng Mooekiss", "test", 140, 70,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-msqu35whnkeg15.webp");
P("ma", "Má hồng Chéeryep", "test", 350, 160,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mododux48s254d.webp");
P("ma", "Má hồng Judydoll", "seal", 290, 145,"https://bizweb.dktcdn.net/100/348/157/files/vn-11134207-7r98o-lwu4om2m7qvvb4.jpg?v=1727229370003");
P("ma", "Má hồng Menow", "test", 100, 50,"https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m767fted614od5.webp");
P("ma", "Má hồng JOOCYEE", "test", 300, 150,"https://down-vn.img.susercontent.com/file/sg-11134201-82595-muwxddp9io7972.webp");
P("ma", "Má hồng SHEGLAM", "test", 140, 70,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mthm3z8adjwn31.webp");
P("ma", "Má hồng Judydoll mini", "seal", 100, 50,"https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mc3eaj1d3ib663.webp");
P("ma", "Má hồng XiXi", "test", 80, 40,"https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lnlgqezbr3q3bf.webp");
P("ma", "Má hồng Focallure", "test", 154, 76,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mun9mzbbve2u5f.webp");
P("ma", "Highlight Rocksweet", "seal", 160, 80,"https://down-vn.img.susercontent.com/file/sg-11134201-81zu0-mmu0ijblpd6q9d.webp");
P("ma", "Highlight Cheeryep Pillow Gem Powder", "test", 370, 170,"https://down-vn.img.susercontent.com/file/sg-11134201-81zvk-mn1b1mm90wzn90.webp");
P("ma", "Highlight Trendbeauty", "test", 235, 115,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mukkcjhji803d0.webp");
P("ma", "RED CHAMBER WANDERING Flawless Compact Powder", "test", 690, 345,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-muxeba0scphm0e.webp");
P("ma", "Bảng highlight & khối Little Ondine", "test", 571, 270,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mjpa6njng3d178.webp");
P("ma", "Bảng khối Hoa Tây Tử", "test", 698, 348,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mgvq08du639l08.webp");
P("ma", "Bảng khối Hexze", "test", 140, 70,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mqf2hugxfbbi8d.webp");
P("ma", "Bảng khối Judydoll", "seal", 340, 170,"https://down-vn.img.susercontent.com/file/sg-11134201-823qr-molmbibldv5ub2.webp");
P("ma", "Bảng Tạo Khối & Highlight Đa Năng Out Of Office", "test", 300, 150,"https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mj81j6bpwgea03.webp");
P("ma", "Bảng trang điểm đa năng Menow", "seal", 220, 110,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mssjpteuwhs08d.webp");
P("ma", "Bảng trang điểm đa năng JOOCYEE ", "test", 700, 340,"https://down-vn.img.susercontent.com/file/sg-11134201-825az-muyrccyoy8lgd6.webp");

/* ---------- MẮT & MÀY ---------- */
P("mat", "Bảng mắt Wosado", "seal", 170, 85,"https://down-vn.img.susercontent.com/file/cn-11134207-7ras8-m8o6ccq07vg2b9.webp");
P("mat", "Bảng mắt Judydoll", "seal", 310, 155,"https://down-vn.img.susercontent.com/file/vn-11134201-7ras8-mapbofznwk3l24.webp");
P("mat", "Bảng mắt XiXi", "test", 100, 50,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mdy8s1d7v8jrb1.webp");
P("mat", "Palette Mắt 12 Màu XIXI", "test", 100, 50,"https://down-vn.img.susercontent.com/file/cn-11134207-7ras8-ma2f9re3ms3gfa.webp");
P("mat", "Bảng mắt Focallure", "test", 194, 96,"https://medias.watsons.vn/publishing/WTCVN-218908-front-zoom.jpg?version=1785078712&imageresize=1280_1280");
P("mat", "Bảng phấn mắt Rock Sweet 5 Ô", "seal", 180, 90,"https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mibrtwk8p72b58.webp");
P("mat", "Bảng mắt Shedella", "seal", 140, 70,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mleodscsq9s224.webp");
P("mat", "Bảng mắt L'Adore Colors", "test", 160, 80,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mof72jv0bx1l23.webp");
P("mat", "Bảng mắt Mooekiss", "test", 169, 84,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mun7ol3sbi16b8.webp");
P("mat", "Bảng Phấn Mắt 4 Màu Trang Điểm KATE", "test", 270, 130,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mm5tlxrb4x6r58.webp");
P("mat", "Bảng Phấn Mắt 4 Màu Tông Nâu Tự Nhiên KATE Mellow Brown Eyes", "test", 220, 110,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mm5tkir098n54a.webp");
P("mat", "Phấn Mắt Đơn Joocyee Single Eyeshadow", "test", 220, 100,"https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m9xwj74ud8hw56.webp");
P("mat", "Kẻ mắt Amortals", "test", 112, 56,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mpm9ynr3qk9765.webp");
P("mat", "Mascara Mistine", "test", 190, 80,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mtqaduu4o2rpec.webp");
P("mat", "Mascara Maange", "seal", 126, 63,"https://down-vn.img.susercontent.com/file/sg-11134201-8262u-mk3rokffuholcf.webp");
P("mat", "Mascara Barenbliss", "seal", 80, 40,"https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m04enocmiljjc3.webp");
P("mat", "Chì kẻ lông mày Feilinka", "seal", 50, 25,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mifi3vs2o35s34.webp");
P("mat", "Kẻ mày M.Len Diary", "seal", 148, 74,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mu0fmoroewhsec.webp");
P("mat", "Kẻ mày Amortals", "seal", 80, 40,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mmtu80me1jpcb0.webp");
P("mat", "Mascara Dazzle Me", "seal", 80, 40,"https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mi8dzgx3semg35.webp");

/* ---------- SON MÔI ---------- */
P("son", "Son Carslan", "test", 209, 100,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mtsbdw1gpe6e85.webp");
P("son", "Son Mooekiss", "test", 169, 84,"https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mjlkwj2b3pqe43.webp");
P("son", "Son Into You", "seal", 200, 100,"https://down-vn.img.susercontent.com/file/sg-11134301-8257s-mt9a7r1el8g4c9.webp");
P("son", "Son Mistine", "test", 143, 70,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mop65few2ewx53.webp");
P("son", "Son Romand", "test", 226, 113, "https://bizweb.dktcdn.net/thumb/1024x1024/100/193/981/products/son-romand-juicy-lasting-tint-bang-mau-1.png");
P("son", "Son Focallure", "seal", 130, 65, "https://down-vn.img.susercontent.com/file/sg-11134201-820nx-mnwo82lq75z5dd.webp");
P("son", "Son Timephoria", "test", 180, 90,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mk28s0oa0gzk4b.webp");
P("son", "Son SHATAIL", "test", 180, 90,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mtp0higsgiyv84.webp");
P("son", "Son Colorkey", "test", 170, 85,"https://down-vn.img.susercontent.com/file/sg-11134201-81zw0-mizl16wm8hdsce.webp");
P("son", "Son Bóng JOOCYEE Glazed Lipgloss ", "test", 350, 170,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mo5bef7cx3ib6c.webp");
P("son", "Son Bóng Khóa Màu Judydoll Stay Shine Lipstick ", "seal", 300, 150,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mtoyk8z1g2yw59.webp");
P("son", "AZTK Son Thỏi Bóng Căng Bóng Mềm Môi", "seal", 129, 60,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mtdp7nnoqo09df.webp");

/* ---------- PHỤ KIỆN & KHÁC ---------- */
P("khac", "Xịt khóa nền Mistine", "seal", 160, 80,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mefdwelnwlj635.webp");
P("khac", "Xịt khóa nền JM Solution", "seal", 160, 80,"https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2q8pjqayl8mbb.webp");
P("khac", "Xịt Khóa Trang Điểm Colorkey ", "seal", 160, 80,"https://www.guardian.com.vn/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/_/1_58_3.jpg");
P("khac", "Mút đánh nền + cọ tán nền BLJ", "seal", 324, 150,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mop9ge5umjuqff.webp");
P("khac", "Bộ cọ trang điểm Maange 14 cây", "seal", 180, 90,"https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mibh5hsmnsw4f9.webp");
P("khac", "Bộ cọ trang điểm Gu Việt", "seal", 440, 220,"https://bizweb.dktcdn.net/thumb/grande/100/348/157/products/nau-biaweb-ne-01.jpg?v=1749357245690");
P("khac", "Nước hoa", "seal", 120, 60,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mrfop37uilmp94.webp");
P("khac", "Xịt mọc tóc Lab On Hair", "seal", 160, 80,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mr9nlv5ks4xu47.webp");
P("khac", "Serum dưỡng tóc Dove", "seal", 250, 125,"https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mlg3ew5f9n2n58.webp");
P("khac", "Xịt dưỡng tóc Dherbal", "seal", 220, 110,"https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mf5u1nijm8loe3.webp");
P("khac", "Sữa tắm Purité", "seal", 200, 100,"https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m6pb5ruw10ewab.webp");
P("khac", "Muối tắm Baresoul", "seal", 232, 116,"https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2nal91kgtdmd3.webp");
P("khac", "Tẩy Tế Bào Chết Cindy Bloom", "seal", 200, 100,"https://down-vn.img.susercontent.com/file/sg-11134201-825a9-mu906lhtcrnqde.webp");
P("khac", "Túi Bagsmart", "seal", 600, 300,"https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mk0ng0ksnbwo5d.webp");