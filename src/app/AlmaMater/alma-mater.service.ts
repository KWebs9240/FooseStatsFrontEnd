import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';

import { GlobalConstants } from '../global-constants';

import { AlmaMater } from './alma-mater';

@Injectable()
export class AlmaMaterService {
    private almaMaterUrl = GlobalConstants.API_ENDPOINT + 'api/AlmaMater';
    private headers = new Headers({'Content-Type': 'application/json'});
    
    private lastCacheDate: Date = new Date(2000, 1, 0, 0, 0, 0, 0);

    private allAlmaMaters: AlmaMater[];

    constructor(private http: Http) {}

    getAlmaMaters(): Promise<AlmaMater[]> {
        var cacheCheckTime = new Date()
        cacheCheckTime.setMinutes(cacheCheckTime.getMinutes() - 15);
        if(this.lastCacheDate < cacheCheckTime){
            return this.http.get(this.almaMaterUrl)
            .toPromise()
            .then(response => {
                this.allAlmaMaters = response.json() as AlmaMater[];

                this.lastCacheDate = new Date();
                return this.allAlmaMaters;
            })
            .catch((error: any) => {
                console.error('An error occured', error);
                return Promise.reject(error.message || error); })
        }
        else {
            return Observable.of(this.allAlmaMaters)
                .toPromise()
                .then(things => {
                    return this.allAlmaMaters;
                })
        }
    }

    saveAlmaMater(almaMaterForSaving: AlmaMater): Promise<AlmaMater> {
        return this.http
            .put(this.almaMaterUrl, JSON.stringify(almaMaterForSaving), {headers: this.headers})
            .toPromise()
            .then(result => {
                //Resetting the last cache date so the list of players is refreshed
                this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
                return result.json() as AlmaMater;
            })
    }

    deleteAlmaMater(almMaterIdToDelete: AlmaMater): Promise<number> {
        return this.http
            .post(this.almaMaterUrl + '/Delete', JSON.stringify(almMaterIdToDelete), {headers: this.headers})
            .toPromise()
            .then(result => {
                this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
                return result.json() as number;
            });
    }
}