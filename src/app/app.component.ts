import { Component } from '@angular/core';

/**
 * Root component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {
  /**
   * A title for greeting message
   */
  public title = 'Star Wars API';
}
