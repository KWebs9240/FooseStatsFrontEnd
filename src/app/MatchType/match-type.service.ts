import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';

import { MatchType } from './match-type';

@Injectable()
export class MatchTypeService {
    private matchTypeUrl = 'http://localhost:64358/api/MatchType';
    private headers = new Headers({'Content-Type': 'application/json'});
    
    private lastCacheDate: Date = new Date(2000, 1, 0, 0, 0, 0, 0);

    private allMatchTypes: MatchType[];

    constructor(private http: Http) {}

    getMatchTypes(): Promise<MatchType[]> {
        var cacheCheckTime = new Date()
        cacheCheckTime.setMinutes(cacheCheckTime.getMinutes() - 15);
        if(this.lastCacheDate < cacheCheckTime){
            return this.http.get(this.matchTypeUrl)
            .toPromise()
            .then(response => {
                this.allMatchTypes = response.json() as MatchType[];

                this.lastCacheDate = new Date();
                return this.allMatchTypes;
            })
            .catch((error: any) => {
                console.error('An error occured', error);
                return Promise.reject(error.message || error); })
        }
        else {
            return Observable.of(this.allMatchTypes)
                .toPromise()
                .then(things => {
                    return this.allMatchTypes;
                })
        }
    }

    saveMatchType(matchTypeForSaving: MatchType): Promise<MatchType> {
        return this.http
            .put(this.matchTypeUrl, JSON.stringify(matchTypeForSaving), {headers: this.headers})
            .toPromise()
            .then(result => {
                //Resetting the last cache date so the list of players is refreshed
                this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
                return result.json() as MatchType;
            })
    }
}