const curr = new Date();
const future = curr.getTime() + 2 * 60 * 60 * 1000;

function updateTimer() {

  now = new Date();

  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = (hours - days * 24).toString().padStart(2, '0');
  m = (mins - hours * 60).toString().padStart(2, '0');
  s = (secs - mins * 60).toString().padStart(2, '0');

  document.getElementById(
    'countdown'
  ).innerHTML = `<div>${h}<span>:</span></div><div>${m}<span>:</span></div><div>${s}<span></span></div>`;
}
setInterval('updateTimer()', 1000);