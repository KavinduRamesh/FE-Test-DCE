// theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'theme';

  setDarkMode() {
    localStorage.setItem(this.THEME_KEY, 'dark');
    document.documentElement.classList.add('dark-theme');
  }

  setLightMode() {
    localStorage.setItem(this.THEME_KEY, 'light');
    document.documentElement.classList.remove('dark-theme');
  }

  getTheme(): string {
    return localStorage.getItem(this.THEME_KEY) || 'light';
  }

  toggleTheme() {
    if (this.getTheme() === 'dark') {
      this.setLightMode();
    } else {
      this.setDarkMode();
    }
  }
}
