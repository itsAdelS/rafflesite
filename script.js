document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Countdown
  const DRAW_DATE = new Date('2026-04-24T00:00:00').getTime();
  const countdownEl = document.getElementById('countdown');

  function updateCountdown() {
    const now = Date.now();
    const diff = DRAW_DATE - now;
    if (diff <= 0) return;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    const boxes = countdownEl.querySelectorAll('.time strong');
    boxes[0].textContent = d;
    boxes[1].textContent = h;
    boxes[2].textContent = m;
    boxes[3].textContent = s;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
});
