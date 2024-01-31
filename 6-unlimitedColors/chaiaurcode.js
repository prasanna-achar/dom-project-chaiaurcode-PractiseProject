const start = document.querySelector(`#start`);
const stop = document.querySelector(`#stop`);

function randomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
let intervalId;
colorChange = () => {
  document.body.style.backgroundColor = randomColor();
};

start.addEventListener(`click`, () => {
  intervalId = setInterval(colorChange, 1000);
});

stop.addEventListener(`click`, () => {
  clearInterval(intervalId);
  intervalId = null;
});
