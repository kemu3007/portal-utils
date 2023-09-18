import { Component } from '@angular/core';
import { RouterService } from './router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private routerService: RouterService) {
    this.routerService.watchNavigation().subscribe();
  }
}
