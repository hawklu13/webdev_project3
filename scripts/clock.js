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
