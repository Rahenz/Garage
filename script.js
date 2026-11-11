document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const door = document.getElementById('garageDoor');
  const car = document.querySelector('.intro-car');
  const bar = document.getElementById('progressBar');
  const percent = document.getElementById('progressText');
  const copy = document.getElementById('loadingCopy');
  const start = document.getElementById('startEngine');
  const skip = document.getElementById('skipIntro');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Intro garage: door opens, car rolls out, then visitor starts the site.
  let progress = 0;
  const steps = [
    [8, 'CHECKING GARAGE SYSTEM...'],
    [24, 'OPENING GARAGE DOOR...'],
    [52, 'STARTING THE SKYLINE...'],
    [78, 'READY TO ROLL...'],
    [100, 'GARAGE READY.']
  ];
  let step = 0;
  const timer = setInterval(() => {
    progress = Math.min(100, progress + 2);
    bar.style.width = progress + '%';
    percent.textContent = progress + '%';
    if (step < steps.length && progress >= steps[step][0]) {
      copy.textContent = steps[step][1];
      if (progress >= 24) door.classList.add('open');
      if (progress >= 52) car.classList.add('drive');
      step++;
    }
    if (progress === 100) {
      clearInterval(timer);
      start.disabled = false;
      start.textContent = 'START ENGINE ↗';
    }
  }, 90);

  function enterSite() {
    if (intro.classList.contains('hidden')) return;
    car.classList.add('exit');
    copy.textContent = 'WELCOME TO SYAHLA\'S GARAGE';
    setTimeout(() => intro.classList.add('hidden'), 650);
    document.body.classList.add('custom-cursor');
  }
  start.addEventListener('click', enterSite);
  skip.addEventListener('click', enterSite);

  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
});
