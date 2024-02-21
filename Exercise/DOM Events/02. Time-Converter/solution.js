function attachEventsListeners() {
  const dayBtn = document.getElementById("daysBtn");
  const hourBtn = document.getElementById("hoursBtn");
  const minBtn = document.getElementById("minutesBtn");
  const secBtn = document.getElementById("secondsBtn");
  const dayInput = document.getElementById("days");
  const hourInput = document.getElementById("hours");
  const minInput = document.getElementById("minutes");
  const secInput = document.getElementById("seconds");
  dayBtn.addEventListener("click", (e) => {
    let base = dayInput.value;
    hourInput.value = base * 24;
    minInput.value = base * 1440;
    secInput.value = base * 86400;
  });
  hourBtn.addEventListener("click", (e) => {
    let base = hourInput.value;
    dayInput.value = base / 24;
    minInput.value = base * 60;
    secInput.value = base * 3600;
  });
  minBtn.addEventListener("click", (e) => {
    let base = minInput.value;
    dayInput.value = base / 1440;
    hourInput.value = base / 60;
    secInput.value = base * 60;
  });
  secBtn.addEventListener("click", (e) => {
    let base = secInput.value;
    dayInput.value = base / 86400;
    hourInput.value = base / 3600;
    minInput.value = base / 60;
  });
}
