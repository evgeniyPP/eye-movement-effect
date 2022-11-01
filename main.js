const base = document.getElementById('base');
const eyes = document.querySelectorAll('.eye');

const rect = base.getBoundingClientRect();
const baseX = rect.left + rect.width / 2;
const baseY = rect.top + rect.height / 2;

document.addEventListener('mousemove', e => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const angle = getAngle(mouseX, mouseY, baseX, baseY);

  eyes.forEach(eye => {
    eye.style.transform = `rotate(${90 + angle}deg)`;
  });
});

function getAngle(cX, cY, eX, eY) {
  const dY = eY - cY;
  const dX = eX - cX;

  const radius = Math.atan2(dY, dX);
  const degrees = (radius * 180) / Math.PI;

  return degrees;
}
