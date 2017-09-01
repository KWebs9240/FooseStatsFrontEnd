import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';

import { Player } from '../Player/player';
import { PlayerService } from '../Player/player.service';

import { Match } from './match';
import { MatchService } from './match.service';

@Component({
    selector: 'match-creation',
    templateUrl: './match-creation.component.html'
})
export class MatchCreationComponent implements OnInit{
    allPlayers: Player [];
    selectedPlayer1: Player = new Player();
    selectedPlayer2: Player = new Player();
    team1Score: number;
    team2Score: number;

    constructor(private playerService: PlayerService,
                private matchService: MatchService,
                private router: Router,
                ) {}

    ngOnInit(): void {
        this.playerService.getPlayers()
            .then (result => {
                this.allPlayers = result
            });
    }

    save(): Promise<Match> {
        var insertMatch = new Match();
        insertMatch.player1Id = this.selectedPlayer1.playerId;
        insertMatch.player2Id = this.selectedPlayer2.playerId;
        //insertMatch.player3Id = this.selectedPlayer3.playerId;
        //insertMatch.player4Id = this.selectedPlayer4.playerId;
        insertMatch.team1Score = this.team1Score;
        insertMatch.team2Score = this.team2Score;
        insertMatch.isDoubles = false;


        return this.matchService.saveMatch(insertMatch);
    }

    saveThenAllMatches(): void {
        this.save()
            .then(match => {
                this.router.navigate(['matches']);
            });
    }
}