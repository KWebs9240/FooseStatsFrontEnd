webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/AlmaMater/alma-mater-management.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Alma Maters</h3>\r\n<div *ngFor=\"let almaMater of allAlmaMaters\">\r\n    <input [(ngModel)]=\"almaMater.almaMaterCode\">\r\n    <input [(ngModel)]=\"almaMater.almaMaterDescription\">\r\n    <button (click)=\"removeAlmaMater(almaMater.almaMaterId)\">x</button>\r\n</div>\r\n<button (click)=\"addBlankAlmaMater()\">Add Alma Mater</button>\r\n<button (click)=\"saveAllAlmaMaters()\">Save Alma Maters</button>"

/***/ }),

/***/ "../../../../../src/app/AlmaMater/alma-mater-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlmaMaterManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alma_mater__ = __webpack_require__("../../../../../src/app/AlmaMater/alma-mater.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alma_mater_service__ = __webpack_require__("../../../../../src/app/AlmaMater/alma-mater.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlmaMaterManagementComponent = (function () {
    function AlmaMaterManagementComponent(almaMaterService) {
        this.almaMaterService = almaMaterService;
        this.allAlmaMaters = [];
    }
    AlmaMaterManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.almaMaterService.getAlmaMaters()
            .then(function (result) {
            _this.allAlmaMaters = result;
        });
    };
    AlmaMaterManagementComponent.prototype.addBlankAlmaMater = function () {
        this.allAlmaMaters.push(new __WEBPACK_IMPORTED_MODULE_1__alma_mater__["a" /* AlmaMater */]());
    };
    AlmaMaterManagementComponent.prototype.saveAllAlmaMaters = function () {
        var _this = this;
        this.allAlmaMaters.forEach(function (almaMater) {
            _this.almaMaterService.saveAlmaMater(almaMater);
        });
    };
    AlmaMaterManagementComponent.prototype.removeAlmaMater = function (delAlmaMaterId) {
        var delAlmaMater = this.allAlmaMaters.find(function (x) { return x.almaMaterId === delAlmaMaterId; });
        var delIndex = this.allAlmaMaters.indexOf(delAlmaMater);
        this.allAlmaMaters.splice(delIndex, 1);
        this.almaMaterService.deleteAlmaMater(delAlmaMater);
    };
    return AlmaMaterManagementComponent;
}());
AlmaMaterManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'alma-mater-management',
        template: __webpack_require__("../../../../../src/app/AlmaMater/alma-mater-management.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__alma_mater_service__["a" /* AlmaMaterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__alma_mater_service__["a" /* AlmaMaterService */]) === "function" && _a || Object])
], AlmaMaterManagementComponent);

var _a;
//# sourceMappingURL=alma-mater-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/AlmaMater/alma-mater.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlmaMaterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_constants__ = __webpack_require__("../../../../../src/app/global-constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlmaMaterService = (function () {
    function AlmaMaterService(http) {
        this.http = http;
        this.almaMaterUrl = __WEBPACK_IMPORTED_MODULE_5__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + 'api/AlmaMater';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
    }
    AlmaMaterService.prototype.getAlmaMaters = function () {
        var _this = this;
        var cacheCheckTime = new Date();
        cacheCheckTime.setMinutes(cacheCheckTime.getMinutes() - 15);
        if (this.lastCacheDate < cacheCheckTime) {
            return this.http.get(this.almaMaterUrl)
                .toPromise()
                .then(function (response) {
                _this.allAlmaMaters = response.json();
                _this.lastCacheDate = new Date();
                return _this.allAlmaMaters;
            })
                .catch(function (error) {
                console.error('An error occured', error);
                return Promise.reject(error.message || error);
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.allAlmaMaters)
                .toPromise()
                .then(function (things) {
                return _this.allAlmaMaters;
            });
        }
    };
    AlmaMaterService.prototype.saveAlmaMater = function (almaMaterForSaving) {
        var _this = this;
        return this.http
            .put(this.almaMaterUrl, JSON.stringify(almaMaterForSaving), { headers: this.headers })
            .toPromise()
            .then(function (result) {
            //Resetting the last cache date so the list of players is refreshed
            _this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
            return result.json();
        });
    };
    AlmaMaterService.prototype.deleteAlmaMater = function (almMaterIdToDelete) {
        var _this = this;
        return this.http
            .post(this.almaMaterUrl + '/Delete', JSON.stringify(almMaterIdToDelete), { headers: this.headers })
            .toPromise()
            .then(function (result) {
            _this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
            return result.json();
        });
    };
    return AlmaMaterService;
}());
AlmaMaterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AlmaMaterService);

var _a;
//# sourceMappingURL=alma-mater.service.js.map

/***/ }),

/***/ "../../../../../src/app/AlmaMater/alma-mater.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlmaMater; });
var AlmaMater = (function () {
    function AlmaMater() {
    }
    return AlmaMater;
}());

//# sourceMappingURL=alma-mater.js.map

/***/ }),

/***/ "../../../../../src/app/Location/location-management.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Locations</h3>\r\n<div *ngFor=\"let location of allLocations\">\r\n    <input [(ngModel)]=\"location.locationCode\">\r\n    <input [(ngModel)]=\"location.locationDescription\">\r\n    <button (click)=\"removeMatch(location.locationId)\">x</button>\r\n</div>\r\n<button (click)=\"addBlankLocation()\">Add Location</button>\r\n<button (click)=\"saveAllLocations()\">Save Locations</button>"

/***/ }),

/***/ "../../../../../src/app/Location/location-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location__ = __webpack_require__("../../../../../src/app/Location/location.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_service__ = __webpack_require__("../../../../../src/app/Location/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationManagementComponent = (function () {
    function LocationManagementComponent(locationService) {
        this.locationService = locationService;
        this.allLocations = [];
    }
    LocationManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationService.getLocations()
            .then(function (result) {
            _this.allLocations = result;
        });
    };
    LocationManagementComponent.prototype.addBlankLocation = function () {
        this.allLocations.push(new __WEBPACK_IMPORTED_MODULE_1__location__["a" /* Location */]());
    };
    LocationManagementComponent.prototype.saveAllLocations = function () {
        var _this = this;
        this.allLocations.forEach(function (location) {
            _this.locationService.saveLocation(location);
        });
    };
    LocationManagementComponent.prototype.removeLocation = function (delLocationId) {
        var delLocation = this.allLocations.find(function (x) { return x.locationId === delLocationId; });
        var delIndex = this.allLocations.indexOf(delLocation);
        this.allLocations.splice(delIndex, 1);
        this.locationService.deleteLocation(delLocation);
    };
    return LocationManagementComponent;
}());
LocationManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'location-management',
        template: __webpack_require__("../../../../../src/app/Location/location-management.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */]) === "function" && _a || Object])
], LocationManagementComponent);

var _a;
//# sourceMappingURL=location-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/Location/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_constants__ = __webpack_require__("../../../../../src/app/global-constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
        this.locationUrl = __WEBPACK_IMPORTED_MODULE_5__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + 'api/Location';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
    }
    LocationService.prototype.getLocations = function () {
        var _this = this;
        var cacheCheckTime = new Date();
        cacheCheckTime.setMinutes(cacheCheckTime.getMinutes() - 15);
        if (this.lastCacheDate < cacheCheckTime) {
            return this.http.get(this.locationUrl)
                .toPromise()
                .then(function (response) {
                _this.allLocations = response.json();
                _this.lastCacheDate = new Date();
                return _this.allLocations;
            })
                .catch(function (error) {
                console.error('An error occured', error);
                return Promise.reject(error.message || error);
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.allLocations)
                .toPromise()
                .then(function (things) {
                return _this.allLocations;
            });
        }
    };
    LocationService.prototype.saveLocation = function (locationForSaving) {
        var _this = this;
        return this.http
            .put(this.locationUrl, JSON.stringify(locationForSaving), { headers: this.headers })
            .toPromise()
            .then(function (result) {
            //Resetting the last cache date so the list of players is refreshed
            _this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
            return result.json();
        });
    };
    LocationService.prototype.deleteLocation = function (locationIdToDelete) {
        var _this = this;
        return this.http
            .post(this.locationUrl + '/Delete', JSON.stringify(locationIdToDelete), { headers: this.headers })
            .toPromise()
            .then(function (result) {
            _this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
            return result.json();
        });
    };
    return LocationService;
}());
LocationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LocationService);

var _a;
//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ "../../../../../src/app/Location/location.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
var Location = (function () {
    function Location() {
    }
    return Location;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ "../../../../../src/app/Match/match-creation.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>New Match</h3>\r\n<div>\r\n    <div>\r\n        <label>Player 1</label>\r\n        <select [(ngModel)]=\"selectedPlayer1\">\r\n            <option *ngFor=\"let player of allPlayers\" [ngValue]=\"player\">{{player.firstName}} {{player.lastName}}</option>\r\n        </select>\r\n        <label>{{selectedPlayer1.firstName}} {{selectedPlayer1.lastName}} - {{selectedPlayer1.nickName}}</label>\r\n    </div>\r\n    <div>\r\n        <label>Player 2</label>\r\n        <select [(ngModel)]=\"selectedPlayer2\">\r\n            <option *ngFor=\"let player of allPlayers\" [ngValue]=\"player\">{{player.firstName}} {{player.lastName}}</option>\r\n        </select>\r\n        <label>{{selectedPlayer2.firstName}} {{selectedPlayer2.lastName}} - {{selectedPlayer2.nickName}}</label>\r\n    </div>\r\n    <div>\r\n        <label>{{selectedPlayer1.firstName ? selectedPlayer1.firstName + \" \" + selectedPlayer1.lastName : \"Player 1\"}} Score</label>\r\n        <input [(ngModel)]=\"team1Score\">\r\n        <label>{{selectedPlayer2.firstName ? selectedPlayer2.firstName + \" \" + selectedPlayer2.lastName : \"Player 2\"}} Score</label>\r\n        <input [(ngModel)]=\"team2Score\">\r\n    </div>\r\n    <div>\r\n        <label>Match Type</label>\r\n        <select [(ngModel)]=\"selectedMatchType\">\r\n            <option *ngFor=\"let matchType of allMatchTypes\" [ngValue]=\"matchType\">{{matchType.matchTypeDescription}}</option>\r\n        </select>\r\n    </div>\r\n    <button (click)=\"saveThenBack()\">Save</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Match/match-creation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchCreationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Player_player__ = __webpack_require__("../../../../../src/app/Player/player.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Player_player_service__ = __webpack_require__("../../../../../src/app/Player/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__match__ = __webpack_require__("../../../../../src/app/Match/match.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__match_service__ = __webpack_require__("../../../../../src/app/Match/match.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MatchType_match_type_service__ = __webpack_require__("../../../../../src/app/MatchType/match-type.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MatchCreationComponent = (function () {
    function MatchCreationComponent(playerService, matchService, matchTypeService, location, router, activatedRoute) {
        this.playerService = playerService;
        this.matchService = matchService;
        this.matchTypeService = matchTypeService;
        this.location = location;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.selectedPlayer1 = new __WEBPACK_IMPORTED_MODULE_3__Player_player__["a" /* Player */]();
        this.selectedPlayer2 = new __WEBPACK_IMPORTED_MODULE_3__Player_player__["a" /* Player */]();
    }
    MatchCreationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayers()
            .then(function (result) {
            _this.allPlayers = result.sort(function (x, y) {
                if ((x.firstName + x.lastName) < (y.firstName + y.lastName)) {
                    return -1;
                }
                else if ((x.firstName + x.lastName) > (y.firstName + y.lastName)) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        });
        this.matchTypeService.getMatchTypes()
            .then(function (result) {
            _this.allMatchTypes = result;
        });
        this.activatedRoute.params
            .switchMap(function (params) {
            if (params['id']) {
                return _this.matchService.getMatch(params['id']);
            }
            return new Promise(function (resolve) {
                return new __WEBPACK_IMPORTED_MODULE_5__match__["a" /* Match */]();
            });
        }).subscribe(function (foundMatch) {
            _this.matchId = foundMatch.matchId;
            _this.selectedPlayer1 = _this.allPlayers.find(function (player) { return player.playerId === foundMatch.player1Id; });
            _this.selectedPlayer2 = _this.allPlayers.find(function (player) { return player.playerId === foundMatch.player2Id; });
            _this.team1Score = foundMatch.team1Score;
            _this.team2Score = foundMatch.team2Score;
            _this.selectedMatchType = _this.allMatchTypes.find(function (matchType) { return matchType.matchTypeId === foundMatch.matchTypeId; });
        });
    };
    MatchCreationComponent.prototype.save = function () {
        var insertMatch = new __WEBPACK_IMPORTED_MODULE_5__match__["a" /* Match */]();
        insertMatch.matchId = this.matchId;
        insertMatch.player1Id = this.selectedPlayer1.playerId;
        insertMatch.player2Id = this.selectedPlayer2.playerId;
        //insertMatch.player3Id = this.selectedPlayer3.playerId;
        //insertMatch.player4Id = this.selectedPlayer4.playerId;
        insertMatch.team1Score = this.team1Score;
        insertMatch.team2Score = this.team2Score;
        insertMatch.isDoubles = false;
        insertMatch.matchTypeId = this.selectedMatchType.matchTypeId;
        return this.matchService.saveMatch(insertMatch);
    };
    MatchCreationComponent.prototype.saveThenBack = function () {
        var _this = this;
        this.save()
            .then(function (match) {
            _this.location.back();
        });
    };
    return MatchCreationComponent;
}());
MatchCreationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'match-creation',
        template: __webpack_require__("../../../../../src/app/Match/match-creation.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__Player_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Player_player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__match_service__["a" /* MatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__match_service__["a" /* MatchService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__MatchType_match_type_service__["a" /* MatchTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__MatchType_match_type_service__["a" /* MatchTypeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object])
], MatchCreationComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=match-creation.component.js.map

/***/ }),

/***/ "../../../../../src/app/Match/match-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Fooseball Matches</h3>\r\n<div>\r\n    <button (click)=\"addNew()\">Add Match</button>\r\n    <a *ngFor=\"let match of allMatches\" [routerLink]=\"['/matchcreate', match.matchId]\">\r\n        <div>\r\n            <h4>{{match.player1.firstName}} {{match.player1.lastName}} vs. {{match.player2.firstName}} {{match.player2.lastName}} --- {{match.team1Score}}-{{match.team2Score}}</h4>\r\n        </div>\r\n    </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Match/match-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchSelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_service__ = __webpack_require__("../../../../../src/app/Match/match.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Player_player_service__ = __webpack_require__("../../../../../src/app/Player/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MatchSelectionComponent = (function () {
    function MatchSelectionComponent(matchService, playerService, router) {
        this.matchService = matchService;
        this.playerService = playerService;
        this.router = router;
        this.allMatches = [];
        this.searchTerm = null;
    }
    MatchSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.matchService.getMatches()
            .then(function (result) {
            _this.allMatches = result;
        });
    };
    MatchSelectionComponent.prototype.addNew = function () {
        this.router.navigate(['./matchcreate']);
    };
    return MatchSelectionComponent;
}());
MatchSelectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'match-selection',
        template: __webpack_require__("../../../../../src/app/Match/match-selection.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__match_service__["a" /* MatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__match_service__["a" /* MatchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Player_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Player_player_service__["a" /* PlayerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], MatchSelectionComponent);

var _a, _b, _c;
//# sourceMappingURL=match-selection.component.js.map

/***/ }),

/***/ "../../../../../src/app/Match/match.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_constants__ = __webpack_require__("../../../../../src/app/global-constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Player_player_service__ = __webpack_require__("../../../../../src/app/Player/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MatchService = (function () {
    function MatchService(http, playerService) {
        this.http = http;
        this.playerService = playerService;
        this.matchUrl = __WEBPACK_IMPORTED_MODULE_5__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + 'api/Match';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
    }
    MatchService.prototype.getMatches = function () {
        var _this = this;
        var cacheCheckTime = new Date();
        cacheCheckTime.setMinutes(cacheCheckTime.getMinutes() - 15);
        if (this.lastCacheDate < cacheCheckTime) {
            var paramedUrl = this.matchUrl + '?LoadPlayerInfo=true';
            return this.http.get(paramedUrl)
                .toPromise()
                .then(function (response) {
                _this.allMatches = response.json();
                _this.lastCacheDate = new Date();
                return _this.allMatches;
            })
                .catch(function (error) {
                console.error('An error occured', error);
                return Promise.reject(error.message || error);
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.allMatches)
                .toPromise()
                .then(function (things) {
                return _this.allMatches;
            });
        }
    };
    MatchService.prototype.getMatch = function (matchId) {
        return this.getMatches()
            .then(function (matches) {
            return matches.find(function (match) { return match.matchId === matchId; });
        });
    };
    MatchService.prototype.getPlayerMatches = function (playerId) {
        return this.getMatches()
            .then(function (matches) {
            return matches.filter(function (match) {
                return match.player1Id === (playerId)
                    || match.player2Id === (playerId)
                    || match.player3Id === (playerId)
                    || match.player4Id === (playerId);
            });
        });
    };
    MatchService.prototype.saveMatch = function (matchForSaving) {
        var _this = this;
        if (matchForSaving.matchId) {
            return this.http
                .put(this.matchUrl, JSON.stringify(matchForSaving), { headers: this.headers })
                .toPromise()
                .then(function (result) {
                //Resetting the last cache date so the list of players is refreshed
                _this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
                return result.json();
            });
        }
        else {
            return this.http
                .post(this.matchUrl, JSON.stringify(matchForSaving), { headers: this.headers })
                .toPromise()
                .then(function (result) {
                //Resetting the last cache date so the list of players is refreshed
                _this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
                return result.json();
            });
        }
    };
    return MatchService;
}());
MatchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__Player_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__Player_player_service__["a" /* PlayerService */]) === "function" && _b || Object])
], MatchService);

var _a, _b;
//# sourceMappingURL=match.service.js.map

/***/ }),

/***/ "../../../../../src/app/Match/match.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Match; });
var Match = (function () {
    function Match() {
    }
    return Match;
}());

//# sourceMappingURL=match.js.map

/***/ }),

/***/ "../../../../../src/app/MatchType/match-type-management.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Match Types</h3>\r\n<div *ngFor=\"let matchType of allMatchTypes\">\r\n    <input [(ngModel)]=\"matchType.matchTypeDescription\">\r\n    <button (click)=\"removeMatch(matchType.matchTypeId)\">x</button>\r\n</div>\r\n<button (click)=\"addBlankMatchType()\">Add Type</button>\r\n<button (click)=\"saveAllMatchTypes()\">Save Matches</button>"

/***/ }),

/***/ "../../../../../src/app/MatchType/match-type-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchTypeManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__match_type__ = __webpack_require__("../../../../../src/app/MatchType/match-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_type_service__ = __webpack_require__("../../../../../src/app/MatchType/match-type.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchTypeManagementComponent = (function () {
    function MatchTypeManagementComponent(matchTypeService) {
        this.matchTypeService = matchTypeService;
        this.allMatchTypes = [];
    }
    MatchTypeManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.matchTypeService.getMatchTypes()
            .then(function (result) {
            _this.allMatchTypes = result;
        });
    };
    MatchTypeManagementComponent.prototype.addBlankMatchType = function () {
        this.allMatchTypes.push(new __WEBPACK_IMPORTED_MODULE_1__match_type__["a" /* MatchType */]());
    };
    MatchTypeManagementComponent.prototype.saveAllMatchTypes = function () {
        var _this = this;
        this.allMatchTypes.forEach(function (matchType) {
            _this.matchTypeService.saveMatchType(matchType);
        });
    };
    MatchTypeManagementComponent.prototype.removeMatch = function (delMatchTypeId) {
        var delMatchType = this.allMatchTypes.find(function (x) { return x.matchTypeId === delMatchTypeId; });
        var delIndex = this.allMatchTypes.indexOf(delMatchType);
        this.allMatchTypes.splice(delIndex, 1);
        this.matchTypeService.deleteMatchType(delMatchType);
    };
    return MatchTypeManagementComponent;
}());
MatchTypeManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'match-type-management',
        template: __webpack_require__("../../../../../src/app/MatchType/match-type-management.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__match_type_service__["a" /* MatchTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__match_type_service__["a" /* MatchTypeService */]) === "function" && _a || Object])
], MatchTypeManagementComponent);

var _a;
//# sourceMappingURL=match-type-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/MatchType/match-type.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchTypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_constants__ = __webpack_require__("../../../../../src/app/global-constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MatchTypeService = (function () {
    function MatchTypeService(http) {
        this.http = http;
        this.matchTypeUrl = __WEBPACK_IMPORTED_MODULE_5__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + 'api/MatchType';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
    }
    MatchTypeService.prototype.getMatchTypes = function () {
        var _this = this;
        var cacheCheckTime = new Date();
        cacheCheckTime.setMinutes(cacheCheckTime.getMinutes() - 15);
        if (this.lastCacheDate < cacheCheckTime) {
            return this.http.get(this.matchTypeUrl)
                .toPromise()
                .then(function (response) {
                _this.allMatchTypes = response.json();
                _this.lastCacheDate = new Date();
                return _this.allMatchTypes;
            })
                .catch(function (error) {
                console.error('An error occured', error);
                return Promise.reject(error.message || error);
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.allMatchTypes)
                .toPromise()
                .then(function (things) {
                return _this.allMatchTypes;
            });
        }
    };
    MatchTypeService.prototype.saveMatchType = function (matchTypeForSaving) {
        var _this = this;
        return this.http
            .put(this.matchTypeUrl, JSON.stringify(matchTypeForSaving), { headers: this.headers })
            .toPromise()
            .then(function (result) {
            //Resetting the last cache date so the list of players is refreshed
            _this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
            return result.json();
        });
    };
    MatchTypeService.prototype.deleteMatchType = function (matchIdToDelete) {
        var _this = this;
        return this.http
            .post(this.matchTypeUrl + '/Delete', JSON.stringify(matchIdToDelete), { headers: this.headers })
            .toPromise()
            .then(function (result) {
            _this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
            return result.json();
        });
    };
    return MatchTypeService;
}());
MatchTypeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MatchTypeService);

var _a;
//# sourceMappingURL=match-type.service.js.map

/***/ }),

/***/ "../../../../../src/app/MatchType/match-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchType; });
var MatchType = (function () {
    function MatchType() {
    }
    return MatchType;
}());

//# sourceMappingURL=match-type.js.map

/***/ }),

/***/ "../../../../../src/app/Player/PlayerDetail/player-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*='col-'] {\r\n  float: left;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n[class*='col-']:last-of-type {\r\n  padding-right: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n*, *:after, *:before {\r\n  box-sizing: border-box;\r\n}\r\nh3 {\r\n  text-align: center; margin-bottom: 0;\r\n}\r\nh4 {\r\n  position: relative;\r\n}\r\n.grid {\r\n  margin: 0;\r\n}\r\n.col-1-4 {\r\n  width: 25%;\r\n}\r\n.sizedchart {\r\n  width: 100%;\r\n  height: 500px;\r\n}\r\n.module {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #eee;\r\n  max-height: 120px;\r\n  min-width: 120px;\r\n  background-color: #607D8B;\r\n  border-radius: 2px;\r\n}\r\n.module:hover {\r\n  background-color: #EEE;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n}\r\n.grid-pad {\r\n  padding: 10px 0;\r\n}\r\n.grid-pad > [class*='col-']:last-of-type {\r\n  padding-right: 20px;\r\n}\r\n@media (max-width: 600px) {\r\n  .module {\r\n    font-size: 10px;\r\n    max-height: 75px; }\r\n}\r\n@media (max-width: 1024px) {\r\n  .grid {\r\n    margin: 0;\r\n  }\r\n  .module {\r\n    min-width: 60px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Player/PlayerDetail/player-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"player\">\r\n        <h2>{{player.firstName}} {{player.lastName}} - {{player.nickName}} details</h2>\r\n        <select [(ngModel)]=\"selectedMatchTypeId\" [formControl]=\"matchTypeControl\">\r\n                <option *ngFor=\"let matchType of allMatchTypes\" [ngValue]=\"matchType.matchTypeId\">{{matchType.matchTypeDescription}}</option>\r\n        </select>\r\n        <h3>{{graphTitle}}</h3>\r\n        <div class=\"sizedchart\">\r\n                <!-- [view]=\"view\" -->\r\n                <ngx-charts-bar-vertical-2d\r\n                *ngIf=\"showChart\"\r\n                [scheme]=\"colorScheme\"\r\n                [results]=\"barChartData\"\r\n                [gradient]=\"gradient\"\r\n                [xAxis]=\"showXAxis\"\r\n                [yAxis]=\"showYAxis\"\r\n                [legend]=\"showLegend\"\r\n                [showXAxisLabel]=\"showXAxisLabel\"\r\n                [showYAxisLabel]=\"showYAxisLabel\"\r\n                [xAxisLabel]=\"xAxisLabel\"\r\n                [yAxisLabel]=\"yAxisLabel\"\r\n                [yScaleMax]=\"yScaleMax\">\r\n                </ngx-charts-bar-vertical-2d>\r\n                <div class=\"grid grid-pad\">\r\n                        <div class=\"col-1-4\" (click)=\"loadGamesWon()\"> <!--[routerLink]=\"['/detail', hero.id]\"-->\r\n                                <div class=\"module hero\">\r\n                                <h4>Games Won</h4>\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"col-1-4\" (click)=\"loadGamesPlayed()\"> <!--[routerLink]=\"['/detail', hero.id]\"-->\r\n                                <div class=\"module hero\">\r\n                                <h4>Games Played</h4>\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"col-1-4\" (click)=\"loadGamesWonPct()\"> <!--[routerLink]=\"['/detail', hero.id]\"-->\r\n                                <div class=\"module hero\">\r\n                                <h4>Win %</h4>\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"col-1-4\" (click)=\"loadPointsPerGame()\"> <!--[routerLink]=\"['/detail', hero.id]\"-->\r\n                                <div class=\"module hero\">\r\n                                <h4>Most William</h4>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n        <button (click)=\"modifyPlayer()\">Modify Player</button>\r\n        <button (click)=\"deletePlayer()\">Delete Player</button>\r\n        <a *ngFor=\"let match of filteredMatches\" [routerLink]=\"['/matchcreate', match.matchId]\">\r\n                <li>{{match.player1.firstName}} {{match.player1.lastName}} vs. {{match.player2.firstName}} {{match.player2.lastName}} --- {{match.team1Score}}-{{match.team2Score}}</li>\r\n        </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Player/PlayerDetail/player-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_service__ = __webpack_require__("../../../../../src/app/Player/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rival_service__ = __webpack_require__("../../../../../src/app/Player/rival.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Match_match_service__ = __webpack_require__("../../../../../src/app/Match/match.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MatchType_match_type_service__ = __webpack_require__("../../../../../src/app/MatchType/match-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PlayerDetailComponent = (function () {
    function PlayerDetailComponent(playerService, rivalService, matchService, activatedRoute, location, router, matchTypeService) {
        this.playerService = playerService;
        this.rivalService = rivalService;
        this.matchService = matchService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.router = router;
        this.matchTypeService = matchTypeService;
        this.matchTypeControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormControl */]();
        this.allMatchTypes = [];
        this.selectedMatchTypeId = '';
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = false;
        this.xAxisLabel = 'Player';
        this.showYAxisLabel = false;
        this.yAxisLabel = 'Games';
        this.yScaleMax = 0;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.barChartData = [];
        this.showChart = false;
        this.graphTitle = '';
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.matchTypeControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormControl */]();
        this.activatedRoute.params
            .switchMap(function (params) {
            return _this.playerService.getPlayer(params['id']);
        }).subscribe(function (foundPlayer) {
            _this.player = foundPlayer;
            _this.matchService.getPlayerMatches(foundPlayer.playerId)
                .then(function (resultMatches) { return _this.playedMatches = resultMatches; })
                .then(function () { return _this.rivalService.getRivals(foundPlayer.playerId); })
                .then(function (resultRivals) { return _this.rivalPlayers = resultRivals; })
                .then(function () { return _this.matchTypeService.getMatchTypes(); })
                .then(function (matchTypes) {
                _this.allMatchTypes = matchTypes;
                _this.selectedMatchTypeId = _this.allMatchTypes[0].matchTypeId;
            })
                .then(function () {
                _this.loadGamesWon();
            })
                .then(function () {
                var test = _this.matchTypeControl.valueChanges;
                test.subscribe(function (value) {
                    _this.filteredMatches = _this.playedMatches.filter(function (x) { return x.matchTypeId === value; });
                    switch (_this.graphTitle) {
                        case 'Games Won':
                            _this.loadGamesWon();
                            break;
                        case 'Games Played':
                            _this.loadGamesPlayed();
                            break;
                        case 'Win %':
                            _this.loadGamesWonPct();
                            break;
                        case 'Points Per Game':
                            _this.loadPointsPerGame();
                            break;
                        default:
                            _this.loadGamesWon();
                    }
                });
            });
        });
    };
    PlayerDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PlayerDetailComponent.prototype.deletePlayer = function () {
        var _this = this;
        this.playerService.deletePlayer(this.player)
            .then(function (deletes) {
            if (deletes > 1) {
                //This isn't supposed to happen
            }
            _this.goBack();
        });
    };
    PlayerDetailComponent.prototype.modifyPlayer = function () {
        var route = './playercreate/' + this.player.playerId;
        this.router.navigate([route]);
    };
    PlayerDetailComponent.prototype.loadGamesPlayed = function () {
        var _this = this;
        this.showChart = false;
        this.rivalPlayers = this.rivalPlayers.sort(function (x, y) {
            if (x.rivalGamesPlayed[_this.selectedMatchTypeId] > y.rivalGamesPlayed[_this.selectedMatchTypeId]) {
                return -1;
            }
            else if (x.rivalGamesPlayed[_this.selectedMatchTypeId] < y.rivalGamesPlayed[_this.selectedMatchTypeId]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.barChartData = [];
        this.colorScheme.domain = [];
        this.colorScheme.domain.push(this.player.hexColor || '#1f53d9');
        this.colorScheme.domain.push(this.rivalPlayers[0].hexColor || '#1f53d9');
        this.rivalPlayers.map(function (player) {
            if (player.rivalGamesPlayed[_this.selectedMatchTypeId] > 0) {
                _this.barChartData.push({ name: player.firstName + ' ' + player.lastName, series: [
                        { name: 'Player', value: player.playerGamesPlayed[_this.selectedMatchTypeId] },
                        { name: 'Rival', value: player.rivalGamesPlayed[_this.selectedMatchTypeId] }
                    ] });
            }
        });
        this.yScaleMax = 0;
        this.graphTitle = 'Games Played';
        this.showChart = true;
    };
    PlayerDetailComponent.prototype.loadGamesWon = function () {
        var _this = this;
        this.showChart = false;
        var huh = this.rivalPlayers;
        this.rivalPlayers = this.rivalPlayers.sort(function (x, y) {
            if (x.rivalGamesWon[_this.selectedMatchTypeId] > y.rivalGamesWon[_this.selectedMatchTypeId]) {
                return -1;
            }
            else if (x.rivalGamesWon[_this.selectedMatchTypeId] < y.rivalGamesWon[_this.selectedMatchTypeId]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.barChartData = [];
        this.colorScheme.domain = [];
        this.colorScheme.domain.push(this.player.hexColor || '#1f53d9');
        this.colorScheme.domain.push(this.rivalPlayers[0].hexColor || '#1f53d9');
        this.rivalPlayers.map(function (player) {
            if (player.rivalGamesPlayed[_this.selectedMatchTypeId] > 0) {
                _this.barChartData.push({ name: player.firstName + ' ' + player.lastName, series: [
                        { name: 'Player', value: player.playerGamesWon[_this.selectedMatchTypeId] },
                        { name: 'Rival', value: player.rivalGamesWon[_this.selectedMatchTypeId] }
                    ] });
            }
        });
        this.yScaleMax = 0;
        this.graphTitle = 'Games Won';
        this.showChart = true;
    };
    PlayerDetailComponent.prototype.loadGamesWonPct = function () {
        var _this = this;
        this.showChart = false;
        this.rivalPlayers = this.rivalPlayers.sort(function (x, y) {
            if (x.rivalGamesWonPct[_this.selectedMatchTypeId] > y.rivalGamesWonPct[_this.selectedMatchTypeId]) {
                return -1;
            }
            else if (x.rivalGamesWonPct[_this.selectedMatchTypeId] < y.rivalGamesWonPct[_this.selectedMatchTypeId]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.barChartData = [];
        this.colorScheme.domain = [];
        this.colorScheme.domain.push(this.player.hexColor || '#1f53d9');
        this.colorScheme.domain.push(this.rivalPlayers[0].hexColor || '#1f53d9');
        this.rivalPlayers.map(function (player) {
            if (player.rivalGamesPlayed[_this.selectedMatchTypeId] > 0) {
                _this.barChartData.push({ name: player.firstName + ' ' + player.lastName, series: [
                        { name: 'Player', value: player.playerGamesWonPct[_this.selectedMatchTypeId] },
                        { name: 'Rival', value: player.rivalGamesWonPct[_this.selectedMatchTypeId] }
                    ] });
            }
        });
        this.yScaleMax = 100;
        this.graphTitle = 'Win %';
        this.showChart = true;
    };
    PlayerDetailComponent.prototype.loadPointsPerGame = function () {
        var _this = this;
        this.showChart = false;
        this.rivalPlayers = this.rivalPlayers.sort(function (x, y) {
            if (x.rivalPointsPerGame[_this.selectedMatchTypeId] > y.rivalPointsPerGame[_this.selectedMatchTypeId]) {
                return -1;
            }
            else if (x.rivalPointsPerGame[_this.selectedMatchTypeId] < y.rivalPointsPerGame[_this.selectedMatchTypeId]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.barChartData = [];
        this.colorScheme.domain = [];
        this.colorScheme.domain.push(this.player.hexColor || '#1f53d9');
        this.colorScheme.domain.push(this.rivalPlayers[0].hexColor || '#1f53d9');
        this.rivalPlayers.map(function (player) {
            if (player.rivalGamesPlayed[_this.selectedMatchTypeId] > 0) {
                _this.barChartData.push({ name: player.firstName + ' ' + player.lastName, series: [
                        { name: 'Player', value: player.playerPointsPerGame[_this.selectedMatchTypeId] },
                        { name: 'Rival', value: player.rivalPointsPerGame[_this.selectedMatchTypeId] }
                    ] });
            }
        });
        this.yScaleMax = 8;
        this.graphTitle = 'Points Per Game';
        this.showChart = true;
    };
    return PlayerDetailComponent;
}());
PlayerDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        styles: [__webpack_require__("../../../../../src/app/Player/PlayerDetail/player-detail.component.css")],
        selector: 'player-detail',
        template: __webpack_require__("../../../../../src/app/Player/PlayerDetail/player-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__rival_service__["a" /* RivalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__rival_service__["a" /* RivalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__Match_match_service__["a" /* MatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__Match_match_service__["a" /* MatchService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__MatchType_match_type_service__["a" /* MatchTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__MatchType_match_type_service__["a" /* MatchTypeService */]) === "function" && _g || Object])
], PlayerDetailComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=player-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/Player/player-creation.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>New Player</h3>\r\n<div>\r\n    <div>\r\n        <label>First Name</label>\r\n        <input [(ngModel)]=\"firstName\">\r\n    </div>\r\n    <div>\r\n        <label>Last Name</label>\r\n        <input [(ngModel)]=\"lastName\">\r\n    </div>\r\n    <div>\r\n        <label>Nickname</label>\r\n        <input [(ngModel)]=\"nickName\">\r\n    </div>\r\n    <div>\r\n        <label>PlayerColor</label>\r\n        <input [(colorPicker)]=\"hexColor\" [style.background]=\"hexColor\" [value]=\"hexColor\"/>\r\n    </div>\r\n    <div>\r\n        <label>Player Location</label>\r\n        <select [(ngModel)]=\"locationId\">\r\n            <option *ngFor=\"let location of allLocations\" [ngValue]=\"location.locationId\">{{location.locationDescription}} - {{location.locationCode}}</option>\r\n        </select>\r\n    </div>\r\n    <div>\r\n        <label>Player AlmaMater</label>\r\n        <select [(ngModel)]=\"almaMaterId\">\r\n            <option *ngFor=\"let almaMater of allAlmaMaters\" [ngValue]=\"almaMater.almaMaterId\">{{almaMater.almaMaterDescription}} - {{almaMater.almaMaterCode}}</option>\r\n        </select>\r\n    </div>\r\n    <button (click)=\"saveThenView()\">Save</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Player/player-creation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerCreationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__("../../../../../src/app/Player/player.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_service__ = __webpack_require__("../../../../../src/app/Player/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AlmaMater_alma_mater_service__ = __webpack_require__("../../../../../src/app/AlmaMater/alma-mater.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Location_location_service__ = __webpack_require__("../../../../../src/app/Location/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlayerCreationComponent = (function () {
    function PlayerCreationComponent(playerService, almaMaterService, locationService, router, activatedRoute) {
        this.playerService = playerService;
        this.almaMaterService = almaMaterService;
        this.locationService = locationService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    PlayerCreationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .switchMap(function (params) {
            if (params['id']) {
                return _this.playerService.getPlayer(params['id']);
            }
            return new Promise(function (resolve) {
                return new __WEBPACK_IMPORTED_MODULE_2__player__["a" /* Player */]();
            });
        }).subscribe(function (foundPlayer) {
            _this.playerId = foundPlayer.playerId;
            _this.firstName = foundPlayer.firstName;
            _this.lastName = foundPlayer.lastName;
            _this.nickName = foundPlayer.nickName;
            _this.hexColor = foundPlayer.hexColor;
            _this.locationId = foundPlayer.locationId;
            _this.almaMaterId = foundPlayer.almaMaterId;
        });
        this.locationService.getLocations()
            .then(function (result) { return _this.allLocations = result; });
        this.almaMaterService.getAlmaMaters()
            .then(function (result) { return _this.allAlmaMaters = result; });
    };
    PlayerCreationComponent.prototype.save = function () {
        var insertPlayer = new __WEBPACK_IMPORTED_MODULE_2__player__["a" /* Player */]();
        insertPlayer.firstName = this.firstName;
        insertPlayer.lastName = this.lastName;
        insertPlayer.nickName = this.nickName;
        insertPlayer.playerId = this.playerId;
        insertPlayer.hexColor = this.hexColor;
        insertPlayer.locationId = this.locationId;
        insertPlayer.almaMaterId = this.almaMaterId;
        return this.playerService.savePlayer(insertPlayer);
    };
    PlayerCreationComponent.prototype.saveThenView = function () {
        var _this = this;
        this.save()
            .then(function (player) {
            if (player != null) {
                var route = './players/' + player.playerId;
                _this.router.navigate([route]);
            }
            else {
                return;
            }
        });
    };
    return PlayerCreationComponent;
}());
PlayerCreationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'player-creation',
        template: __webpack_require__("../../../../../src/app/Player/player-creation.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__AlmaMater_alma_mater_service__["a" /* AlmaMaterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__AlmaMater_alma_mater_service__["a" /* AlmaMaterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__Location_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__Location_location_service__["a" /* LocationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], PlayerCreationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=player-creation.component.js.map

/***/ }),

/***/ "../../../../../src/app/Player/player-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Players</h3>\r\n<div>\r\n    <input (keydown.enter)=\"search()\" [(ngModel)]=\"searchTerm\">\r\n    <button (click)=\"search()\">Search</button>\r\n    <button (click)=\"addNew()\">Add Player</button>\r\n    <a *ngFor=\"let player of players\" [routerLink]=\"['/players', player.playerId]\">\r\n        <div>\r\n            <h4>{{player.firstName}} {{player.lastName}} - {{player.nickName}}</h4>\r\n        </div>\r\n    </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Player/player-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerSelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_service__ = __webpack_require__("../../../../../src/app/Player/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerSelectionComponent = (function () {
    function PlayerSelectionComponent(playerService, router) {
        this.playerService = playerService;
        this.router = router;
        this.allPlayers = [];
        this.players = [];
        this.searchTerm = null;
    }
    PlayerSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayers()
            .then(function (result) {
            _this.allPlayers = result;
            _this.players = result;
        });
    };
    PlayerSelectionComponent.prototype.search = function () {
        var _this = this;
        this.players = this.allPlayers.filter(function (player) {
            return ''
                .concat(player.firstName.toUpperCase(), ' ')
                .concat(player.lastName.toUpperCase(), ' ')
                .concat(player.nickName.toUpperCase())
                .includes(_this.searchTerm == null ? '' : _this.searchTerm.toUpperCase());
        });
    };
    PlayerSelectionComponent.prototype.addNew = function () {
        this.router.navigate(['./playercreate']);
    };
    return PlayerSelectionComponent;
}());
PlayerSelectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'player-selection',
        template: __webpack_require__("../../../../../src/app/Player/player-selection.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PlayerSelectionComponent);

var _a, _b;
//# sourceMappingURL=player-selection.component.js.map

/***/ }),

/***/ "../../../../../src/app/Player/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_constants__ = __webpack_require__("../../../../../src/app/global-constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlayerService = (function () {
    function PlayerService(http) {
        this.http = http;
        this.playerUrl = __WEBPACK_IMPORTED_MODULE_5__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + 'api/Player';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
    }
    PlayerService.prototype.getPlayers = function () {
        var _this = this;
        var cacheCheckTime = new Date();
        cacheCheckTime.setMinutes(cacheCheckTime.getMinutes() - 15);
        if (this.lastCacheDate < cacheCheckTime) {
            var MatchesParamAdded = this.playerUrl + '?LoadGamesInfo=true&LoadPointInfo=true';
            return this.http.get(MatchesParamAdded)
                .toPromise()
                .then(function (response) {
                _this.allPlayers = response.json();
                _this.lastCacheDate = new Date();
                return response.json();
            })
                .catch(function (error) {
                console.error('An error occured', error);
                return Promise.reject(error.message || error);
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.allPlayers)
                .toPromise()
                .then(function (things) {
                return _this.allPlayers;
            });
        }
    };
    PlayerService.prototype.getPlayer = function (playerId) {
        return this.getPlayers()
            .then(function (players) {
            return players.find(function (player) { return player.playerId === playerId; });
        });
    };
    PlayerService.prototype.savePlayer = function (playerForSaving) {
        var _this = this;
        //At least through the front end, don't let people save "duplicate" players
        return this.getPlayers()
            .then(function (players) {
            if (players.find(function (x) {
                return x.firstName === playerForSaving.firstName
                    && x.lastName === playerForSaving.lastName
                    && x.nickName === playerForSaving.nickName
                    && !playerForSaving.playerId;
            })) {
                return new Promise(function (resolve) {
                    return null;
                });
            }
            else {
                if (playerForSaving.playerId) {
                    return _this.http
                        .put(_this.playerUrl, JSON.stringify(playerForSaving), { headers: _this.headers })
                        .toPromise()
                        .then(function (result) {
                        //Resetting the last cache date so the list of players is refreshed
                        _this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
                        return result.json();
                    });
                }
                else {
                    return _this.http
                        .post(_this.playerUrl, JSON.stringify(playerForSaving), { headers: _this.headers })
                        .toPromise()
                        .then(function (result) {
                        //Resetting the last cache date so the list of players is refreshed
                        _this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
                        return result.json();
                    });
                }
            }
        });
    };
    PlayerService.prototype.deletePlayer = function (playerToDelete) {
        var _this = this;
        return this.http
            .post(this.playerUrl + '/Delete', JSON.stringify(playerToDelete), { headers: this.headers })
            .toPromise()
            .then(function (result) {
            _this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
            return result.json();
        });
    };
    return PlayerService;
}());
PlayerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PlayerService);

var _a;
//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ "../../../../../src/app/Player/player.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var Player = (function () {
    function Player() {
    }
    return Player;
}());

//# sourceMappingURL=player.js.map

/***/ }),

/***/ "../../../../../src/app/Player/rival.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RivalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_constants__ = __webpack_require__("../../../../../src/app/global-constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RivalService = (function () {
    function RivalService(http) {
        this.http = http;
        this.rivalsUrl = __WEBPACK_IMPORTED_MODULE_4__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + 'api/Rivals';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
    }
    RivalService.prototype.getRivals = function (playerId) {
        var _this = this;
        var MatchesParamAdded = this.rivalsUrl + '?playerId=' + playerId;
        return this.http.get(MatchesParamAdded)
            .toPromise()
            .then(function (response) {
            _this.allPlayers = response.json();
            _this.lastCacheDate = new Date();
            return response.json();
        })
            .catch(function (error) {
            console.error('An error occured', error);
            return Promise.reject(error.message || error);
        });
    };
    return RivalService;
}());
RivalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RivalService);

var _a;
//# sourceMappingURL=rival.service.js.map

/***/ }),

/***/ "../../../../../src/app/Tournament/tournament-bracket.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n *  Flex Layout Specifics\r\n*/\r\nmain{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient:horizontal;\r\n    -webkit-box-direction:normal;\r\n        -ms-flex-direction:row;\r\n            flex-direction:row;\r\n  }\r\n  .round{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient:vertical;\r\n    -webkit-box-direction:normal;\r\n        -ms-flex-direction:column;\r\n            flex-direction:column;\r\n    -webkit-box-pack:center;\r\n        -ms-flex-pack:center;\r\n            justify-content:center;\r\n    width:200px;\r\n    list-style:none;\r\n    padding:0;\r\n  }\r\n    .round .spacer{ -webkit-box-flex:1; -ms-flex-positive:1; flex-grow:1; }\r\n    .round .spacer:first-child,\r\n    .round .spacer:last-child{ -webkit-box-flex:.5; -ms-flex-positive:.5; flex-grow:.5; }\r\n  \r\n    .round .game-spacer{\r\n      -webkit-box-flex:1;\r\n          -ms-flex-positive:1;\r\n              flex-grow:1;\r\n    }\r\n  \r\n  /*\r\n   *  General Styles\r\n  */\r\n  body{\r\n    font-family:sans-serif;\r\n    font-size:small;\r\n    padding:10px;\r\n    line-height:1.4em;\r\n  }\r\n  \r\n  li.game{\r\n    padding-left:20px;\r\n  }\r\n  \r\n    li.game.winner{\r\n      font-weight:bold;\r\n    }\r\n    li.game span{\r\n      float:right;\r\n      margin-right:5px;\r\n    }\r\n  \r\n    li.game-top{ border-bottom:1px solid #aaa; }\r\n  \r\n    li.game-spacer{ \r\n      border-right:1px solid #aaa;\r\n      min-height:40px;\r\n    }\r\n  \r\n    li.game-bottom{ \r\n      border-top:1px solid #aaa;\r\n    }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Tournament/tournament-bracket.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>The Damn Bracket</h3>\r\n<div>\r\n<main id=\"tournament\">\r\n    <ul *ngFor=\"let roundies of rounds; let i = index\" class=\"round round-{{i + 1}}\">\r\n        <li class=\"spacer\">&nbsp;</li>\r\n\r\n        <ng-container *ngFor=\"let game of roundies\">\r\n            <li class=\"game game-top\">{{game.player1 && game.player1.firstName}} {{game.player1 && game.player1.lastName}} <span>{{game.team1Score}}</span></li>\r\n            <li class=\"game game-spacer\">&nbsp;</li>\r\n            <li class=\"game game-bottom \">{{game.player2 && game.player2.firstName}} {{game.player2 && game.player2.lastName}} <span>{{game.team2Score}}</span></li>\r\n            \r\n            <li class=\"spacer\">&nbsp;</li>\r\n        </ng-container>\r\n    </ul>\r\n</main>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Tournament/tournament-bracket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentBracketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tournament__ = __webpack_require__("../../../../../src/app/Tournament/tournament.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tournament_service__ = __webpack_require__("../../../../../src/app/Tournament/tournament.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TournamentBracketComponent = (function () {
    function TournamentBracketComponent(tournamentService, router, activatedRoute) {
        this.tournamentService = tournamentService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.rounds = [];
    }
    TournamentBracketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .switchMap(function (params) {
            if (params['id']) {
                return _this.tournamentService.getTournamentComplete(params['id']);
            }
            return new Promise(function (resolve) {
                return new __WEBPACK_IMPORTED_MODULE_2__tournament__["a" /* Tournament */]();
            });
        }).subscribe(function (foundTournament) {
            _this.tournament = foundTournament;
            _this.recurseForRounds(foundTournament.tournamentMatch, 0);
            _this.rounds.reverse();
        });
    };
    TournamentBracketComponent.prototype.recurseForRounds = function (currentTourneyMatch, currentRound) {
        if (currentTourneyMatch !== null) {
            if (!this.rounds[currentRound]) {
                this.rounds.push(new Array());
            }
            this.rounds[currentRound].push(currentTourneyMatch.currentMatch);
            this.recurseForRounds(currentTourneyMatch.leftMatch, currentRound + 1);
            this.recurseForRounds(currentTourneyMatch.rightMatch, currentRound + 1);
        }
    };
    return TournamentBracketComponent;
}());
TournamentBracketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        styles: [__webpack_require__("../../../../../src/app/Tournament/tournament-bracket.component.css")],
        selector: 'tournament-bracket',
        template: __webpack_require__("../../../../../src/app/Tournament/tournament-bracket.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__tournament_service__["a" /* TournamentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__tournament_service__["a" /* TournamentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], TournamentBracketComponent);

var _a, _b, _c;
//# sourceMappingURL=tournament-bracket.component.js.map

/***/ }),

/***/ "../../../../../src/app/Tournament/tournament-creation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* dragula-specific example page styles */\r\n.bamboozled {\r\ndisplay: table;\r\n}\r\n.innerBamboozle {\r\n    display: table-cell;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    width: 50%;\r\n}\r\n.innerBamboozle:nth-child(odd) {\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n/*\r\n* note that styling gu-mirror directly is a bad practice because it's too generic.\r\n* you're better off giving the draggable elements a unique class and styling that directly!\r\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Tournament/tournament-creation.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Tournament Creation</h3>\r\n<div>\r\n    <div>\r\n        <label>Tournament Name</label>\r\n        <input [(ngModel)]=\"tournamentName\">\r\n    </div>\r\n    <div>\r\n      <label>Match Type</label>\r\n      <select [(ngModel)]=\"selectedMatchType\">\r\n          <option *ngFor=\"let matchType of allMatchTypes\" [ngValue]=\"matchType\">{{matchType.matchTypeDescription}}</option>\r\n      </select>\r\n    </div>\r\n    <div>\r\n        <div class='bamboozled'>\r\n          <div id='sourcePlayers' class='innerBamboozle' [dragula]='\"first-bag\"' [dragulaModel]='selectFromPlayers'>\r\n            <li *ngFor=\"let item of selectFromPlayers\" [attr.data-id]=\"item.playerId\">{{item.firstName}} {{item.lastName}}</li>\r\n          </div>\r\n          <div id='targetParticipants' class='innerBamboozle' [dragula]='\"first-bag\"' [dragulaModel]='participants'>\r\n            <li *ngFor=\"let item of participants\" [attr.data-id]=\"item.playerId\">{{item.firstName}} {{item.lastName}}</li>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    <button (click)=\"createTournament()\">Save</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Tournament/tournament-creation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentCreationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Player_player_service__ = __webpack_require__("../../../../../src/app/Player/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MatchType_match_type_service__ = __webpack_require__("../../../../../src/app/MatchType/match-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tournament_creation__ = __webpack_require__("../../../../../src/app/Tournament/tournament-creation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tournament_service__ = __webpack_require__("../../../../../src/app/Tournament/tournament.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TournamentCreationComponent = (function () {
    function TournamentCreationComponent(tournamentService, playerService, matchTypeService, dragulaService, router) {
        var _this = this;
        this.tournamentService = tournamentService;
        this.playerService = playerService;
        this.matchTypeService = matchTypeService;
        this.dragulaService = dragulaService;
        this.router = router;
        this.participants = [];
        dragulaService.drop.subscribe(function (value) {
            console.log("drop: " + value[0]);
            _this.onDrop(value.slice(1));
        });
    }
    TournamentCreationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayers()
            .then(function (result) {
            _this.allPlayers = result;
            _this.selectFromPlayers = _this.allPlayers
                .map(function (x) { return Object.assign({}, x); });
            _this.sortByName(_this.selectFromPlayers);
        });
        this.matchTypeService.getMatchTypes()
            .then(function (result) {
            _this.allMatchTypes = result;
        });
    };
    TournamentCreationComponent.prototype.sortByName = function (playerList) {
        return playerList.sort(function (x, y) {
            if ((x.firstName + x.lastName) < (y.firstName + y.lastName)) {
                return -1;
            }
            else if ((x.firstName + x.lastName) > (y.firstName + y.lastName)) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    TournamentCreationComponent.prototype.onDrop = function (args) {
        var e = args[0], eTarg = args[1], eSource = args[2];
        if (eTarg.id === eSource.id) { }
        else if (eTarg.id === 'targetParticipants') {
            var player = this.selectFromPlayers.find(function (x) { return x.playerId === e.dataset.id; });
            var playerIndex = this.selectFromPlayers.indexOf(player);
            this.selectFromPlayers.splice(playerIndex, 1);
            this.participants.push(player);
            this.sortByName(this.participants);
        }
        else if (eTarg.id === 'sourcePlayers') {
            var player = this.participants.find(function (x) { return x.playerId === e.dataset.id; });
            var playerIndex = this.participants.indexOf(player);
            this.participants.splice(playerIndex, 1);
            this.selectFromPlayers.push(player);
            this.sortByName(this.selectFromPlayers);
        }
    };
    TournamentCreationComponent.prototype.createTournament = function () {
        var createTournament = new __WEBPACK_IMPORTED_MODULE_4__tournament_creation__["a" /* TournamentCreation */]();
        createTournament.tournamentName = this.tournamentName;
        createTournament.participants = this.participants;
        createTournament.matchTypeId = this.selectedMatchType.matchTypeId;
        return this.tournamentService.createTournament(createTournament);
    };
    return TournamentCreationComponent;
}());
TournamentCreationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        styles: [__webpack_require__("../../../../dragula/dist/dragula.css"), __webpack_require__("../../../../../src/app/Tournament/tournament-creation.component.css")],
        selector: 'tournament-creation',
        template: __webpack_require__("../../../../../src/app/Tournament/tournament-creation.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__tournament_service__["a" /* TournamentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tournament_service__["a" /* TournamentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Player_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Player_player_service__["a" /* PlayerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__MatchType_match_type_service__["a" /* MatchTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__MatchType_match_type_service__["a" /* MatchTypeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula__["DragulaService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], TournamentCreationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=tournament-creation.component.js.map

/***/ }),

/***/ "../../../../../src/app/Tournament/tournament-creation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentCreation; });
var TournamentCreation = (function () {
    function TournamentCreation() {
    }
    return TournamentCreation;
}());

//# sourceMappingURL=tournament-creation.js.map

/***/ }),

/***/ "../../../../../src/app/Tournament/tournament-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Tournaments</h3>\r\n<div>\r\n    <input (keydown.enter)=\"search()\" [(ngModel)]=\"searchTerm\">\r\n    <button (click)=\"search()\">Search</button>\r\n    <button (click)=\"addNew()\">Create Tournament</button>\r\n    <a *ngFor=\"let tourney of tournaments\" [routerLink]=\"['/tournament', tourney.tournamentId]\">\r\n        <div>\r\n            <h4>{{tourney.tournamentName}} {{tourney.createdDate}}</h4>\r\n        </div>\r\n    </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Tournament/tournament-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentSelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tournament_service__ = __webpack_require__("../../../../../src/app/Tournament/tournament.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TournamentSelectionComponent = (function () {
    function TournamentSelectionComponent(tournamentService, router) {
        this.tournamentService = tournamentService;
        this.router = router;
        this.allTournamentHeaders = [];
        this.tournaments = [];
        this.searchTerm = null;
    }
    TournamentSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tournamentService.getTournamentHeaders()
            .then(function (result) {
            _this.allTournamentHeaders = result;
            _this.tournaments = result;
        });
    };
    TournamentSelectionComponent.prototype.search = function () {
        var _this = this;
        this.tournaments = this.allTournamentHeaders.filter(function (tourney) {
            return tourney.tournamentName.toUpperCase().includes(_this.searchTerm == null ? '' : _this.searchTerm.toUpperCase());
        });
    };
    TournamentSelectionComponent.prototype.addNew = function () {
        this.router.navigate(['./tournamentCreation']);
    };
    return TournamentSelectionComponent;
}());
TournamentSelectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tournament-selection',
        template: __webpack_require__("../../../../../src/app/Tournament/tournament-selection.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__tournament_service__["a" /* TournamentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tournament_service__["a" /* TournamentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], TournamentSelectionComponent);

var _a, _b;
//# sourceMappingURL=tournament-selection.component.js.map

/***/ }),

/***/ "../../../../../src/app/Tournament/tournament.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_constants__ = __webpack_require__("../../../../../src/app/global-constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TournamentService = (function () {
    function TournamentService(http) {
        this.http = http;
        this.tournamentUrl = __WEBPACK_IMPORTED_MODULE_4__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + 'api/Tournament';
        this.tournamentCompleteUrl = __WEBPACK_IMPORTED_MODULE_4__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + 'api/Tournament/Complete';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    TournamentService.prototype.getTournamentHeaders = function () {
        return this.http.get(this.tournamentUrl)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.error('An error occured', error);
            return Promise.reject(error.message || error);
        });
    };
    TournamentService.prototype.getTournamentComplete = function (tournamentId) {
        var TournamentParamAdded = this.tournamentCompleteUrl + '?TournamentId=' + tournamentId;
        return this.http.get(TournamentParamAdded)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.error('An error occured', error);
            return Promise.reject(error.message || error);
        });
    };
    TournamentService.prototype.createTournament = function (creationDto) {
        return this.http
            .post(this.tournamentCompleteUrl, JSON.stringify(creationDto), { headers: this.headers })
            .toPromise()
            .then(function (result) {
            return result.json();
        });
    };
    return TournamentService;
}());
TournamentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TournamentService);

var _a;
//# sourceMappingURL=tournament.service.js.map

/***/ }),

/***/ "../../../../../src/app/Tournament/tournament.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tournament; });
var Tournament = (function () {
    function Tournament() {
    }
    return Tournament;
}());

//# sourceMappingURL=tournament.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Player_player_selection_component__ = __webpack_require__("../../../../../src/app/Player/player-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Player_PlayerDetail_player_detail_component__ = __webpack_require__("../../../../../src/app/Player/PlayerDetail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Match_match_selection_component__ = __webpack_require__("../../../../../src/app/Match/match-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Player_player_creation_component__ = __webpack_require__("../../../../../src/app/Player/player-creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Match_match_creation_component__ = __webpack_require__("../../../../../src/app/Match/match-creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__MatchType_match_type_management_component__ = __webpack_require__("../../../../../src/app/MatchType/match-type-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Location_location_management_component__ = __webpack_require__("../../../../../src/app/Location/location-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__AlmaMater_alma_mater_management_component__ = __webpack_require__("../../../../../src/app/AlmaMater/alma-mater-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Tournament_tournament_selection_component__ = __webpack_require__("../../../../../src/app/Tournament/tournament-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Tournament_tournament_creation_component__ = __webpack_require__("../../../../../src/app/Tournament/tournament-creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Tournament_tournament_bracket_component__ = __webpack_require__("../../../../../src/app/Tournament/tournament-bracket.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */] },
    { path: 'players', component: __WEBPACK_IMPORTED_MODULE_3__Player_player_selection_component__["a" /* PlayerSelectionComponent */] },
    { path: 'players/:id', component: __WEBPACK_IMPORTED_MODULE_4__Player_PlayerDetail_player_detail_component__["a" /* PlayerDetailComponent */] },
    { path: 'matches', component: __WEBPACK_IMPORTED_MODULE_5__Match_match_selection_component__["a" /* MatchSelectionComponent */] },
    { path: 'playercreate', component: __WEBPACK_IMPORTED_MODULE_6__Player_player_creation_component__["a" /* PlayerCreationComponent */] },
    { path: 'playercreate/:id', component: __WEBPACK_IMPORTED_MODULE_6__Player_player_creation_component__["a" /* PlayerCreationComponent */] },
    { path: 'matchcreate', component: __WEBPACK_IMPORTED_MODULE_7__Match_match_creation_component__["a" /* MatchCreationComponent */] },
    { path: 'matchcreate/:id', component: __WEBPACK_IMPORTED_MODULE_7__Match_match_creation_component__["a" /* MatchCreationComponent */] },
    { path: 'matchTypeManagement', component: __WEBPACK_IMPORTED_MODULE_8__MatchType_match_type_management_component__["a" /* MatchTypeManagementComponent */] },
    { path: 'locationManagement', component: __WEBPACK_IMPORTED_MODULE_9__Location_location_management_component__["a" /* LocationManagementComponent */] },
    { path: 'almaMaterManagement', component: __WEBPACK_IMPORTED_MODULE_10__AlmaMater_alma_mater_management_component__["a" /* AlmaMaterManagementComponent */] },
    { path: 'tournaments', component: __WEBPACK_IMPORTED_MODULE_11__Tournament_tournament_selection_component__["a" /* TournamentSelectionComponent */] },
    { path: 'tournamentCreation', component: __WEBPACK_IMPORTED_MODULE_12__Tournament_tournament_creation_component__["a" /* TournamentCreationComponent */] },
    { path: 'tournament/:id', component: __WEBPACK_IMPORTED_MODULE_13__Tournament_tournament_bracket_component__["a" /* TournamentBracketComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\r\n<nav>\r\n    <a routerLink=\"/dashboard\">Dashboard</a>\r\n    <a routerLink=\"/players\">Players</a>\r\n    <a routerLink=\"/matches\">Matches</a>\r\n    <a routerLink=\"/tournaments\">Tournaments</a>\r\n    <!-- <a routerLink=\"/matchTypeManagement\">Match Types</a> -->\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'FooseBall Stat Tracker';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        selector: 'my-app'
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_color_picker__ = __webpack_require__("../../../../ngx-color-picker/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Player_player_selection_component__ = __webpack_require__("../../../../../src/app/Player/player-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Player_PlayerDetail_player_detail_component__ = __webpack_require__("../../../../../src/app/Player/PlayerDetail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Player_player_service__ = __webpack_require__("../../../../../src/app/Player/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Player_rival_service__ = __webpack_require__("../../../../../src/app/Player/rival.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Match_match_selection_component__ = __webpack_require__("../../../../../src/app/Match/match-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Match_match_service__ = __webpack_require__("../../../../../src/app/Match/match.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Player_player_creation_component__ = __webpack_require__("../../../../../src/app/Player/player-creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Match_match_creation_component__ = __webpack_require__("../../../../../src/app/Match/match-creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__MatchType_match_type_management_component__ = __webpack_require__("../../../../../src/app/MatchType/match-type-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__MatchType_match_type_service__ = __webpack_require__("../../../../../src/app/MatchType/match-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Location_location_management_component__ = __webpack_require__("../../../../../src/app/Location/location-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Location_location_service__ = __webpack_require__("../../../../../src/app/Location/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__AlmaMater_alma_mater_management_component__ = __webpack_require__("../../../../../src/app/AlmaMater/alma-mater-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__AlmaMater_alma_mater_service__ = __webpack_require__("../../../../../src/app/AlmaMater/alma-mater.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Tournament_tournament_selection_component__ = __webpack_require__("../../../../../src/app/Tournament/tournament-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Tournament_tournament_creation_component__ = __webpack_require__("../../../../../src/app/Tournament/tournament-creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Tournament_tournament_service__ = __webpack_require__("../../../../../src/app/Tournament/tournament.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Tournament_tournament_bracket_component__ = __webpack_require__("../../../../../src/app/Tournament/tournament-bracket.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';


























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__Match_match_service__["a" /* MatchService */],
            __WEBPACK_IMPORTED_MODULE_12__Player_player_service__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_13__Player_rival_service__["a" /* RivalService */],
            __WEBPACK_IMPORTED_MODULE_19__MatchType_match_type_service__["a" /* MatchTypeService */],
            __WEBPACK_IMPORTED_MODULE_21__Location_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_23__AlmaMater_alma_mater_service__["a" /* AlmaMaterService */],
            __WEBPACK_IMPORTED_MODULE_26__Tournament_tournament_service__["a" /* TournamentService */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_27__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_color_picker__["ColorPickerModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_dragula__["DragulaModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__Player_player_selection_component__["a" /* PlayerSelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__Player_PlayerDetail_player_detail_component__["a" /* PlayerDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__Match_match_selection_component__["a" /* MatchSelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_16__Player_player_creation_component__["a" /* PlayerCreationComponent */],
            __WEBPACK_IMPORTED_MODULE_17__Match_match_creation_component__["a" /* MatchCreationComponent */],
            __WEBPACK_IMPORTED_MODULE_18__MatchType_match_type_management_component__["a" /* MatchTypeManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_20__Location_location_management_component__["a" /* LocationManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_22__AlmaMater_alma_mater_management_component__["a" /* AlmaMaterManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_24__Tournament_tournament_selection_component__["a" /* TournamentSelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_25__Tournament_tournament_creation_component__["a" /* TournamentCreationComponent */],
            __WEBPACK_IMPORTED_MODULE_28__Tournament_tournament_bracket_component__["a" /* TournamentBracketComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*='col-'] {\r\n  float: left;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n[class*='col-']:last-of-type {\r\n  padding-right: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n*, *:after, *:before {\r\n  box-sizing: border-box;\r\n}\r\nh3 {\r\n  text-align: center; margin-bottom: 0;\r\n}\r\nh4 {\r\n  position: relative;\r\n}\r\n.grid {\r\n  margin: 0;\r\n}\r\n.col-1-4 {\r\n  width: 25%;\r\n}\r\n.sizedchart {\r\n  width: 100%;\r\n  height: 500px;\r\n}\r\n.module {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #eee;\r\n  max-height: 120px;\r\n  min-width: 120px;\r\n  background-color: #607D8B;\r\n  border-radius: 2px;\r\n}\r\n.module:hover {\r\n  background-color: #EEE;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n}\r\n.grid-pad {\r\n  padding: 10px 0;\r\n}\r\n.grid-pad > [class*='col-']:last-of-type {\r\n  padding-right: 20px;\r\n}\r\n@media (max-width: 600px) {\r\n  .module {\r\n    font-size: 10px;\r\n    max-height: 75px; }\r\n}\r\n@media (max-width: 1024px) {\r\n  .grid {\r\n    margin: 0;\r\n  }\r\n  .module {\r\n    min-width: 60px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <label>Game Type</label>\r\n    <select [(ngModel)]=\"selectedMatchTypeId\" [formControl]=\"matchTypeControl\">\r\n        <option *ngFor=\"let matchType of allMatchTypes\" [ngValue]=\"matchType.matchTypeId\">{{matchType.matchTypeDescription}}</option>\r\n    </select>\r\n</div>\r\n<div>\r\n    <label>Office</label>\r\n    <select [(ngModel)]=\"selectedLocationId\" [formControl]=\"locationControl\">\r\n        <option *ngFor=\"let location of allLocations\" [ngValue]=\"location.locationId\">{{location.locationDescription}}</option>\r\n    </select>\r\n</div>\r\n<div>\r\n    <label>AlmaMater</label>\r\n    <select [(ngModel)]=\"selectedAlmaMaterId\" [formControl]=\"almaMaterControl\">\r\n        <option *ngFor=\"let almaMater of allAlmaMaters\" [ngValue]=\"almaMater.almaMaterId\">{{almaMater.almaMaterDescription}}</option>\r\n    </select>\r\n</div>\r\n<div>\r\n    <label>Minimum Matches Played</label>\r\n    <input type=\"number\" [(ngModel)]=\"minimumMatches\" [formControl]=\"minimumMatchesControl\"/>\r\n</div>\r\n\r\n<h3>{{graphTitle}}</h3>\r\n<div class=\"sizedchart\">\r\n    <!-- [view]=\"view\" -->\r\n    <ngx-charts-bar-vertical\r\n    *ngIf=\"showChart\"\r\n    [scheme]=\"colorScheme\"\r\n    [results]=\"barChartData\"\r\n    [gradient]=\"gradient\"\r\n    [xAxis]=\"showXAxis\"\r\n    [yAxis]=\"showYAxis\"\r\n    [legend]=\"showLegend\"\r\n    [showXAxisLabel]=\"showXAxisLabel\"\r\n    [showYAxisLabel]=\"showYAxisLabel\"\r\n    [xAxisLabel]=\"xAxisLabel\"\r\n    [yAxisLabel]=\"yAxisLabel\"\r\n    [yScaleMax]=\"yScaleMax\">\r\n    </ngx-charts-bar-vertical>\r\n</div>\r\n<div class=\"grid grid-pad\">\r\n    <div class=\"col-1-4\" (click)=\"loadGamesWon()\"> <!--[routerLink]=\"['/detail', hero.id]\"-->\r\n        <div class=\"module hero\">\r\n            <h4>Games Won</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-1-4\" (click)=\"loadGamesPlayed()\"> <!--[routerLink]=\"['/detail', hero.id]\"-->\r\n        <div class=\"module hero\">\r\n            <h4>Games Played</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-1-4\" (click)=\"loadGamesWonPct()\"> <!--[routerLink]=\"['/detail', hero.id]\"-->\r\n        <div class=\"module hero\">\r\n            <h4>Win %</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-1-4\" (click)=\"loadPointsPerGame()\"> <!--[routerLink]=\"['/detail', hero.id]\"-->\r\n        <div class=\"module hero\">\r\n            <h4>Most William</h4>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Player_player_service__ = __webpack_require__("../../../../../src/app/Player/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MatchType_match_type_service__ = __webpack_require__("../../../../../src/app/MatchType/match-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Location_location_service__ = __webpack_require__("../../../../../src/app/Location/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AlmaMater_alma_mater_service__ = __webpack_require__("../../../../../src/app/AlmaMater/alma-mater.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = (function () {
    function DashboardComponent(playerService, matchTypeService, locationService, almaMaterService) {
        this.playerService = playerService;
        this.matchTypeService = matchTypeService;
        this.locationService = locationService;
        this.almaMaterService = almaMaterService;
        this.matchTypeControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]();
        this.locationControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]();
        this.almaMaterControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]();
        this.minimumMatchesControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]();
        this.players = [];
        this.graphTitle = '';
        this.allMatchTypes = [];
        this.allLocations = [];
        this.allAlmaMaters = [];
        this.selectedMatchTypeId = '';
        this.selectedLocationId = '';
        this.selectedAlmaMaterId = '';
        this.minimumMatches = 5;
        this.locationIdAll = '';
        this.almaMaterIdAll = '';
        // view: any[] = [700, 400];
        // options
        this.showXAxis = false;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = false;
        this.xAxisLabel = 'Player';
        this.showYAxisLabel = false;
        this.yAxisLabel = 'Games';
        this.yScaleMax = 0;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.barChartData = [];
        this.showChart = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.matchTypeControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]();
        this.locationControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]();
        this.almaMaterControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]();
        this.matchTypeControl.valueChanges
            .subscribe(function (value) {
            _this.reloadMainGraph();
        });
        this.matchTypeService.getMatchTypes()
            .then(function (result) {
            _this.allMatchTypes = result;
            _this.selectedMatchTypeId = _this.allMatchTypes[0].matchTypeId;
        })
            .then(function () {
            _this.loadGamesWon();
        });
        this.locationService.getLocations()
            .then(function (result) {
            _this.allLocations = result;
            _this.locationIdAll = _this.allLocations.find(function (loc) { return loc.locationCode === 'ALL'; }).locationId;
            _this.selectedLocationId = _this.locationIdAll;
        })
            .then(function () {
            _this.locationControl.valueChanges
                .subscribe(function (value) {
                _this.reloadMainGraph();
            });
        });
        this.almaMaterService.getAlmaMaters()
            .then(function (result) {
            _this.allAlmaMaters = result;
            _this.almaMaterIdAll = _this.allAlmaMaters.find(function (alm) { return alm.almaMaterCode === 'ALL'; }).almaMaterId;
            _this.selectedAlmaMaterId = _this.almaMaterIdAll;
        })
            .then(function () {
            _this.almaMaterControl.valueChanges
                .subscribe(function (value) {
                _this.reloadMainGraph();
            });
        });
        this.minimumMatchesControl.valueChanges
            .subscribe(function (value) {
            _this.minimumMatches = value;
            _this.reloadMainGraph();
        });
    };
    DashboardComponent.prototype.reloadMainGraph = function () {
        switch (this.graphTitle) {
            case 'Games Won':
                this.loadGamesWon();
                break;
            case 'Games Played':
                this.loadGamesPlayed();
                break;
            case 'Win %':
                this.loadGamesWonPct();
                break;
            case 'Points Per Game':
                this.loadPointsPerGame();
                break;
            default:
                this.loadGamesWon();
        }
    };
    DashboardComponent.prototype.getAndFilterPlayers = function () {
        var _this = this;
        return this.playerService.getPlayers()
            .then(function (result) {
            return result
                .filter(function (play) { return ((play.locationId === _this.selectedLocationId) || (_this.selectedLocationId === _this.locationIdAll)); })
                .filter(function (play) { return ((play.almaMaterId === _this.selectedAlmaMaterId) || (_this.selectedAlmaMaterId === _this.almaMaterIdAll)); })
                .filter(function (play) { return (play.gamesPlayed[_this.selectedMatchTypeId] >= _this.minimumMatches); });
        });
    };
    DashboardComponent.prototype.loadGamesPlayed = function () {
        var _this = this;
        this.showChart = false;
        this.getAndFilterPlayers()
            .then(function (result) {
            result = result.sort(function (x, y) {
                if (x.gamesPlayed[_this.selectedMatchTypeId] > y.gamesPlayed[_this.selectedMatchTypeId]) {
                    return -1;
                }
                else if (x.gamesPlayed[_this.selectedMatchTypeId] < y.gamesPlayed[_this.selectedMatchTypeId]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.barChartData = [];
            _this.colorScheme.domain = [];
            result.map(function (player) {
                if (player.gamesPlayed[_this.selectedMatchTypeId] > 0) {
                    _this.barChartData.push({ name: player.firstName + ' ' + player.lastName + ' - ' + player.nickName, value: [player.gamesPlayed[_this.selectedMatchTypeId]] });
                    _this.colorScheme.domain.push(player.hexColor || '#1f53d9');
                }
            });
            _this.yScaleMax = 0;
            _this.graphTitle = 'Games Played';
            _this.showChart = true;
        });
    };
    DashboardComponent.prototype.loadGamesWon = function () {
        var _this = this;
        this.showChart = false;
        this.getAndFilterPlayers()
            .then(function (result) {
            result = result.sort(function (x, y) {
                if (x.gamesWon[_this.selectedMatchTypeId] > y.gamesWon[_this.selectedMatchTypeId]) {
                    return -1;
                }
                else if (x.gamesWon[_this.selectedMatchTypeId] < y.gamesWon[_this.selectedMatchTypeId]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.barChartData = [];
            _this.colorScheme.domain = [];
            result.map(function (player) {
                if (player.gamesPlayed[_this.selectedMatchTypeId] > 0) {
                    _this.barChartData.push({ name: player.firstName + ' ' + player.lastName + ' - ' + player.nickName, value: [player.gamesWon[_this.selectedMatchTypeId]] });
                    _this.colorScheme.domain.push(player.hexColor || '#1f53d9');
                }
            });
            _this.yScaleMax = 0;
            _this.graphTitle = 'Games Won';
            _this.showChart = true;
        });
    };
    DashboardComponent.prototype.loadGamesWonPct = function () {
        var _this = this;
        this.showChart = false;
        this.getAndFilterPlayers()
            .then(function (result) {
            result = result.sort(function (x, y) {
                if (x.gamesWonPct[_this.selectedMatchTypeId] > y.gamesWonPct[_this.selectedMatchTypeId]) {
                    return -1;
                }
                else if (x.gamesWonPct[_this.selectedMatchTypeId] < y.gamesWonPct[_this.selectedMatchTypeId]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.barChartData = [];
            _this.colorScheme.domain = [];
            result.map(function (player) {
                if (player.gamesPlayed[_this.selectedMatchTypeId] > 0) {
                    _this.barChartData.push({ name: player.firstName + ' ' + player.lastName + ' - ' + player.nickName, value: [player.gamesWonPct[_this.selectedMatchTypeId]] });
                    _this.colorScheme.domain.push(player.hexColor || '#1f53d9');
                }
            });
            _this.yScaleMax = 100;
            _this.graphTitle = 'Win %';
            _this.showChart = true;
        });
    };
    DashboardComponent.prototype.loadPointsPerGame = function () {
        var _this = this;
        this.showChart = false;
        this.getAndFilterPlayers()
            .then(function (result) {
            result = result.sort(function (x, y) {
                if (x.pointsPerGame[_this.selectedMatchTypeId] > y.pointsPerGame[_this.selectedMatchTypeId]) {
                    return -1;
                }
                else if (x.pointsPerGame[_this.selectedMatchTypeId] < y.pointsPerGame[_this.selectedMatchTypeId]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.barChartData = [];
            _this.colorScheme.domain = [];
            result.map(function (player) {
                if (player.gamesPlayed[_this.selectedMatchTypeId] > 0) {
                    _this.barChartData.push({ name: player.firstName + ' ' + player.lastName + ' - ' + player.nickName, value: [player.pointsPerGame[_this.selectedMatchTypeId]] });
                    _this.colorScheme.domain.push(player.hexColor || '#1f53d9');
                }
            });
            _this.yScaleMax = 8;
            _this.graphTitle = 'Points Per Game';
            _this.showChart = true;
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        styles: [__webpack_require__("../../../../../src/app/dashboard.component.css")],
        selector: 'my-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Player_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Player_player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__MatchType_match_type_service__["a" /* MatchTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__MatchType_match_type_service__["a" /* MatchTypeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Location_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Location_location_service__["a" /* LocationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__AlmaMater_alma_mater_service__["a" /* AlmaMaterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__AlmaMater_alma_mater_service__["a" /* AlmaMaterService */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/global-constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalConstants; });
var GlobalConstants = (function () {
    function GlobalConstants() {
    }
    return GlobalConstants;
}());

//Local
GlobalConstants.API_ENDPOINT = 'http://localhost:64358/';
//# sourceMappingURL=global-constants.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map