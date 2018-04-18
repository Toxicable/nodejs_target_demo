import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Root } from '@project/api1/src/root.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title$: Observable<string>;

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.title$ = this.http.get<Root>('/api/').pipe(map(r => r.appName));
  }
}
