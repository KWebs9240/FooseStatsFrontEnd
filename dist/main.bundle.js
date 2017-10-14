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

/***/ "../../../../../src/app/Match/match-creation.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>New Match</h3>\r\n<div>\r\n    <div>\r\n        <label>Player 1</label>\r\n        <select [(ngModel)]=\"selectedPlayer1\">\r\n            <option *ngFor=\"let player of allPlayers\" [ngValue]=\"player\">{{player.firstName}} {{player.lastName}}</option>\r\n        </select>\r\n        <label>{{selectedPlayer1.firstName}} {{selectedPlayer1.lastName}} - {{selectedPlayer1.nickName}}</label>\r\n    </div>\r\n    <div>\r\n        <label>Player 2</label>\r\n        <select [(ngModel)]=\"selectedPlayer2\">\r\n            <option *ngFor=\"let player of allPlayers\" [ngValue]=\"player\">{{player.firstName}} {{player.lastName}}</option>\r\n        </select>\r\n        <label>{{selectedPlayer2.firstName}} {{selectedPlayer2.lastName}} - {{selectedPlayer2.nickName}}</label>\r\n    </div>\r\n    <div>\r\n        <label>{{selectedPlayer1.firstName ? selectedPlayer1.firstName + \" \" + selectedPlayer1.lastName : \"Player 1\"}} Score</label>\r\n        <input [(ngModel)]=\"team1Score\">\r\n        <label>{{selectedPlayer2.firstName ? selectedPlayer2.firstName + \" \" + selectedPlayer2.lastName : \"Player 2\"}} Score</label>\r\n        <input [(ngModel)]=\"team2Score\">\r\n    </div>\r\n    <div>\r\n        <label>Match Type</label>\r\n        <select [(ngModel)]=\"selectedMatchType\">\r\n            <option *ngFor=\"let matchType of allMatchTypes\" [ngValue]=\"matchType\">{{matchType.matchTypeDescription}}</option>\r\n        </select>\r\n    </div>\r\n    <button (click)=\"saveThenAllMatches()\">Save</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Match/match-creation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchCreationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Player_player__ = __webpack_require__("../../../../../src/app/Player/player.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Player_player_service__ = __webpack_require__("../../../../../src/app/Player/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match__ = __webpack_require__("../../../../../src/app/Match/match.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__match_service__ = __webpack_require__("../../../../../src/app/Match/match.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MatchType_match_type_service__ = __webpack_require__("../../../../../src/app/MatchType/match-type.service.ts");
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
    function MatchCreationComponent(playerService, matchService, matchTypeService, router) {
        this.playerService = playerService;
        this.matchService = matchService;
        this.matchTypeService = matchTypeService;
        this.router = router;
        this.selectedPlayer1 = new __WEBPACK_IMPORTED_MODULE_2__Player_player__["a" /* Player */]();
        this.selectedPlayer2 = new __WEBPACK_IMPORTED_MODULE_2__Player_player__["a" /* Player */]();
    }
    MatchCreationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayers()
            .then(function (result) {
            _this.allPlayers = result;
        });
        this.matchTypeService.getMatchTypes()
            .then(function (result) {
            _this.allMatchTypes = result;
        });
    };
    MatchCreationComponent.prototype.save = function () {
        var insertMatch = new __WEBPACK_IMPORTED_MODULE_4__match__["a" /* Match */]();
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
    MatchCreationComponent.prototype.saveThenAllMatches = function () {
        var _this = this;
        this.save()
            .then(function (match) {
            _this.router.navigate(['matches']);
        });
    };
    return MatchCreationComponent;
}());
MatchCreationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'match-creation',
        template: __webpack_require__("../../../../../src/app/Match/match-creation.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__Player_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Player_player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__match_service__["a" /* MatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__match_service__["a" /* MatchService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__MatchType_match_type_service__["a" /* MatchTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__MatchType_match_type_service__["a" /* MatchTypeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], MatchCreationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=match-creation.component.js.map

/***/ }),

/***/ "../../../../../src/app/Match/match-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Fooseball Matches</h3>\r\n<div>\r\n    <button (click)=\"addNew()\">Add Match</button>\r\n    <a *ngFor=\"let match of allMatches\">\r\n        <div>\r\n            <h4>{{match.Player1Name}} vs. {{match.Player2Name}} --- {{match.team1Score}}-{{match.team2Score}}</h4>\r\n        </div>\r\n    </a>\r\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Player_player_service__ = __webpack_require__("../../../../../src/app/Player/player.service.ts");
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
        this.matchUrl = 'http://localhost:64358/api/Match';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
    }
    MatchService.prototype.getMatches = function () {
        var _this = this;
        var cacheCheckTime = new Date();
        cacheCheckTime.setMinutes(cacheCheckTime.getMinutes() - 15);
        if (this.lastCacheDate < cacheCheckTime) {
            return this.http.get(this.matchUrl)
                .toPromise()
                .then(function (response) {
                _this.allMatches = response.json();
                _this.playerService.getPlayers()
                    .then(function (players) {
                    _this.allMatches.forEach(function (match) {
                        match.Player1Name = players.find(function (player) { return player.playerId === match.player1Id; }).firstName;
                        match.Player2Name = players.find(function (player) { return player.playerId === match.player2Id; }).firstName;
                    });
                });
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
        return this.http
            .post(this.matchUrl, JSON.stringify(matchForSaving), { headers: this.headers })
            .toPromise()
            .then(function (result) {
            //Resetting the last cache date so the list of players is refreshed
            _this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
            return result.json();
        });
    };
    return MatchService;
}());
MatchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__Player_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__Player_player_service__["a" /* PlayerService */]) === "function" && _b || Object])
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
        this.matchTypeUrl = 'http://localhost:64358/api/MatchType';
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

/***/ "../../../../../src/app/Player/PlayerDetail/player-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"player\">\r\n    <h2>{{player.firstName}} {{player.lastName}} - {{player.nickName}} details</h2>\r\n    <button (click)=\"modifyPlayer()\">Modify Player</button>\r\n    <button (click)=\"deletePlayer()\">Delete Player</button>\r\n     <li *ngFor=\"let match of playedMatches\">{{match.Player1Name}} vs. {{match.Player2Name}} --- {{match.team1Score}}-{{match.team2Score}}</li>\r\n    <!-- <div>\r\n        <label>name: </label>\r\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\">\r\n    </div>\r\n    <button (click)=\"goBack()\">Back</button>\r\n    <button (click)=\"save()\">Save</button>  -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Player/PlayerDetail/player-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_service__ = __webpack_require__("../../../../../src/app/Player/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Match_match_service__ = __webpack_require__("../../../../../src/app/Match/match.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
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
    function PlayerDetailComponent(playerService, matchService, activatedRoute, location, router) {
        this.playerService = playerService;
        this.matchService = matchService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.router = router;
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Still a block but switching to do might get me through it for now
        //Nope, still stuck actually learning something and sinking a decent amount of time into this one
        this.activatedRoute.params
            .switchMap(function (params) {
            return _this.playerService.getPlayer(params['id']);
        }).subscribe(function (foundPlayer) {
            _this.player = foundPlayer;
            _this.matchService.getPlayerMatches(foundPlayer.playerId)
                .then(function (resultMatches) { return _this.playedMatches = resultMatches; });
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
    return PlayerDetailComponent;
}());
PlayerDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'player-detail',
        template: __webpack_require__("../../../../../src/app/Player/PlayerDetail/player-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__Match_match_service__["a" /* MatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Match_match_service__["a" /* MatchService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], PlayerDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=player-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/Player/player-creation.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>New Player</h3>\r\n<div>\r\n    <div>\r\n        <label>First Name</label>\r\n        <input [(ngModel)]=\"firstName\">\r\n    </div>\r\n    <div>\r\n        <label>Last Name</label>\r\n        <input [(ngModel)]=\"lastName\">\r\n    </div>\r\n    <div>\r\n        <label>Nickname</label>\r\n        <input [(ngModel)]=\"nickName\">\r\n    </div>\r\n    <button (click)=\"saveThenView()\">Save</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Player/player-creation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerCreationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__("../../../../../src/app/Player/player.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_service__ = __webpack_require__("../../../../../src/app/Player/player.service.ts");
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
    function PlayerCreationComponent(playerService, router, activatedRoute) {
        this.playerService = playerService;
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
        });
    };
    PlayerCreationComponent.prototype.save = function () {
        var insertPlayer = new __WEBPACK_IMPORTED_MODULE_2__player__["a" /* Player */]();
        insertPlayer.firstName = this.firstName;
        insertPlayer.lastName = this.lastName;
        insertPlayer.nickName = this.nickName;
        insertPlayer.playerId = this.playerId;
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], PlayerCreationComponent);

var _a, _b, _c;
//# sourceMappingURL=player-creation.component.js.map

/***/ }),

/***/ "../../../../../src/app/Player/player-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Fooseball Players</h3>\r\n<div>\r\n    <input (keydown.enter)=\"search()\" [(ngModel)]=\"searchTerm\">\r\n    <button (click)=\"search()\">Search</button>\r\n    <button (click)=\"addNew()\">Add Player</button>\r\n    <a *ngFor=\"let player of players\" [routerLink]=\"['/players', player.playerId]\">\r\n        <div>\r\n            <h4>{{player.firstName}} {{player.lastName}} - {{player.nickName}}</h4>\r\n        </div>\r\n    </a>\r\n</div>"

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
        this.playerUrl = 'http://localhost:64358/api/Player';
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
                    && x.nickName === playerForSaving.nickName;
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
    { path: 'matchTypeManagement', component: __WEBPACK_IMPORTED_MODULE_8__MatchType_match_type_management_component__["a" /* MatchTypeManagementComponent */] },
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

module.exports = "<h1>{{title}}</h1>\r\n<nav>\r\n    <a routerLink=\"/dashboard\">Dashboard</a>\r\n    <a routerLink=\"/players\">Players</a>\r\n    <a routerLink=\"/matches\">Matches</a>\r\n    <!-- <a routerLink=\"/matchTypeManagement\">Match Types</a> -->\r\n</nav>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Player_player_selection_component__ = __webpack_require__("../../../../../src/app/Player/player-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Player_PlayerDetail_player_detail_component__ = __webpack_require__("../../../../../src/app/Player/PlayerDetail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Player_player_service__ = __webpack_require__("../../../../../src/app/Player/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Match_match_selection_component__ = __webpack_require__("../../../../../src/app/Match/match-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Match_match_service__ = __webpack_require__("../../../../../src/app/Match/match.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Player_player_creation_component__ = __webpack_require__("../../../../../src/app/Player/player-creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Match_match_creation_component__ = __webpack_require__("../../../../../src/app/Match/match-creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__MatchType_match_type_management_component__ = __webpack_require__("../../../../../src/app/MatchType/match-type-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__MatchType_match_type_service__ = __webpack_require__("../../../../../src/app/MatchType/match-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
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
            __WEBPACK_IMPORTED_MODULE_11__Match_match_service__["a" /* MatchService */],
            __WEBPACK_IMPORTED_MODULE_9__Player_player_service__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_15__MatchType_match_type_service__["a" /* MatchTypeService */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_16__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__Player_player_selection_component__["a" /* PlayerSelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_8__Player_PlayerDetail_player_detail_component__["a" /* PlayerDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_10__Match_match_selection_component__["a" /* MatchSelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_12__Player_player_creation_component__["a" /* PlayerCreationComponent */],
            __WEBPACK_IMPORTED_MODULE_13__Match_match_creation_component__["a" /* MatchCreationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__MatchType_match_type_management_component__["a" /* MatchTypeManagementComponent */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*='col-'] {\r\n  float: left;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n[class*='col-']:last-of-type {\r\n  padding-right: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n*, *:after, *:before {\r\n  box-sizing: border-box;\r\n}\r\nh3 {\r\n  text-align: center; margin-bottom: 0;\r\n}\r\nh4 {\r\n  position: relative;\r\n}\r\n.grid {\r\n  margin: 0;\r\n}\r\n.col-1-4 {\r\n  width: 25%;\r\n}\r\n.module {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #eee;\r\n  max-height: 120px;\r\n  min-width: 120px;\r\n  background-color: #607D8B;\r\n  border-radius: 2px;\r\n}\r\n.module:hover {\r\n  background-color: #EEE;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n}\r\n.grid-pad {\r\n  padding: 10px 0;\r\n}\r\n.grid-pad > [class*='col-']:last-of-type {\r\n  padding-right: 20px;\r\n}\r\n@media (max-width: 600px) {\r\n  .module {\r\n    font-size: 10px;\r\n    max-height: 75px; }\r\n}\r\n@media (max-width: 1024px) {\r\n  .grid {\r\n    margin: 0;\r\n  }\r\n  .module {\r\n    min-width: 60px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{graphTitle}}</h3>\r\n<div>\r\n    <canvas baseChart height=\"100\"\r\n    *ngIf=\"showChart\"\r\n    [datasets]=\"barChartData\"\r\n    [labels]=\"barChartLabels\"\r\n    [options]=\"barChartOptions\"\r\n    [legend]=\"barChartLegend\"\r\n    [chartType]=\"barChartType\">\r\n</canvas> <!--(chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"-->\r\n</div>\r\n<div class=\"grid grid-pad\">\r\n    <div class=\"col-1-4\" (click)=\"loadGamesPlayed()\"> <!--[routerLink]=\"['/detail', hero.id]\"-->\r\n        <div class=\"module hero\">\r\n            <h4>Games Played</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-1-4\" (click)=\"loadGamesWon()\"> <!--[routerLink]=\"['/detail', hero.id]\"-->\r\n        <div class=\"module hero\">\r\n            <h4>Games Won</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-1-4\" (click)=\"loadPointsPerGame()\"> <!--[routerLink]=\"['/detail', hero.id]\"-->\r\n        <div class=\"module hero\">\r\n            <h4>Most William</h4>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Player_player_service__ = __webpack_require__("../../../../../src/app/Player/player.service.ts");
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
    function DashboardComponent(playerService) {
        this.playerService = playerService;
        this.players = [];
        this.graphTitle = '';
        this.barChartLabels = [''];
        this.barChartData = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        this.showChart = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showChart = false;
        this.playerService.getPlayers()
            .then(function (result) {
            _this.players = result.slice(1, 5);
            _this.barChartData = [];
            result.map(function (player) {
                _this.barChartData.push({ data: [player.gamesPlayed], label: player.firstName + ' ' + player.lastName + ' - ' + player.nickName });
            });
            _this.barChartData = _this.barChartData.sort(function (x, y) {
                if (x.data[0] > y.data[0]) {
                    return -1;
                }
                else if (x.data[0] < y.data[0]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.graphTitle = 'Games Played';
            _this.showChart = true;
        });
    };
    DashboardComponent.prototype.loadGamesPlayed = function () {
        var _this = this;
        this.showChart = false;
        this.playerService.getPlayers()
            .then(function (result) {
            _this.players = result.slice(1, 5);
            _this.barChartData = [];
            result.map(function (player) {
                _this.barChartData.push({ data: [player.gamesPlayed], label: player.firstName + ' ' + player.lastName + ' - ' + player.nickName });
            });
            _this.barChartData = _this.barChartData.sort(function (x, y) {
                if (x.data[0] > y.data[0]) {
                    return -1;
                }
                else if (x.data[0] < y.data[0]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.graphTitle = 'Games Played';
            _this.showChart = true;
        });
    };
    DashboardComponent.prototype.loadGamesWon = function () {
        var _this = this;
        this.showChart = false;
        this.playerService.getPlayers()
            .then(function (result) {
            //Something like this if I ever want to only get the first few
            //this.players = result.slice(1, 5);
            _this.barChartData = [];
            result.map(function (player) {
                _this.barChartData.push({ data: [player.gamesWon], label: player.firstName + ' ' + player.lastName + ' - ' + player.nickName });
            });
            _this.barChartData = _this.barChartData.sort(function (x, y) {
                if (x.data[0] > y.data[0]) {
                    return -1;
                }
                else if (x.data[0] < y.data[0]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.graphTitle = 'Games Won';
            _this.showChart = true;
        });
    };
    DashboardComponent.prototype.loadPointsPerGame = function () {
        var _this = this;
        this.showChart = false;
        this.playerService.getPlayers()
            .then(function (result) {
            //Something like this if I ever want to only get the first few
            //this.players = result.slice(1, 5);
            _this.barChartData = [];
            result.map(function (player) {
                _this.barChartData.push({ data: [player.pointsPerGame], label: player.firstName + ' ' + player.lastName + ' - ' + player.nickName });
            });
            _this.barChartData = _this.barChartData.sort(function (x, y) {
                if (x.data[0] > y.data[0]) {
                    return -1;
                }
                else if (x.data[0] < y.data[0]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Player_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Player_player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

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

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map