import { Component } from '@angular/core';
import { PlatformComponent } from "./platform/platform.component";
import { LoginComponent } from './authentication/login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'StockManagementUI';
}
