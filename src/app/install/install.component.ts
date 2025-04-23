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

  constructor(public pwa: PwaService) {}

  install() {
    this.pwa.promptInstall();
  }

  isMobile(): boolean {
    return /Mobi|Android/i.test(this.platform);
  }

  canInstall(): boolean {
    return this.pwa.canInstall();
  }
}
