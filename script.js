const tg = window.Telegram.WebApp;
tg.expand();

/* ===== STORE ===== */
function showStore() {
  document.body.innerHTML = `
    <h2>🛒 NFT Store</h2>

    <div class="card">
      <img src="https://i.imgur.com/6XbXQyY.png" width="150">
      <h3>Ice Cream NFT</h3>
      <p>Price: ₹299</p>
      <button onclick="showPayment()">BUY</button>
    </div>
  `;
}

/* ===== PAYMENT ===== */
function showPayment() {
  document.body.innerHTML = `
    <button onclick="showStore()" style="margin:10px;">⬅️ Back</button>

    <h2 style="text-align:center;">💰 Pay via UPI</h2>

    <div style="text-align:center; margin:20px;">
      <img src="https://i.postimg.cc/abcd1234/upi-qr.png" width="200">
    </div>

    <p style="text-align:center;"><b>UPI ID:</b> yourupi@bank</p>
    <p style="text-align:center;"><b>Amount:</b> ₹299</p>

    <hr>

    <h3 style="text-align:center;">📸 Upload Payment Screenshot</h3>

    <div style="text-align:center;">
      <input type="file" accept="image/*">
    </div>

    <p style="text-align:center; margin-top:15px;">
      Screenshot upload karne ke baad<br>
      <b>Is screenshot ko admin ko Telegram me bhejo</b>
    </p>

    <div style="text-align:center; margin-top:10px;">
      <button onclick="openAdminChat()">Send Screenshot to Admin</button>
    </div>
  `;
}

/* ===== OPEN ADMIN CHAT ===== */
function openAdminChat() {
  tg.openTelegramLink("https://t.me/YOUR_ADMIN_USERNAME");
}

/* First load */
showStore();
