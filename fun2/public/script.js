const container = document.querySelector('.balloon-container');

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.left = `${Math.random() * 100}%`;
  balloon.style.animationDuration = `${5 + Math.random() * 5}s`;

  container.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 10000);
}

setInterval(createBalloon, 300);

// Add: Play audio when Love button is clicked
const loveBtn = document.getElementById('love-btn');
const loveAudio = document.getElementById('love-audio');
if (loveBtn && loveAudio) {
  loveBtn.addEventListener('click', () => {
    loveAudio.play();
  });
}

