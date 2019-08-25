import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { BlockSummaryComponent } from './block-summary/block-summary.component';
import { BlockHistoryComponent } from './block-history/block-history.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  { path: '', component: BlockHistoryComponent },
  { path: 'blocks', component: BlockSummaryComponent},
  { path: 'transactions', component: TransactionDetailsComponent },
  { path: 'addresses', component: AddressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
