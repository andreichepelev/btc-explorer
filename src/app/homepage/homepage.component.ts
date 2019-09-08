import { Component, OnInit } from '@angular/core';
import { ExplorerService } from '../explorer.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  Btcprice: object;
  subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private exService: ExplorerService) { }

  ngOnInit() {
    this.subscription = this.exService.fetchBtcPrice()
    .subscribe((x) => {
      this.Btcprice = x;
    });
  }

}
