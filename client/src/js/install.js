const butInstall = document.getElementById('buttonInstall');

// Code source: https://pwa-workshop.js.org/5-pwa-install/#add-an-installation-button

// Note: Added `hidden` attribute to a#butInstall in ../index.html

let deferredPrompt;
// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    // Save prompt event 
    deferredPrompt = event;
    // Ensure button is displayed in navbar
    butInstall.hidden = false;
    butInstall.addEventListener("click", installJATE);
});

async function installJATE() {
    // Show prompt
    deferredPrompt.prompt();
    butInstall.disabled = true;

    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
        butInstall.hidden = true;
    }
    butInstall.disabled = false;
    deferredPrompt = null;
}

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
