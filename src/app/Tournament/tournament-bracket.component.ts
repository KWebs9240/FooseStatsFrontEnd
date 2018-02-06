import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Match } from '../Match/match';

import { Tournament } from './tournament';
import { TournamentMatch } from './tournament-match';
import { TournamentService } from './tournament.service';

@Component({
    styleUrls: [ './tournament-bracket.component.css' ],
    selector: 'tournament-bracket',
    templateUrl: './tournament-bracket.component.html'
})
export class TournamentBracketComponent implements OnInit{
    tournament: Tournament;
    rounds: Match[][] = [];

    constructor(private tournamentService: TournamentService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.activatedRoute.params
        .switchMap((params: Params) => {
            if(params['id']) {
                return this.tournamentService.getTournamentComplete(params['id']);
            }
            return new Promise<Tournament>(resolve => {
                return new Tournament();
            });
        }).subscribe(foundTournament => {
            this.tournament = foundTournament;
            this.recurseForRounds(foundTournament.tournamentMatch, 0);
            this.rounds.reverse();
        });
    }

    recurseForRounds(currentTourneyMatch: TournamentMatch, currentRound: number): void {
        if(currentTourneyMatch !== null) {
            if(!this.rounds[currentRound]) {
                this.rounds.push(new Array<Match>());
            }
    
            this.rounds[currentRound].push(currentTourneyMatch.currentMatch);
    
            this.recurseForRounds(currentTourneyMatch.leftMatch, currentRound + 1);
            this.recurseForRounds(currentTourneyMatch.rightMatch, currentRound + 1);
        }
    }
}