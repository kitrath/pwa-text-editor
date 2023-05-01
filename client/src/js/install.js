const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    // Save prompt event 
    window.deferredPrompt = event;
    // Ensure button is displayed in navbar
    butInstall.hidden = false;
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    // if beforeinstallprompt hasn't fired for some reason, return
    if (!promptEvent) {
        return;
    }
    // Fire prompt
    promptEvent.prompt();
    window.deferredPrompt = null;
    // Hide install button
    butInstall.hidden = true;
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
