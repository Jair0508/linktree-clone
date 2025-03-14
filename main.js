function updateOrientationClass() {
  const body = document.body;

  body.classList.remove('portrait-mode', 'landscape-mode');

  const orientation = window.screen.orientation.type;

  if (orientation.startsWith('portrait')) {
    body.classList.add('portrait-mode');
  } else if (orientation.startsWith('landscape')) {
    body.classList.add('landscape-mode');
  }
}

window.addEventListener('orientationchange', () => {
  updateOrientationClass();
});

updateOrientationClass();
