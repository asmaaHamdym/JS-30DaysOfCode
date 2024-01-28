const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const time = new Date();

  const seconds = time.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const minutes = time.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

  const hours = time.getHours();
  const hoursDegree = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);

setDate();
