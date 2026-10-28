'use strict';

// The five resource links are ordinary HTML anchors and work without JavaScript.
// This optional enhancement copies the permanent card URL for sharing.
const copyButton = document.querySelector('.copy-link');
const copyStatus = document.querySelector('.copy-status');
const cardURL = document.querySelector('link[rel="canonical"]').href;

if (copyButton && copyStatus && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(cardURL);
      copyStatus.textContent = 'Card link copied.';
    } catch {
      copyStatus.textContent = 'Copy this address: ' + cardURL;
    }
  });
}
