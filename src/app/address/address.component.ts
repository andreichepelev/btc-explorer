import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExplorerService } from '../explorer.service';
import { Subscription } from 'rxjs';
import { Address } from '../types';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

identifier: string;
address: Address;
subscription: Subscription;

constructor(private activatedRoute: ActivatedRoute, private exService: ExplorerService) {
  this.identifier = this.activatedRoute.snapshot.params.identifier;
 }

ngOnInit() {
  this.subscription = this.exService.fetchAddress(this.identifier)
  .subscribe((x) => {
    this.address = x;
  });
}
}
