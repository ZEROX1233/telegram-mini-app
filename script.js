const tg = window.Telegram.WebApp;
tg.expand();

/* ===== STORE PAGE ===== */
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

/* ===== PAYMENT PAGE ===== */
function showPayment() {
  document.body.innerHTML = `
    <button onclick="showStore()" style="margin:10px;">⬅️ Back</button>

    <h2 style="text-align:center;">💰 Pay via UPI</h2>

    <div style="text-align:center; margin:20px;">
      <img src="https://i.postimg.cc/abcd1234/upi-qr.png" width="200">
    </div>

    <p style="text-align:center;"><b>UPI ID:</b> yourupi@bank</p>
    <p style="text-align:center;"><b>Amount:</b> ₹299</p>

    <div style="text-align:center; margin-top:20px;">
      <input 
        id="utr"
        placeholder="Enter UTR Number"
        style="padding:10px; width:80%; font-size:16px;"
      >
    </div>

    <div style="text-align:center; margin-top:15px;">
      <button onclick="submitUTR()" style="padding:10px 20px;">
        Submit UTR
      </button>
    </div>
  `;
}

/* ===== UTR SUBMIT ===== */
function submitUTR() {
  const utr = document.getElementById("utr").value;

  if (!utr) {
    alert("Please enter UTR number");
    return;
  }

  // Send UTR to Telegram bot chat
  tg.sendData(JSON.stringify({
    nft: "Ice Cream NFT",
    amount: 299,
    utr: utr
  }));

  alert("UTR sent to admin. NFT will be delivered after verification ✅");
  showStore();
}

/* First load */
showStore();
