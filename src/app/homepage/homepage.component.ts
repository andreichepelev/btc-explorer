import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExplorerService } from '../explorer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  btcusdprice: any;
  btceurprice: any;
  btcjpyprice: any;
  general: any;

  constructor(private exService: ExplorerService) {
  }

  ngOnInit() {
    this.exService.fetchBtcUsdPrice().subscribe((x) => {
      this.btcusdprice = x;
    });

    this.exService.fetchBtcEurPrice().subscribe((z) => {
      this.btceurprice = z;
    });

    this.exService.fetchBtcJpyPrice().subscribe((n) => {
      this.btcjpyprice = n;
    });

    this.exService.fetchGeneral().subscribe((y) => {
      this.general = y;
    });
  }
}
