import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class App {
  protected readonly title = signal('readee');
}
