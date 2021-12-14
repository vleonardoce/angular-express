import { Component } from '@angular/core';
import { ApiAccessService } from './api-access/api-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list: string[] = [];
  number = 0;

  constructor(private apiService: ApiAccessService) { }

  public calculate(): void {
    this.apiService
      .get(this.number)
      .subscribe(response => this.list = response);
  }
}
