import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
// router: Lesson-10
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule // router: Lesson-10
  ],
  template: `
            <!-- <main>
              <header class="brand-name">
                <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
              </header>
              <section class="content">
                <app-home></app-home>
              </section>
            </main> -->
            <main>
                <a [routerLink]="['/']">
                    <header class="brand-name">
                        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
                    </header>
                </a>
                <section class="content">
                    <router-outlet></router-outlet>
                </section>
            </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';
}