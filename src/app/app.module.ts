import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockSummaryComponent } from './block-summary/block-summary.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlockHistoryComponent } from './block-history/block-history.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockSummaryComponent,
    TransactionDetailsComponent,
    HeaderComponent,
    FooterComponent,
    BlockHistoryComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
