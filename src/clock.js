const nowTime = document.getElementById("clock");

function nowClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  nowTime.innerText = `${hours}:${minutes}`;
}
nowClock();
setInterval(nowClock, 1000);
