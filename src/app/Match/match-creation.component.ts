import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';

import { Player } from '../Player/player';
import { PlayerService } from '../Player/player.service';

import { Match } from './match';
import { MatchService } from './match.service';

import { MatchType } from '../MatchType/match-type';
import { MatchTypeService } from '../MatchType/match-type.service';

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
    allMatchTypes: MatchType[];
    selectedMatchType: MatchType;

    constructor(private playerService: PlayerService,
                private matchService: MatchService,
                private matchTypeService: MatchTypeService,
                private router: Router,
                ) {}

    ngOnInit(): void {
        this.playerService.getPlayers()
            .then (result => {
                this.allPlayers = result
            });
        this.matchTypeService.getMatchTypes()
            .then (result => {
                this.allMatchTypes = result
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
        insertMatch.matchTypeId = this.selectedMatchType.matchTypeId;


        return this.matchService.saveMatch(insertMatch);
    }

    saveThenAllMatches(): void {
        this.save()
            .then(match => {
                this.router.navigate(['matches']);
            });
    }
}