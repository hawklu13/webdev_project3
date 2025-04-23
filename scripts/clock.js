function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  document.getElementById('clock').textContent = timeString;
}

// Update every second
setInterval(updateClock, 1000);
updateClock(); 

// carousel of player images
const playerImages = {
  drose: ["images/drose.jpg", "images/drose2.jpg", "images/drose3.jpg"],
  matas: ["images/matas1.jpg", "images/matas2.jpg", "images/matas3.jpg"],
  demar: ["images/demar1.jpg", "images/demar2.jpg", "images/demar3.jpg"]
};

const currentIndexes = {
  drose: 0,
  matas: 0,
  demar: 0
};

function showImage(playerId) {
  const imgElement = document.getElementById(`${playerId}-image`);
  imgElement.src = playerImages[playerId][currentIndexes[playerId]];
  imgElement.alt = `${playerId} image ${currentIndexes[playerId] + 1}`;
}

function nextImage(playerId) {
  currentIndexes[playerId] = (currentIndexes[playerId] + 1) % playerImages[playerId].length;
  showImage(playerId);
}

function prevImage(playerId) {
  currentIndexes[playerId] = (currentIndexes[playerId] - 1 + playerImages[playerId].length) % playerImages[playerId].length;
  showImage(playerId);
}

// Initialize all carousels when page loads
window.addEventListener('DOMContentLoaded', () => {
  Object.keys(playerImages).forEach(playerId => showImage(playerId));
});
