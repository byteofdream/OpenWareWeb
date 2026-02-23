const page = document.body.dataset.page;
const links = Array.from(document.querySelectorAll('.nav-link'));
const fpsEl = document.getElementById('fps');
const frameEl = document.getElementById('frametime');
const clockEl = document.getElementById('clock');

links.forEach((link) => {
  const isActive = link.dataset.page === page;
  link.classList.toggle('active', isActive);
});

let t = 0;
function tickTelemetry() {
  if (!fpsEl || !frameEl) {
    return;
  }

  t += 1;
  const fps = 57 + Math.sin(t * 0.17) * 5 + Math.random() * 1.4;
  const frameMs = 1000 / Math.max(fps, 1);
  fpsEl.textContent = fps.toFixed(1);
  frameEl.textContent = `${frameMs.toFixed(2)} ms`;
}

function tickClock() {
  if (!clockEl) {
    return;
  }
  clockEl.textContent = new Date().toLocaleTimeString('en-GB');
}

setInterval(tickTelemetry, 450);
setInterval(tickClock, 1000);
tickTelemetry();
tickClock();
