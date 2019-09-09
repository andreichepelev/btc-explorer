import { Component, OnInit } from '@angular/core';
import { ExplorerService } from '../explorer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  btcusdprice: object;
  btcethprice: object;
  btcpmaprice: object;
  general: object;
  subscription: Subscription;

  constructor(private exService: ExplorerService) { }

  ngOnInit() {
    this.subscription = this.exService.fetchBtcUsdPrice()
    .subscribe((x) => {
      this.btcusdprice = x;
    });

    this.subscription = this.exService.fetchBtcEthPrice()
    .subscribe((z) => {
      this.btcethprice = z;
    });

    this.subscription = this.exService.fetchBtcPmaPrice()
    .subscribe((n) => {
      this.btcpmaprice = n;
    });


    this.subscription = this.exService.fetchGeneral()
    .subscribe((y) => {
      this.general = y;
    });
  }

}
