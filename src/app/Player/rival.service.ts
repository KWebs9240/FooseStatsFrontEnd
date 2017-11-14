import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';

import { Rival } from './rival';

@Injectable()
export class RivalService{
    private rivalsUrl = 'http://localhost:64358/api/Rivals';
    private headers = new Headers({'Content-Type': 'application/json'});

    private lastCacheDate: Date = new Date(2000, 1, 0, 0, 0, 0, 0);

    private allPlayers: Rival[];

    constructor(private http: Http) {}

    getRivals(playerId: string): Promise<Rival[]> {
        var cacheCheckTime = new Date()
        cacheCheckTime.setMinutes(cacheCheckTime.getMinutes() - 15);
        if(this.lastCacheDate < cacheCheckTime){
            var MatchesParamAdded = this.rivalsUrl + '?playerId=' + playerId;
            return this.http.get(MatchesParamAdded)
                .toPromise()
                .then(response => {
                    this.allPlayers = response.json() as Rival[];
                    this.lastCacheDate = new Date();
                    return response.json() as Rival[];
                })
                .catch((error: any) => {
                    console.error('An error occured', error);
                    return Promise.reject(error.message || error); })
        }
        else {
            return Observable.of(this.allPlayers)
                .toPromise()
                .then(things => {
                    return this.allPlayers;
                })
        }
    }
}