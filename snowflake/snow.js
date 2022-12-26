const body = document.querySelector('body');
const MIN_DURATION = 5;

function mkSnowflake() {
  const snowflake = document.createElement('div');
  const delay = Math.random() * 5;
  const initialOpacity = Math.random();
  const duration = Math.random() * 10 + MIN_DURATION;

  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * window.screen.width}px`;
  snowflake.style.animationDelay = `${delay}s`;
  snowflake.style.opacity = initialOpacity;
  snowflake.style.animation = `fall ${duration}s linear`;

  body.appendChild(snowflake);

  setTimeout(() => {
    body.removeChild(snowflake);
    mkSnowflake();
  }, (duration + delay) * 1000);
}

for (let i = 0; i < 100; i++) {
  setTimeout(mkSnowflake, 200 * i);
}
