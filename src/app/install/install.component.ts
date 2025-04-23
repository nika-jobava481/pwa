import { Component } from '@angular/core';
import { PwaService } from '../pwa.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-install',
  imports: [CommonModule],
  templateUrl: './install.component.html',
  styleUrl: './install.component.scss'
})
export class InstallComponent {
  platform = navigator.userAgent;
  dismissedIos = false;

  constructor(public pwa: PwaService) { }

  install() {
    this.pwa.promptInstall();
  }

  isMobile(): boolean {
    return /Mobi|Android/i.test(this.platform);
  }

  isIos(): boolean {
    return /iPhone|iPad|iPod/.test(this.platform);
  }

  isInStandaloneMode(): boolean {
    return 'standalone' in window.navigator && (window.navigator as any).standalone;
  }

  canInstall(): boolean {
    return this.pwa.canInstall();
  }

  dismissIosBanner(): void {
    this.dismissedIos = true;
  }
}
