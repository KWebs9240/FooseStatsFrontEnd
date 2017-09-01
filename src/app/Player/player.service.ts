import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';

import { Player } from './player';

@Injectable()
export class PlayerService{
    private playerUrl = 'http://localhost:64358/api/Player';
    private headers = new Headers({'Content-Type': 'application/json'});

    private lastCacheDate: Date = new Date(2000, 1, 0, 0, 0, 0, 0);

    private allPlayers: Player[];

    constructor(private http: Http) {}

    getPlayers(): Promise<Player[]> {
        var cacheCheckTime = new Date()
        cacheCheckTime.setMinutes(cacheCheckTime.getMinutes() - 15);
        if(this.lastCacheDate < cacheCheckTime){
            return this.http.get(this.playerUrl)
                .toPromise()
                .then(response => {
                    this.allPlayers = response.json() as Player[];
                    this.lastCacheDate = new Date();
                    return response.json() as Player[];
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

    getPlayer(playerId: string): Promise<Player> {
        return this.getPlayers()
            .then(players => {
                return players.find(player => player.playerId === playerId);
            })
    }

    savePlayer(playerForSaving: Player): Promise<Player> {
        //At least through the front end, don't let people save "duplicate" players
        return this.getPlayers()
            .then(players => {
                if(players.find(x => {
                    return x.firstName === playerForSaving.firstName
                    && x.lastName === playerForSaving.lastName
                    && x.nickName === playerForSaving.nickName
                    })) {
                        return new Promise<Player>(resolve => {
                            return null;
                        });
                    }
                else {
                    if(playerForSaving.playerId) {
                        return this.http
                            .put(this.playerUrl, JSON.stringify(playerForSaving), {headers: this.headers})
                            .toPromise()
                            .then(result => {
                                //Resetting the last cache date so the list of players is refreshed
                                this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
                                return result.json() as Player;
                            })
                    }
                    else {
                        return this.http
                            .post(this.playerUrl, JSON.stringify(playerForSaving), {headers: this.headers})
                            .toPromise()
                            .then(result => {
                                //Resetting the last cache date so the list of players is refreshed
                                this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
                                return result.json() as Player;
                            });
                    }
                }
            });
        }
    
    deletePlayer(playerToDelete:Player): Promise<number>{
        return this.http
            .post(this.playerUrl + '/Delete', JSON.stringify(playerToDelete), {headers: this.headers})
            .toPromise()
            .then(result => {
                this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
                return result.json() as number;
            });
    }
}