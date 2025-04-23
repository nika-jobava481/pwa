import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private deferredPrompt: any = null;

  constructor() {
    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e: any) => {
      console.log(e)
      e.preventDefault();  // Prevent automatic prompt
      this.deferredPrompt = e; // Store the event for later
      console.log('[PWA] beforeinstallprompt captured');
    });
  }

  // Can the app be installed?
  canInstall(): boolean {
    return !!this.deferredPrompt;
  }

  // Prompt the user to install
  async promptInstall(): Promise<void> {
    if (!this.deferredPrompt) return;

    // Show the install prompt
    await this.deferredPrompt.prompt();

    // Wait for user choice
    const choiceResult = await this.deferredPrompt.userChoice;
    console.log('[PWA] User choice:', choiceResult.outcome);

    // Clear the deferredPrompt after use
    this.deferredPrompt = null;
  }
}
