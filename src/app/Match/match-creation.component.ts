import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

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
    matchId: string;
    selectedPlayer1: Player = new Player();
    selectedPlayer2: Player = new Player();
    team1Score: number;
    team2Score: number;
    allMatchTypes: MatchType[];
    selectedMatchType: MatchType;

    constructor(private playerService: PlayerService,
                private matchService: MatchService,
                private matchTypeService: MatchTypeService,
                private location: Location,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                ) {}

    ngOnInit(): void {
        this.playerService.getPlayers()
        .then (result => {
            this.allPlayers = result.sort((x, y) => {
                if((x.firstName + x.lastName) < (y.firstName + y.lastName)) {return -1}
                else if ((x.firstName + x.lastName) > (y.firstName + y.lastName)) {return 1}
                else {return 0;}
            });
        });

        this.matchTypeService.getMatchTypes()
        .then (result => {
            this.allMatchTypes = result
        });

        this.activatedRoute.params
        .switchMap((params: Params) => {
            if(params['id']) {
                return this.matchService.getMatch(params['id']);
            }
            return new Promise<Match>(resolve => {
                return new Match();
            });
        }).subscribe(foundMatch => {
            this.matchId = foundMatch.matchId;
            this.selectedPlayer1 = this.allPlayers.find(player => player.playerId === foundMatch.player1Id);
            this.selectedPlayer2 = this.allPlayers.find(player => player.playerId === foundMatch.player2Id);
            this.team1Score = foundMatch.team1Score;
            this.team2Score = foundMatch.team2Score;
            this.selectedMatchType = this.allMatchTypes.find(matchType => matchType.matchTypeId === foundMatch.matchTypeId);
        });
    }

    save(): Promise<Match> {
        var insertMatch = new Match();
        insertMatch.matchId = this.matchId;
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

    saveThenBack(): void {
        this.save()
            .then(match => {
                this.location.back();
            });
    }
}