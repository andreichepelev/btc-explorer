import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { BlockSummaryComponent } from './block-summary/block-summary.component';
import { AddressComponent } from './address/address.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CustomizeComponent } from './customize/customize.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'customize', component: CustomizeComponent },
  { path: 'blocks/:blockheight', component: BlockSummaryComponent},
  { path: 'transactions/:hash', component: TransactionDetailsComponent },
  { path: 'addresses/:identifier', component: AddressComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
