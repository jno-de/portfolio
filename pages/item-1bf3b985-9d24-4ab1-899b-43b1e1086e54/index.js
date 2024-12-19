import '@lrnwebcomponents/future-terminal-text/future-terminal-text.js';

// Wait for the Web Components to be defined and ready
window.addEventListener('WebComponentsReady', () => {
  const terminalText = document.getElementById('title');
  // Trigger the glitch effect
  terminalText._doGlitch();
});