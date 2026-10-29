/* ============================================================
   LOGIC CỦA TRANG WEB (hiển thị sản phẩm, lọc, giỏ hàng)
   Thông thường bạn KHÔNG cần sửa file này.
   Đổi SĐT / link mạng xã hội ở phần CONFIG bên dưới.
   ============================================================ */

const CONFIG = {
  phone: "0384940597",
  zalo: "https://zalo.me/0384940597",
  facebook: "https://www.facebook.com/lannnnanhhhh",
  tiktok: "https://www.tiktok.com/@lananh113388",
};

const EMOJI = {
  lamsach: "🧼", skincare: "💧", chongnang: "☀️", nen: "🎨",
  ma: "🌸", mat: "👁️", son: "💄", khac: "🎀",
};

const $ = (s) => document.querySelector(s);
const money = (n) => n.toLocaleString("vi-VN") + "đ";

let state = { cat: "all", q: "", status: "all", sort: "default" };
let cart = [];
try { cart = JSON.parse(localStorage.getItem("lanem_cart") || "[]"); } catch (e) { cart = []; }

/* ---------- Tabs danh mục ---------- */
function renderTabs() {
  const box = $("#tabs");
  const left = box.scrollLeft; // giữ vị trí cuộn khi bấm đổi danh mục
  box.innerHTML = CATEGORIES.map(
    (c) => `<button class="tab ${c.id === state.cat ? "on" : ""}" data-cat="${c.id}">${c.emoji} ${c.label}</button>`
  ).join("");
  box.scrollLeft = left;
}

/* Kéo chuột để cuộn ngang thanh danh mục (trên điện thoại vuốt tay như bình thường) */
(function enableTabDrag() {
  const box = $("#tabs");
  let down = false, moved = false, startX = 0, startLeft = 0;
  box.addEventListener("mousedown", (e) => {
    down = true; moved = false; startX = e.pageX; startLeft = box.scrollLeft;
  });
  window.addEventListener("mousemove", (e) => {
    if (!down) return;
    const dx = e.pageX - startX;
    if (!moved && Math.abs(dx) > 5) { moved = true; box.classList.add("dragging"); }
    if (moved) box.scrollLeft = startLeft - dx;
  });
  window.addEventListener("mouseup", () => { down = false; box.classList.remove("dragging"); });
  // Vừa kéo xong thì không tính là bấm vào tab
  box.addEventListener("click", (e) => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
  // Lăn chuột dọc trên thanh danh mục -> cuộn ngang
  box.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && box.scrollWidth > box.clientWidth) {
      const atStart = box.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = box.scrollLeft + box.clientWidth >= box.scrollWidth - 1 && e.deltaY > 0;
      if (!atStart && !atEnd) { e.preventDefault(); box.scrollLeft += e.deltaY; }
    }
  }, { passive: false });
})();

/* ---------- Danh sách sản phẩm ---------- */
function bỏDấu(s) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
}

function getFiltered() {
  const q = bỏDấu(state.q.trim());
  let list = PRODUCTS.filter((p) =>
    (state.cat === "all" || p.cat === state.cat) &&
    (state.status === "all" || p.status === state.status) &&
    (!q || bỏDấu(p.name).includes(q))
  );
  if (state.sort === "asc") list.sort((a, b) => (a.sale ?? 1e12) - (b.sale ?? 1e12));
  if (state.sort === "desc") list.sort((a, b) => (b.sale ?? -1) - (a.sale ?? -1));
  return list;
}

function renderGrid() {
  const list = getFiltered();
  $("#resultCount").textContent = `${list.length} sản phẩm`;
  if (!list.length) {
    $("#grid").innerHTML = `<div class="empty">Không tìm thấy sản phẩm 😢<br>Nhắn mình, biết đâu còn hàng chưa kịp đăng nè!</div>`;
    return;
  }
  $("#grid").innerHTML = list.map((p) => {
    const off = p.orig && p.sale && p.sale < p.orig ? Math.round((1 - p.sale / p.orig) * 100) : 0;
    const emoji = EMOJI[p.cat] || "🎀";
    const thumb = p.img
      ? `<img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async" referrerpolicy="no-referrer" class="fit-${p.fit}" onerror="this.replaceWith(document.createTextNode('${emoji}'))" />`
      : emoji;
    const price = p.sale
      ? `<b>${money(p.sale)}</b>${p.orig && p.orig !== p.sale ? `<s>${money(p.orig)}</s>` : ""}`
      : `<b>Liên hệ</b>`;
    return `
      <article class="card">
        <div class="thumb">${thumb}
          <span class="badge ${p.status}">${p.status === "seal" ? "Nguyên seal" : "Test 1 lần"}</span>
          ${off ? `<span class="off">-${off}%</span>` : ""}
        </div>
        <div class="info">
          <h3>${p.name}</h3>
          <div class="price">${price}</div>
          <div class="actions">
            <button class="add" data-add="${p.id}">+ Thêm vào giỏ</button>
          </div>
        </div>
      </article>`;
  }).join("");
}

/* ---------- Giỏ hàng ---------- */
function saveCart() {
  try { localStorage.setItem("lanem_cart", JSON.stringify(cart)); } catch (e) {}
  renderCart();
}

function addToCart(id) {
  const row = cart.find((r) => r.id === id);
  if (row) row.qty++; else cart.push({ id, qty: 1 });
  saveCart();
  const el = $("#cartCount");
  el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump");
  toast("Đã thêm vào giỏ 💕");
}

function changeQty(id, d) {
  const row = cart.find((r) => r.id === id);
  if (!row) return;
  row.qty += d;
  if (row.qty <= 0) cart = cart.filter((r) => r.id !== id);
  saveCart();
}

function cartLines() {
  return cart.map((r) => ({ p: PRODUCTS.find((x) => x.id === r.id), qty: r.qty })).filter((x) => x.p);
}

function renderCart() {
  const lines = cartLines();
  $("#cartCount").textContent = lines.reduce((s, l) => s + l.qty, 0);
  if (!lines.length) {
    $("#cartItems").innerHTML = `<div class="cart-empty">Giỏ hàng đang trống 🛍️</div>`;
    $("#cartTotal").textContent = "0đ";
    return;
  }
  $("#cartItems").innerHTML = lines.map(({ p, qty }) => `
    <div class="cart-row">
      <div class="nm">${p.name}<div class="pr">${p.sale ? money(p.sale) : "Liên hệ"} · ${p.status === "seal" ? "Nguyên seal" : "Test 1 lần"}</div></div>
      <div class="qty">
        <button data-dec="${p.id}">−</button><span>${qty}</span><button data-inc="${p.id}">+</button>
      </div>
    </div>`).join("");
  const total = lines.reduce((s, l) => s + (l.p.sale || 0) * l.qty, 0);
  $("#cartTotal").textContent = money(total);
}

function orderText() {
  const lines = cartLines();
  const total = lines.reduce((s, l) => s + (l.p.sale || 0) * l.qty, 0);
  return (
    "Chào Lan Anh, mình muốn mua:\n" +
    lines.map((l, i) => `${i + 1}. ${l.p.name} (${l.p.status === "seal" ? "nguyên seal" : "test 1 lần"}) x${l.qty} - ${l.p.sale ? money(l.p.sale) : "liên hệ"}`).join("\n") +
    `\nTạm tính: ${money(total)}\nBạn tư vấn giúp mình nhé!`
  );
}

function openCart(open) {
  $("#drawer").classList.toggle("open", open);
  $("#overlay").classList.toggle("show", open);
}

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1600);
}

/* ---------- Sự kiện ---------- */
document.addEventListener("click", (e) => {
  const t = e.target.closest("button, a");
  if (!t) return;
  if (t.dataset.cat) { state.cat = t.dataset.cat; renderTabs(); renderGrid(); }
  if (t.dataset.add) addToCart(+t.dataset.add);
  if (t.dataset.inc) changeQty(+t.dataset.inc, 1);
  if (t.dataset.dec) changeQty(+t.dataset.dec, -1);
  if (t.closest("#navLinks")) $("#navLinks").classList.remove("open");
});

$("#search").addEventListener("input", (e) => { state.q = e.target.value; renderGrid(); });
$("#statusFilter").addEventListener("change", (e) => { state.status = e.target.value; renderGrid(); });
$("#sortBy").addEventListener("change", (e) => { state.sort = e.target.value; renderGrid(); });
$("#cartBtn").addEventListener("click", () => openCart(true));
$("#closeCart").addEventListener("click", () => openCart(false));
$("#overlay").addEventListener("click", () => openCart(false));
$("#burger").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
$("#clearCart").addEventListener("click", () => { cart = []; saveCart(); });

$("#copyOrder").addEventListener("click", async () => {
  if (!cartLines().length) return toast("Giỏ hàng đang trống nè");
  const text = orderText();
  try { await navigator.clipboard.writeText(text); toast("Đã sao chép đơn! Dán vào Zalo nhé 💕"); }
  catch (err) { prompt("Sao chép đơn hàng này rồi gửi cho mình nhé:", text); }
  setTimeout(() => window.open(CONFIG.zalo, "_blank"), 600);
});

/* Đổi "active" trên menu khi cuộn */
const sections = ["top", "san-pham", "ve-minh", "cach-mua"];
window.addEventListener("scroll", () => {
  let cur = "top";
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top < 140) cur = id;
  });
  document.querySelectorAll("#navLinks a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
}, { passive: true });

$("#year").textContent = new Date().getFullYear();
renderTabs(); renderGrid(); renderCart();