// clock.js

// --- Real-Time Clock ---
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const clock = document.getElementById('clock');
  if (clock) clock.textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// --- Player Image Carousels ---
const playerImages = {
  drose: ["images/drose.jpg", "images/drose2.jpg", "images/drose3.jpg"],
  demar: ["images/demar.jpg", "images/demar2.jpg", "images/demar3.jpg"],
  matas: ["images/matas.jpg", "images/matas2.jpg", "images/matas3.jpg"]
};

const currentIndexes = {
  drose: 0,
  demar: 0,
  matas: 0
};

function showImage(playerId) {
  const imgElement = document.getElementById(`${playerId}-image`);
  if (!imgElement) return;
  imgElement.src = playerImages[playerId][currentIndexes[playerId]];
  imgElement.alt = `${playerId} image ${currentIndexes[playerId] + 1}`;
}

function nextImage(playerId) {
  if (!playerImages[playerId]) return;
  currentIndexes[playerId] = (currentIndexes[playerId] + 1) % playerImages[playerId].length;
  showImage(playerId);
}

function prevImage(playerId) {
  if (!playerImages[playerId]) return;
  currentIndexes[playerId] = (currentIndexes[playerId] - 1 + playerImages[playerId].length) % playerImages[playerId].length;
  showImage(playerId);
}

// Initialize carousels once the page has fully loaded
window.addEventListener('DOMContentLoaded', () => {
  Object.keys(playerImages).forEach(playerId => {
    showImage(playerId);
  });
});

