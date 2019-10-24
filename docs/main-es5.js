(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/address/address.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/address/address.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <h1>Address</h1>\n        <table class=\"table table-borderless\" style=\"background-color: rgb(241, 241, 241);\">\n        <tbody>\n          <tr>\n            <th scope=\"row\">Identifier</th>\n            <td class=\"is-overflow-ellipsis\">{{ address?.address }}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Balance</th>\n            <td>{{ address?.balance/100000000 }} BTC</td>\n          </tr>\n        </tbody>\n        </table>\n        <br />\n        <table class=\"table table-hover\">\n          <tbody>\n            <tr>\n              <th scope=\"row\">Total received</th>\n              <td>{{ address?.totalReceived/100000000 }} BTC</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Total sent</th>\n              <td>{{ address?.totalSent/100000000 }} BTC</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Transactions</th>\n              <td>{{ address?.txs }}</td>\n            </tr>\n          </tbody>\n        </table>\n        <br />\n      </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-7\">\n          <h2>Transactions</h2>\n          <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Hash</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let tx of address?.txids | paginate: { itemsPerPage: 5, currentPage: p }; let i=index\">\n                  <td class=\"is-overflow-ellipsis\"><a [routerLink]=\"['/transactions/', tx]\" target=\"_blank\">{{ tx }}</a></td>\n                </tr>\n              </tbody>\n          </table>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div align=\"center\">\n                <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n            </div>\n        </div>\n      </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/block-history/block-history.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/block-history/block-history.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h1>Latest mined blocks</h1>\n          <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Height</th>\n                  <th scope=\"col\">Hash</th>\n                  <th scope=\"col\">Mined</th>\n                  <th scope=\"col\">TXs</th>\n                  <th scope=\"col\">Size</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>123124</td>\n                  <td class=\"is-overflow-ellipsis\"><a href=\"/blocks\">0000000000000000000795b009fa0dcf1e77b20e7f5ff122d89556c302db560d</a></td>\n                  <td class=\"is-overflow-ellipsis\">Sun, 18 Aug 2019 08:49:03 UTC</td>\n                  <td>1543</td>\n                  <td>938479</td>\n                </tr>\n                <tr>\n                  <td>123124</td>\n                  <td class=\"is-overflow-ellipsis\"><a href=\"/blocks\">0000000000000000000795b009fa0dcf1e77b20e7f5ff122d89556c302db560d</a></td>\n                  <td class=\"is-overflow-ellipsis\">Sun, 18 Aug 2019 08:49:03 UTC</td>\n                  <td>1543</td>\n                  <td>938479</td>\n                </tr>\n                <tr>\n                  <td>123124</td>\n                  <td class=\"is-overflow-ellipsis\"><a href=\"/blocks\">0000000000000000000795b009fa0dcf1e77b20e7f5ff122d89556c302db560d</a></td>\n                  <td class=\"is-overflow-ellipsis\">Sun, 18 Aug 2019 08:49:03 UTC</td>\n                  <td>1543</td>\n                  <td>938479</td>\n                </tr>\n                <tr>\n                  <td>123124</td>\n                  <td class=\"is-overflow-ellipsis\"><a href=\"/blocks\">0000000000000000000795b009fa0dcf1e77b20e7f5ff122d89556c302db560d</a></td>\n                  <td class=\"is-overflow-ellipsis\">Sun, 18 Aug 2019 08:49:03 UTC</td>\n                  <td>1543</td>\n                  <td>938479</td>\n                </tr>\n              </tbody>\n          </table>\n          <nav aria-label=\"Page navigation example\">\n              <ul class=\"pagination justify-content-end\">\n                <li class=\"page-item disabled\">\n                  <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Previous</a>\n                </li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                <li class=\"page-item\">\n                  <a class=\"page-link\" href=\"#\">Next</a>\n                </li>\n              </ul>\n            </nav>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/block-summary/block-summary.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/block-summary/block-summary.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <h1>Block #{{ block?.height }}</h1>\n        <table class=\"table table-borderless\" style=\"background-color: rgb(241, 241, 241);\">\n        <tbody>\n          <tr>\n            <th scope=\"row\">Hash</th>\n            <td class=\"is-overflow-ellipsis\">{{ block?.hash }}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Mined</th>\n            <td class=\"is-overflow-ellipsis\"> {{ block?.time*1000 | date:'long' }} </td>\n          </tr>\n        </tbody>\n        </table>\n        <br />\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <table class=\"table table-hover\">\n            <tbody>\n              <tr>\n                <th scope=\"row\">Height</th>\n                <td class=\"is-overflow-ellipsis\">{{ block?.height }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Transactions</th>\n                <td class=\"is-overflow-ellipsis\">{{ block?.txCount }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Confirmations</th>\n                <td class=\"is-overflow-ellipsis\">{{ block?.confirmations }}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Size</th>\n                <td class=\"is-overflow-ellipsis\">{{ block?.size }}</td>\n              </tr>\n            </tbody>\n          </table>\n     </div>\n     <div class=\"col-md-4\">\n        <table class=\"table table-hover\">\n          <tbody>\n            <tr>\n              <th scope=\"row\">Version</th>\n              <td class=\"is-overflow-ellipsis\">{{ block?.version }}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Nonce</th>\n              <td class=\"is-overflow-ellipsis\">{{ block?.nonce }}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Bits</th>\n              <td class=\"is-overflow-ellipsis\">{{ block?.bits }}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Difficulty</th>\n              <td class=\"is-overflow-ellipsis\">{{ block?.difficulty }}</td>\n            </tr>\n          </tbody>\n        </table>\n       </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <table class=\"table table-hover\">\n            <tbody>\n              <tr>\n                <th scope=\"row\">Merke root</th>\n                <td class=\"is-overflow-ellipsis\" style=\"width:80%\">{{ block?.merkleRoot }}</td>\n              </tr>\n            </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-10\">\n          <h2>Transactions</h2>\n          <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Hash</th>\n                  <th scope=\"col\">Input</th>\n                  <th scope=\"col\">Output</th>\n                  <th scope=\"col\">Fees</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let tx of block?.txs | paginate: { itemsPerPage: 15, currentPage: p }; let i=index\">\n                  <td class=\"is-overflow-ellipsis\"><a [routerLink]=\"['/transactions/', tx?.txid]\" target=\"_blank\">{{ tx?.txid }}</a></td>\n                  <td>{{ tx?.valueIn/100000000 }}</td>\n                  <td>{{ tx?.value/100000000 }}</td>\n                  <td>{{ tx?.fees/100000000 }}</td>\n                </tr>\n              </tbody>\n          </table>\n      </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-9\">\n            <div align=\"center\">\n                <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-muted\" style=\"margin-top: 15px; margin-bottom: 0px; padding: 20px; background-color: rgb(241, 241, 241)\">\n    <div class=\"container text-left\">\n    <p> PumaPay @ 2019 All Rights Reserved, powered by <a href=\"https://btc1.trezor.io/\">BlockBook</a></p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"background-color: #4D5EF2; padding: 20px; margin-bottom: 15px; margin-right:0px; margin-left:0px; margin-top:0px\">\n  <div class = \"container\">\n    <div class = \"row\">\n      <div class = \"col-md-4\" style = \"margin: 0.5em;\">\n         <a href=\"#\" style=\"color: #ffffff\">\n           <img src=\"/assets/images/logo.svg\" alt=\"PumaPay\">\n         </a>\n      </div>\n      <div class = \"col-md-6 col-sm-12\" style = \"margin: 0.5em;\">\n        <input\n        class=\"form-control\"\n        type=\"text\"\n        (keyup.enter)=\"OnInput($event)\"\n        placeholder=\"Search for block height, tx hash or address\"\n        >\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <h1>PumaPay Bitcoin Block Explorer</h1>\n      <br/>\n      <p>This service, powered by BlockBook API, allows you to monitor Bitcoin blockchain and retrieve data per each\n        mined block, executed transaction or address.</p>\n      <br/>\n      <table class=\"table table-hover\">\n        <tbody>\n        <tr>\n          <th scope=\"row\">Current Bitcoin price</th>\n          <td>{{ btcusdprice }} USD</td>\n        </tr>\n        <tr>\n          <th scope=\"row\"></th>\n          <td>{{ btceurprice }} EUR</td>\n        </tr>\n        <tr>\n        <tr>\n          <th scope=\"row\"></th>\n          <td>{{ btcjpyprice }} JPY</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Price source</th>\n          <td><a href=\"https://www.blockchain.com\">Blockchain.com</a></td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Latest mined blocks</th>\n          <td>\n            <a [routerLink]=\"['/blocks', general?.bestHeight]\">\n              {{general?.bestHeight}}\n            </a>\n            <a [routerLink]=\"['/blocks', general?.bestHeight - 1]\">\n              {{general?.bestHeight - 1}}\n            </a>\n            <a [routerLink]=\"['/blocks', general?.bestHeight - 2]\">\n              {{general?.bestHeight - 2}}\n            </a>\n            <a [routerLink]=\"['/blocks', general?.bestHeight - 3]\">\n              {{general?.bestHeight - 3}}\n            </a>\n            <a [routerLink]=\"['/blocks', general?.bestHeight - 4]\">\n              {{general?.bestHeight - 4}}\n            </a>\n          </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Last block update</th>\n          <td>{{ general?.lastBlockTime | date:'long' }}</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Host</th>\n          <td>{{ general?.host }}</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Blockbook version</th>\n          <td>{{ general?.version }}</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Mempool size</th>\n          <td>{{ general?.mempoolSize }}</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Last mempool update</th>\n          <td>{{ general?.lastMempoolTime | date:'long' }}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/notfound/notfound.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notfound/notfound.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <h2>Requested information not found</h2>\n      <p>You can go back to the <a href=\"/\">main page</a></p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/transaction-details/transaction-details.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/transaction-details/transaction-details.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <h1>Transaction</h1>\n      <table class=\"table table-borderless\" style=\"background-color: rgb(241, 241, 241);\">\n      <tbody>\n        <tr>\n          <th scope=\"row\">Hash</th>\n          <td class=\"is-overflow-ellipsis\">{{ hash }}</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Mined</th>\n          <td>{{ tx?.blockTime*1000 | date:'long' }}</td>\n        </tr>\n      </tbody>\n      </table>\n      <br />\n      <table class=\"table table-hover\">\n        <tbody>\n          <tr>\n            <th scope=\"row\">Block hash</th>\n            <td class=\"is-overflow-ellipsis\">{{ tx?.blockHash }}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Block height</th>\n            <td><a [routerLink]=\"['/blocks/', tx?.blockHeight]\" target=\"_blank\">{{ tx?.blockHeight }}</a></td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Confirmations</th>\n            <td>{{ tx?.confirmations }}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Total Output</th>\n            <td>{{ tx?.value/100000000 }} BTC</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Fees</th>\n            <td>{{ tx?.fees/100000 }}</td>\n          </tr>\n        </tbody>\n      </table>\n      <br />\n    </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2>Details</h2>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-md-6\" style=\"background-color: rgb(241, 241, 241); padding-top: 15px; padding-bottom: 15px\">\n        <h4>Input</h4>\n        <table class=\"table table-hover\" style=\"background-color: #ffffff;\">\n            <tbody>\n              <tr *ngFor=\"let vin of tx?.vin\">\n                <td class=\"is-overflow-ellipsis\" style=\"width: 70%\">\n                  <a *ngIf=\"vin.isAddress\" [routerLink]=\"['/addresses/', vin?.addresses[0]]\" target=\"_blank\">{{ vin?.addresses }}</a>\n                  <span *ngIf=\"!vin.isAddress\"></span>\n                </td>\n                <td align=\"right\">\n                  <span *ngIf=\"vin.isAddress\">{{ vin?.value/100000000 }} BTC</span>\n                  <span *ngIf=\"!vin.isAddress\">No input</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n      </div>\n      <div class=\"col-md-6\" style=\"background-color: rgb(241, 241, 241); padding-top: 15px; padding-bottom: 15px\">\n        <h4>Output</h4>\n        <table class=\"table table-hover\" style=\"background-color: #ffffff;\">\n            <tbody>\n              <tr *ngFor=\"let vout of tx?.vout\">\n                <td class=\"is-overflow-ellipsis\" style=\"width: 80%\">\n                  <a *ngIf=\"vout.isAddress\" [routerLink]=\"['/addresses/', vout?.addresses[0]]\" target=\"_blank\">{{ vout?.addresses }}</a>\n                  <span *ngIf=\"!vout.isAddress\"> {{ vout?.addresses }} </span>\n                </td>\n                <td>{{ vout?.value/100000000 }}</td>\n              </tr>\n            </tbody>\n          </table>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/address/address.component.css":
/*!***********************************************!*\
  !*** ./src/app/address/address.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  max-width: 100%;\n}\n\n.is-overflow-ellipsis {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 1px;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uaXMtb3ZlcmZsb3ctZWxsaXBzaXMge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/address/address.component.ts":
/*!**********************************************!*\
  !*** ./src/app/address/address.component.ts ***!
  \**********************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _explorer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../explorer.service */ "./src/app/explorer.service.ts");




var AddressComponent = /** @class */ (function () {
    function AddressComponent(activatedRoute, exService) {
        this.activatedRoute = activatedRoute;
        this.exService = exService;
        this.identifier = this.activatedRoute.snapshot.params.identifier;
    }
    AddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.exService.fetchAddress(this.identifier)
            .subscribe(function (x) {
            _this.address = x;
        });
        this.txids = this.address.txids;
    };
    AddressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _explorer_service__WEBPACK_IMPORTED_MODULE_3__["ExplorerService"] }
    ]; };
    AddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! raw-loader!./address.component.html */ "./node_modules/raw-loader/index.js!./src/app/address/address.component.html"),
            styles: [__webpack_require__(/*! ./address.component.css */ "./src/app/address/address.component.css")]
        })
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction-details/transaction-details.component */ "./src/app/transaction-details/transaction-details.component.ts");
/* harmony import */ var _block_summary_block_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-summary/block-summary.component */ "./src/app/block-summary/block-summary.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");








var routes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"] },
    { path: 'blocks/:blockheight', component: _block_summary_block_summary_component__WEBPACK_IMPORTED_MODULE_4__["BlockSummaryComponent"] },
    { path: 'transactions/:hash', component: _transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_3__["TransactionDetailsComponent"] },
    { path: 'addresses/:identifier', component: _address_address_component__WEBPACK_IMPORTED_MODULE_5__["AddressComponent"] },
    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_6__["NotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'btc-explorer';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _block_summary_block_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block-summary/block-summary.component */ "./src/app/block-summary/block-summary.component.ts");
/* harmony import */ var _transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transaction-details/transaction-details.component */ "./src/app/transaction-details/transaction-details.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _block_history_block_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./block-history/block-history.component */ "./src/app/block-history/block-history.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");
/* harmony import */ var _explorer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./explorer.service */ "./src/app/explorer.service.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _block_summary_block_summary_component__WEBPACK_IMPORTED_MODULE_6__["BlockSummaryComponent"],
                _transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_7__["TransactionDetailsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _block_history_block_history_component__WEBPACK_IMPORTED_MODULE_10__["BlockHistoryComponent"],
                _address_address_component__WEBPACK_IMPORTED_MODULE_11__["AddressComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__["NotfoundComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__["HomepageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]
            ],
            providers: [_explorer_service__WEBPACK_IMPORTED_MODULE_12__["ExplorerService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_17__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_17__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/block-history/block-history.component.css":
/*!***********************************************************!*\
  !*** ./src/app/block-history/block-history.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  max-width: 100%;\n}\n\n.is-overflow-ellipsis {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 1px;\n  width: 70%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2staGlzdG9yeS9ibG9jay1oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9ibG9jay1oaXN0b3J5L2Jsb2NrLWhpc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uaXMtb3ZlcmZsb3ctZWxsaXBzaXMge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAxcHg7XG4gIHdpZHRoOiA3MCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/block-history/block-history.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/block-history/block-history.component.ts ***!
  \**********************************************************/
/*! exports provided: BlockHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockHistoryComponent", function() { return BlockHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlockHistoryComponent = /** @class */ (function () {
    function BlockHistoryComponent() {
    }
    BlockHistoryComponent.prototype.ngOnInit = function () {
    };
    BlockHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-history',
            template: __webpack_require__(/*! raw-loader!./block-history.component.html */ "./node_modules/raw-loader/index.js!./src/app/block-history/block-history.component.html"),
            styles: [__webpack_require__(/*! ./block-history.component.css */ "./src/app/block-history/block-history.component.css")]
        })
    ], BlockHistoryComponent);
    return BlockHistoryComponent;
}());



/***/ }),

/***/ "./src/app/block-summary/block-summary.component.css":
/*!***********************************************************!*\
  !*** ./src/app/block-summary/block-summary.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  max-width: 100%;\n}\n\n.is-overflow-ellipsis {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 1px;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2stc3VtbWFyeS9ibG9jay1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ibG9jay1zdW1tYXJ5L2Jsb2NrLXN1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uaXMtb3ZlcmZsb3ctZWxsaXBzaXMge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/block-summary/block-summary.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/block-summary/block-summary.component.ts ***!
  \**********************************************************/
/*! exports provided: BlockSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockSummaryComponent", function() { return BlockSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _explorer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../explorer.service */ "./src/app/explorer.service.ts");




var BlockSummaryComponent = /** @class */ (function () {
    function BlockSummaryComponent(activatedRoute, exService) {
        this.activatedRoute = activatedRoute;
        this.exService = exService;
        this.blockheight = this.activatedRoute.snapshot.params.blockheight;
    }
    BlockSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.exService.fetchBlock(this.blockheight)
            .subscribe(function (x) {
            _this.block = x;
        });
    };
    BlockSummaryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _explorer_service__WEBPACK_IMPORTED_MODULE_3__["ExplorerService"] }
    ]; };
    BlockSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-summary',
            template: __webpack_require__(/*! raw-loader!./block-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/block-summary/block-summary.component.html"),
            styles: [__webpack_require__(/*! ./block-summary.component.css */ "./src/app/block-summary/block-summary.component.css")]
        })
    ], BlockSummaryComponent);
    return BlockSummaryComponent;
}());



/***/ }),

/***/ "./src/app/explorer.service.ts":
/*!*************************************!*\
  !*** ./src/app/explorer.service.ts ***!
  \*************************************/
/*! exports provided: ExplorerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerService", function() { return ExplorerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ExplorerService = /** @class */ (function () {
    function ExplorerService(http) {
        this.http = http;
    }
    ExplorerService.prototype.fetchTx = function (hash) {
        // http://142.93.172.157:9000/blockbook/btc/main/tx/98f00400d8ec2a4704778efbf905aa8b211c28ca183fc948644d4bd9aa967fb5
        // https://btc1.trezor.io/api/v2/block/596507
        return this.http.get("http://142.93.172.157:9000/blockbook/btc/main/v2/tx/" + hash);
    };
    ExplorerService.prototype.fetchBlock = function (blockheight) {
        // http://142.93.172.157:9000/blockbook/btc/main/v2/block/592753
        return this.http.get("http://142.93.172.157:9000/blockbook/btc/main/v2/block/" + blockheight);
    };
    ExplorerService.prototype.fetchAddress = function (identifier) {
        // http://142.93.172.157:9000/blockbook/btc/main/v2/address/1CK6KHY6MHgYvmRQ4PAafKYDrg1ejbH1cE
        return this.http.get("http://142.93.172.157:9000/blockbook/btc/main/v2/address/" + identifier);
    };
    ExplorerService.prototype.fetchBtcUsdPrice = function () {
        return this.http.get('https://blockchain.info/tobtc?currency=USD&value=1');
    };
    ExplorerService.prototype.fetchBtcEurPrice = function () {
        return this.http.get('https://blockchain.info/tobtc?currency=EUR&value=1');
    };
    ExplorerService.prototype.fetchBtcJpyPrice = function () {
        return this.http.get('https://blockchain.info/tobtc?currency=JPY&value=1');
    };
    ExplorerService.prototype.fetchGeneral = function () {
        return this.http.get('http://142.93.172.157:9000/blockbook/btc/main/v2').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var blockbook = response.blockbook;
            return blockbook;
        }));
    };
    ExplorerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ExplorerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ExplorerService);
    return ExplorerService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.OnInput = function (event) {
        console.log(event.target.value);
        if (event.target.value.length === 64) {
            this.router.navigate(["/transactions/" + event.target.value]);
        }
        else if (event.target.value.length === 6) {
            this.router.navigate(["/blocks/" + event.target.value]);
        }
        else if (event.target.value.length === 34) {
            this.router.navigate(["/addresses/" + event.target.value]);
        }
        else {
            this.router.navigate(['/']);
        }
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _explorer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../explorer.service */ "./src/app/explorer.service.ts");



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(exService) {
        this.exService = exService;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exService.fetchBtcUsdPrice().subscribe(function (x) {
            _this.btcusdprice = x;
        });
        this.exService.fetchBtcEurPrice().subscribe(function (z) {
            _this.btceurprice = z;
        });
        this.exService.fetchBtcJpyPrice().subscribe(function (n) {
            _this.btcjpyprice = n;
        });
        this.exService.fetchGeneral().subscribe(function (y) {
            _this.general = y;
        });
    };
    HomepageComponent.ctorParameters = function () { return [
        { type: _explorer_service__WEBPACK_IMPORTED_MODULE_2__["ExplorerService"] }
    ]; };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        })
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! raw-loader!./notfound.component.html */ "./node_modules/raw-loader/index.js!./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        })
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/transaction-details/transaction-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/transaction-details/transaction-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  max-width: 100%;\n}\n\n.is-overflow-ellipsis {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 1px;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNhY3Rpb24tZGV0YWlscy90cmFuc2FjdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC90cmFuc2FjdGlvbi1kZXRhaWxzL3RyYW5zYWN0aW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uaXMtb3ZlcmZsb3ctZWxsaXBzaXMge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/transaction-details/transaction-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/transaction-details/transaction-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: TransactionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsComponent", function() { return TransactionDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _explorer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../explorer.service */ "./src/app/explorer.service.ts");




var TransactionDetailsComponent = /** @class */ (function () {
    function TransactionDetailsComponent(activatedRoute, exService) {
        this.activatedRoute = activatedRoute;
        this.exService = exService;
        // exService: ExplorerService;
        // activatedRoute: ActivatedRoute;
        this.hash = '';
        // debugger
        this.hash = this.activatedRoute.snapshot.params.hash;
        // this.exService = exService;
    }
    TransactionDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // debugger
        // this.hash = this.activatedRoute.snapshot.params.hash;
        this.subscription = this.exService.fetchTx(this.hash)
            .subscribe(function (x) {
            _this.tx = x;
        });
    };
    TransactionDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _explorer_service__WEBPACK_IMPORTED_MODULE_3__["ExplorerService"] }
    ]; };
    TransactionDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transaction-details',
            template: __webpack_require__(/*! raw-loader!./transaction-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/transaction-details/transaction-details.component.html"),
            styles: [__webpack_require__(/*! ./transaction-details.component.css */ "./src/app/transaction-details/transaction-details.component.css")]
        })
    ], TransactionDetailsComponent);
    return TransactionDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\nodejs\btc-explorer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map