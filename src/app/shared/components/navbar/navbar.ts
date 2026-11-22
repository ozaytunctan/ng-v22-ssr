import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  // imports: [RouterModule],
  imports: [RouterLink, RouterLinkActive],
  selector: 'navbar',
  template: `
    <nav
      class="text-white gap-2 top-0 absolute z-50 w-full flex justify-end px-2 py-3 bg-slate-900 shadow-md"
    >

      <a class="hover:underline"
         [routerLink]="['/about']"
         routerLinkActive="text-blue-500 underline">Hakkımda</a>

      <a class="hover:underline"
         routerLink="/pricing"
         routerLinkActive="text-blue-500 underline">Fiyatlandırma</a>

      <a class="hover:underline"
         routerLink="/contact"
         routerLinkActive="text-blue-500 underline">İletişim</a>
    </nav>
  `,
})
export class Navbar {}
