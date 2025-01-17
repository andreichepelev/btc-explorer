import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tx, Block, Address } from './types';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExplorerService {
  constructor(private http: HttpClient) {
  }

  fetchTx(hash: string): Observable<Tx> {

    // http://142.93.172.157:9000/blockbook/btc/main/tx/98f00400d8ec2a4704778efbf905aa8b211c28ca183fc948644d4bd9aa967fb5
    // https://btc1.trezor.io/api/v2/block/596507
    return this.http.get<Tx>(`http://142.93.172.157:9000/blockbook/btc/main/v2/tx/${hash}`);
  }

  fetchBlock(blockheight: number): Observable<Block> {

    // http://142.93.172.157:9000/blockbook/btc/main/v2/block/592753
    return this.http.get<Block>(`http://142.93.172.157:9000/blockbook/btc/main/v2/block/${blockheight}`);
  }

  fetchAddress(identifier: string): Observable<Address> {

    // http://142.93.172.157:9000/blockbook/btc/main/v2/address/1CK6KHY6MHgYvmRQ4PAafKYDrg1ejbH1cE
    return this.http.get<Address>(`http://142.93.172.157:9000/blockbook/btc/main/v2/address/${identifier}`);
  }
  fetchBtcUsdPrice(): Observable<object> {
    return this.http.get<object>('https://blockchain.info/tobtc?currency=USD&value=1');
  }

  fetchBtcEurPrice(): Observable<object> {
    return this.http.get<object>('https://blockchain.info/tobtc?currency=EUR&value=1');
  }

  fetchBtcJpyPrice(): Observable<object> {
    return this.http.get<object>('https://blockchain.info/tobtc?currency=JPY&value=1');
  }

  fetchGeneral(): Observable<object> {
    return this.http.get<object>('http://142.93.172.157:9000/blockbook/btc/main/v2').pipe(
      map((response: any) => {
        const blockbook = response.blockbook;
        return blockbook;
      })
    );
  }
}
