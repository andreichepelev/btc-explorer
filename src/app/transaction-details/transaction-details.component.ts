import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExplorerService } from '../explorer.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})

export class TransactionDetailsComponent implements OnInit {

  // exService: ExplorerService;
  // activatedRoute: ActivatedRoute;
  hash = '';
  timeStamp: number;
  subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private exService: ExplorerService) {
    // debugger
    this.hash = this.activatedRoute.snapshot.params.hash;
    // this.exService = exService;
   }

  ngOnInit() {
    // debugger
    // this.hash = this.activatedRoute.snapshot.params.hash;
    this.subscription = this.exService.
      fetchTime(this.hash)
      .subscribe((x) => {this.timeStamp = x});
  }

}
