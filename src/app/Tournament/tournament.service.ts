import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';

import { GlobalConstants } from '../global-constants';

import { Tournament } from './tournament';
import { TournamentCreation } from './tournament-creation';

@Injectable()
export class TournamentService{
    private tournamentUrl = GlobalConstants.API_ENDPOINT + 'api/Tournament';
    private tournamentCompleteUrl = GlobalConstants.API_ENDPOINT + 'api/Tournament/Complete';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    createTournament(creationDto: TournamentCreation): Promise<Tournament> {
        return this.http
            .post(this.tournamentCompleteUrl, JSON.stringify(creationDto), {headers: this.headers})
            .toPromise()
            .then(result => {
                return result.json() as Tournament;
            });
    }
}