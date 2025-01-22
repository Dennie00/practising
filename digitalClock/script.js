const switchBtn = document.getElementById("switchMode");
let isLight = true;
const container = document.getElementById("container");

function switchModes() {
  isLight = !isLight;

  if (isLight) {
    container.style.backgroundImage = "url('images/lightMode.jpg')";
    switchBtn.textContent = "🌙"; 
    switchBtn.style.color = "black";
  } else {
    container.style.backgroundImage = "url('images/darkMode.jpg')";
    switchBtn.textContent = "☀";
    switchBtn.style.color = "white";

  }
}



switchBtn.addEventListener("click", switchModes)


function actualTime() {
  const clock = document.getElementById("clock");
  const datum = document.getElementById("datum");

  let now = new Date;

  const day = now.getDate().toString().padStart(2, 0);;
  const month = (now.getMonth() + 1).toString().padStart(2, 0);
  const year = now.getFullYear();

  
  
  
  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  
  const actualTime = `${hours}:${minutes}:${seconds}`;
  const todayDate = `${day}. ${month}. ${year}`

  clock.textContent = actualTime;
  datum.textContent = todayDate

}
actualTime();

setInterval(actualTime, 1000);