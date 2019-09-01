import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExplorerService {
  constructor(private http: HttpClient) {
   }

   fetchTime(hash: string): Observable<number> {
    return this.http.get(`https://165.22.26.95:9130/api/v2/tx/${hash}`).pipe(
    ((response: any) => {
      const time = response.blockTime;
      return time;
    })
    );
  }
}
