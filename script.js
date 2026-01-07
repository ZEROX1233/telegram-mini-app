const tg = window.Telegram.WebApp;
tg.expand();

const storeHTML = `
  <h2>🛒 NFT Store</h2>

  <div class="card">
    <img src="https://i.postimg.cc/kGyc1L6D/photo-2026-01-05-15-00-06.jpg" width="150">
    <h3>UFC</h3>
    <p>Price: ₹2999</p>
    <button onclick="buy()">BUY</button>
  </div>
`;

document.body.innerHTML = storeHTML;

function buy() {
  // Show Telegram back button
  tg.BackButton.show();

  document.body.innerHTML = `
    <h2 style="text-align:center;">💰 Pay via UPI</h2>

    <div style="text-align:center; margin:20px;">
      <img src="https://i.postimg.cc/x8dnxJt4/photo-2026-01-07-13-28-16.jpg" width="200">
    </div>

    <p style="text-align:center;"><b>UPI ID:</b> yourupi@bank</p>
    <p style="text-align:center;"><b>Amount:</b> ₹2999</p>

    <p style="text-align:center;">Payment ke baad <b>UTR</b> admin ko bhejo</p>
  `;

  // Back button click handler
  tg.BackButton.onClick(() => {
    tg.BackButton.hide();
    document.body.innerHTML = storeHTML;
  });
}
