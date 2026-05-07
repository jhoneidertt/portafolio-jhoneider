import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro-loader.component.html',
  styleUrl: './intro-loader.component.css'
})
export class IntroLoaderComponent implements OnInit, OnDestroy {
  isVisible = false;
  isLeaving = false;

  private readonly storageKey = 'jhoneider_intro_loader_seen';
  private readonly exitDelay = 3200;
  private readonly removeDelay = 3800;
  private exitTimer?: ReturnType<typeof setTimeout>;
  private removeTimer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    if (this.hasSeenIntro()) {
      return;
    }

    this.isVisible = true;
    sessionStorage.setItem(this.storageKey, 'true');

    this.exitTimer = setTimeout(() => {
      this.isLeaving = true;
    }, this.exitDelay);

    this.removeTimer = setTimeout(() => {
      this.isVisible = false;
    }, this.removeDelay);
  }

  ngOnDestroy(): void {
    clearTimeout(this.exitTimer);
    clearTimeout(this.removeTimer);
  }

  private hasSeenIntro(): boolean {
    return sessionStorage.getItem(this.storageKey) === 'true';
  }
}
