const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

const setClock = () => {
 const currentDate = new Date();
 const secondRatio = currentDate.getSeconds() / 60;
 const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
 const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

 startRotation(secondHand, secondRatio);
 startRotation(minuteHand, minuteRatio);
 startRotation(hourHand, hourRatio);

 //Digital Clock
 const digTime = document.getElementById("digTime");
 const span = document.getElementById('span');
 span.innerHTML = 'hello'
 const currTime = new Date();
 currTime.getHours() >= 12? span.innerHTML = "pm": span.innerHTML = 'am';
 digTime.innerHTML = `${currTime.getHours()}:${currTime.getMinutes()}:${currTime.getSeconds()}`;
};
setInterval(setClock, 1000);

const startRotation = (e, rotationRatio) => {
 e.style.setProperty("--rotation", rotationRatio * 360);
};

setClock();
