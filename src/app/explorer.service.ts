import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExplorerService {
  constructor(private http: HttpClient) {
  }

  fetchTime(hash: string): Observable<number> {

    // http://142.93.172.157:9000/blockbook/btc/main/tx/98f00400d8ec2a4704778efbf905aa8b211c28ca183fc948644d4bd9aa967fb5
    return this.http.get(`http://142.93.172.157:9000/blockbook/btc/main/v2/tx/${hash}`).pipe(
      map((response: any) => {
        const time = response.blockTime;
        return time;
      })
    );
  }
}
