import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { HomePage } from './modules/landing-page/home-page/home-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,Footer,HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Project-intern');
}
