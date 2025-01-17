import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockSummaryComponent } from './block-summary/block-summary.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlockHistoryComponent } from './block-history/block-history.component';
import { AddressComponent } from './address/address.component';
import { ExplorerService } from './explorer.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomepageComponent } from './homepage/homepage.component';
import {FormsModule} from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CustomizeComponent } from './customize/customize.component';


@NgModule({
  declarations: [
    AppComponent,
    BlockSummaryComponent,
    TransactionDetailsComponent,
    HeaderComponent,
    FooterComponent,
    BlockHistoryComponent,
    AddressComponent,
    NotfoundComponent,
    HomepageComponent,
    CustomizeComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [ExplorerService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
