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

// All player images (Bulls + Bears)
const playerImages = {
  // Bulls players
  drose: ["images/drose.jpg", "images/drose2.jpg", "images/drose3.jpg"],
  demar: ["images/demar.jpg", "images/demar2.jpg", "images/demar3.jpg"],
  matas: ["images/matas.jpg", "images/matas2.jpg", "images/matas3.jpg"],

  // Bears players
  calebwilliams: ["images/calebwilliams.jpg", "images/calebwilliams2.jpg", "images/calebwilliams3.jpg"],
  djmoore: ["images/djmoore.jpg", "images/djmoore2.jpg", "images/djmoore3.jpg"],
  justinfields: ["images/JustinFields.jpg", "images/justinfields2.jpg", "images/justinfields3.jpg"]
};

// Track the current image index for each player
const currentIndexes = {
  drose: 0,
  demar: 0,
  matas: 0,
  calebwilliams: 0,
  djmoore: 0,
  justinfields: 0
};

// Display the current image for a player
function showImage(playerId) {
  const imgElement = document.getElementById(`${playerId}-image`);
  if (!imgElement || !playerImages[playerId]) return;
  imgElement.src = playerImages[playerId][currentIndexes[playerId]];
  imgElement.alt = `${playerId} image ${currentIndexes[playerId] + 1}`;
}

// Show the next image
function nextImage(playerId) {
  if (!playerImages[playerId]) return;
  currentIndexes[playerId] = (currentIndexes[playerId] + 1) % playerImages[playerId].length;
  showImage(playerId);
}

// Show the previous image
function prevImage(playerId) {
  if (!playerImages[playerId]) return;
  currentIndexes[playerId] = (currentIndexes[playerId] - 1 + playerImages[playerId].length) % playerImages[playerId].length;
  showImage(playerId);
}

// Initialize all carousels when the page loads
window.addEventListener('DOMContentLoaded', () => {
  Object.keys(playerImages).forEach(playerId => showImage(playerId));
});
