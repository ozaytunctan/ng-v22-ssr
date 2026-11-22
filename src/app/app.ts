import { Component, effect, ElementRef, signal, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  template: `
    <navbar />
    <main class="max-w-3xl m-auto mt-16 px-2">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [],
})
export class App {

}
