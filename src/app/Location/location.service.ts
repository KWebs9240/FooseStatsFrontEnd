import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';

import { GlobalConstants } from '../global-constants';

import { Location } from './location';

@Injectable()
export class LocationService {
    private locationUrl = GlobalConstants.API_ENDPOINT + 'api/Location';
    private headers = new Headers({'Content-Type': 'application/json'});
    
    private lastCacheDate: Date = new Date(2000, 1, 0, 0, 0, 0, 0);

    private allLocations: Location[];

    constructor(private http: Http) {}

    getLocations(): Promise<Location[]> {
        var cacheCheckTime = new Date()
        cacheCheckTime.setMinutes(cacheCheckTime.getMinutes() - 15);
        if(this.lastCacheDate < cacheCheckTime){
            return this.http.get(this.locationUrl)
            .toPromise()
            .then(response => {
                this.allLocations = response.json() as Location[];

                this.lastCacheDate = new Date();
                return this.allLocations;
            })
            .catch((error: any) => {
                console.error('An error occured', error);
                return Promise.reject(error.message || error); })
        }
        else {
            return Observable.of(this.allLocations)
                .toPromise()
                .then(things => {
                    return this.allLocations;
                })
        }
    }

    saveLocation(locationForSaving: Location): Promise<Location> {
        return this.http
            .put(this.locationUrl, JSON.stringify(locationForSaving), {headers: this.headers})
            .toPromise()
            .then(result => {
                //Resetting the last cache date so the list of players is refreshed
                this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
                return result.json() as Location;
            })
    }

    deleteLocation(locationIdToDelete: Location): Promise<number> {
        return this.http
            .post(this.locationUrl + '/Delete', JSON.stringify(locationIdToDelete), {headers: this.headers})
            .toPromise()
            .then(result => {
                this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
                return result.json() as number;
            });
    }
}