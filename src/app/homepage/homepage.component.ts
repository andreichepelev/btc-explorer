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
  btcethprice: any;
  btcpmaprice: any;
  general: any;

  constructor(private exService: ExplorerService) {
  }

  ngOnInit() {
    this.exService.fetchBtcUsdPrice().subscribe((x) => {
      this.btcusdprice = x;
    });

    this.exService.fetchBtcEthPrice().subscribe((z) => {
      this.btcethprice = z;
    });

    this.exService.fetchBtcPmaPrice().subscribe((n) => {
      this.btcpmaprice = n;
    });

    this.exService.fetchGeneral().subscribe((y) => {
      this.general = y;
    });
  }
}
