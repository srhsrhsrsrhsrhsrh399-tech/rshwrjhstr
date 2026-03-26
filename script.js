const logos = ['💎','🏆','✨','💰','🎖️'];
for(let i=0;i<30;i++){
  const span = document.createElement('span');
  span.className = 'bg-logo';
  span.innerText = logos[Math.floor(Math.random()*logos.length)];
  span.style.left = Math.random()*100 + '%';
  span.style.fontSize = 15 + Math.random()*25 + 'px';
  span.style.animationDuration = 8 + Math.random()*12 + 's';
  document.body.appendChild(span);
}

function calculate() {
  let P = parseFloat(document.getElementById("amount").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let type = document.getElementById("rateType").value;
  let years = parseInt(document.getElementById("years").value)||0;
  let months = parseInt(document.getElementById("months").value)||0;
  let t = years*12 + months;
  let result = document.getElementById("result");

  if (!P || !rate || t <= 0) {
    result.innerHTML = "⚠️ Fill correct data";
    result.classList.add("show");
    return;
  }

  let r = type === "yearly" ? rate / 12 : rate;
  let interest = (P * r * t) / 100;
  let total = P + interest;

  result.innerHTML = `
  <b>Total:</b> ₹ ${total.toFixed(2)}<br><br>
  <b>Interest:</b> ₹ ${interest.toFixed(2)}
  `;

  result.classList.add("show");
}
