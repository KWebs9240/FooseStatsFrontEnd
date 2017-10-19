import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';

import { Match } from './match';
import { Player } from '../Player/player';
import { PlayerService } from '../Player/player.service';

@Injectable()
export class MatchService {
    private matchUrl = 'http://localhost:64358/api/Match';
    private headers = new Headers({'Content-Type': 'application/json'});
    
    private lastCacheDate: Date = new Date(2000, 1, 0, 0, 0, 0, 0);

    private allMatches: Match[];

    constructor(private http: Http, private playerService: PlayerService) {}

    getMatches(): Promise<Match[]> {
        var cacheCheckTime = new Date()
        cacheCheckTime.setMinutes(cacheCheckTime.getMinutes() - 15);
        if(this.lastCacheDate < cacheCheckTime){
            return this.http.get(this.matchUrl)
            .toPromise()
            .then(response => {
                this.allMatches = response.json() as Match[];

                this.playerService.getPlayers()
                    .then(players => {
                        this.allMatches.forEach( match => {
                            match.Player1Name = players.find(player => player.playerId === match.player1Id).firstName;
                            match.Player2Name = players.find(player => player.playerId === match.player2Id).firstName;
                        });
                    });

                this.lastCacheDate = new Date();
                return this.allMatches;
            })
            .catch((error: any) => {
                console.error('An error occured', error);
                return Promise.reject(error.message || error); })
        }
        else {
            return Observable.of(this.allMatches)
                .toPromise()
                .then(things => {
                    return this.allMatches;
                })
        }
    }

    getMatch(matchId: string): Promise<Match> {
        return this.getMatches()
            .then(matches => {
                return matches.find(match => match.matchId === matchId);
            })
    }

    getPlayerMatches(playerId: string): Promise<Match[]> {
        return this.getMatches()
            .then(matches => {
                return matches.filter(match => {
                    return match.player1Id === (playerId)
                    || match.player2Id === (playerId)
                    || match.player3Id === (playerId)
                    || match.player4Id === (playerId)
                });
            });
    }

    saveMatch(matchForSaving: Match): Promise<Match> {
        if(matchForSaving.matchId) {
            return this.http
                .put(this.matchUrl, JSON.stringify(matchForSaving), {headers: this.headers})
                .toPromise()
                .then(result => {
                    //Resetting the last cache date so the list of players is refreshed
                    this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
                    return result.json() as Match;
                });
        }
        else {
            return this.http
                .post(this.matchUrl, JSON.stringify(matchForSaving), {headers: this.headers})
                .toPromise()
                .then(result => {
                    //Resetting the last cache date so the list of players is refreshed
                    this.lastCacheDate = new Date(2000, 1, 0, 0, 0, 0, 0);
                    return result.json() as Match;
                });
        }
    }
}