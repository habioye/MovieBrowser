import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieBrowser';
  onSubmit() {

  }
}
