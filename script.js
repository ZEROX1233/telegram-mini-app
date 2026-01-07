const tg = window.Telegram.WebApp;
tg.expand();

function buy() {
  document.body.innerHTML = `
    <h2 style="text-align:center;">💰 Pay via UPI</h2>

    <!-- Apni QR Image ka link yaha paste karo -->
    <div style="text-align:center; margin:20px;">
      <img src="https://i.postimg.cc/x8dnxJt4/photo-2026-01-07-13-28-16.jpg" width="200" alt="UPI QR">
    </div>

    <p style="text-align:center;"><b>UPI ID:</b> Vipul9784@axl</p>
    <p style="text-align:center;"><b>Amount:</b> ₹2999</p>

    <p style="text-align:center; color:#FFD700;">
      Payment ke baad <b>UTR number</b> admin ko bhejo- @Angelic_Man
    </p>

    <div style="text-align:center; margin-top:20px;">
      <button style="padding:10px 20px; font-size:16px;" onclick="tg.Back()">Back to Store</button>
    </div>
  `;
}
