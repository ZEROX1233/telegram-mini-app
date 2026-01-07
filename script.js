const tg = window.Telegram.WebApp;
tg.expand();

/* ===== STORE PAGE ===== */
function showStore() {
  document.body.innerHTML = `
    <h2>🛒 NFT Market</h2>

    <div class="card">
      <img src="https://i.postimg.cc/kGyc1L6D/photo-2026-01-05-15-00-06.jpg" width="150">
      <h3>UFC</h3>
      <p>Price: ₹2999</p>
      <button onclick="showPayment()">BUY</button>
    </div>
  `;
}

/* ===== PAYMENT PAGE ===== */
function showPayment() {
  document.body.innerHTML = `
    <button onclick="showStore()" style="
      margin:10px;
      padding:8px 12px;
      font-size:14px;
    ">⬅️ Back</button>

    <h2 style="text-align:center;">💰 Pay via UPI</h2>

    <div style="text-align:center; margin:20px;">
      <img src="https://i.postimg.cc/x8dnxJt4/photo-2026-01-07-13-28-16.jpg" width="200">
    </div>

    <p style="text-align:center;"><b>UPI ID:</b> vipul9784@axl</p>
    <p style="text-align:center;"><b>Amount:</b> ₹2999</p>

    <p style="text-align:center;">
      Payment ke baad <b>UTR number</b> admin ko bhejo
    </p>
  `;
}

/* First load */
showStore();
