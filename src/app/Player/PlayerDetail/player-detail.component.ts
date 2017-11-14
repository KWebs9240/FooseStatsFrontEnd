import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from '../player'
import { PlayerService } from '../player.service';
import { Rival } from '../rival'
import { RivalService } from '../rival.service';
import { Match } from '../../Match/match';
import { MatchService } from '../../Match/match.service';
import { MatchType } from '../../MatchType/match-type';
import { MatchTypeService } from '../../MatchType/match-type.service';

import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
    styleUrls: [ './player-detail.component.css' ],
    selector: 'player-detail',
    templateUrl: './player-detail.component.html'
})
export class PlayerDetailComponent implements OnInit{
    player: Player;
    playedMatches: Match[];
    rivalPlayers: Rival[];

    matchTypeControl = new FormControl();

    allMatchTypes: MatchType[] = []
    selectedMatchTypeId: string = '';
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = false;
    xAxisLabel = 'Player';
    showYAxisLabel = false;
    yAxisLabel = 'Games';
    yScaleMax = 0;
    colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
    public barChartData: any[] = [];
    showChart: boolean = false;
    graphTitle: string = '';

    constructor(
        private playerService: PlayerService,
        private rivalService: RivalService,
        private matchService: MatchService,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private router: Router,
        private matchTypeService: MatchTypeService
    ) {}

    ngOnInit(): void {
        this.matchTypeControl = new FormControl();

        this.activatedRoute.params
            .switchMap((params: Params) => {
                return this.playerService.getPlayer(params['id']);
            }).subscribe(foundPlayer => {
                this.player = foundPlayer;
                this.matchService.getPlayerMatches(foundPlayer.playerId)
                    .then(resultMatches => this.playedMatches = resultMatches);
                this.rivalService.getRivals(foundPlayer.playerId)
                    .then(resultRivals => this.rivalPlayers = resultRivals)
                    .then(() => this.matchTypeService.getMatchTypes())
                    .then(matchTypes => {
                        this.allMatchTypes = matchTypes;
                        this.selectedMatchTypeId = this.allMatchTypes[0].matchTypeId;
                    })
                    .then(() => {
                        this.loadGamesWon();
                    })
                    .then(() => {
                        let test = this.matchTypeControl.valueChanges
                        
                                test.subscribe(value => {
                                    switch(this.graphTitle) {
                                        case 'Games Won':
                                            this.loadGamesWon();
                                            break;
                                        case 'Games Played':
                                            this.loadGamesPlayed();
                                            break;
                                        case 'Win %':
                                            this.loadGamesWonPct();
                                            break;
                                        case 'Points Per Game':
                                            this.loadPointsPerGame();
                                            break;
                                        default:
                                            this.loadGamesWon();
                                    }
                                });
                    })
            });
    }

    goBack(): void {
        this.location.back();
    }

    deletePlayer(): void {
        this.playerService.deletePlayer(this.player)
            .then(deletes => {
                if(deletes > 1) {
                    //This isn't supposed to happen
                }
                this.goBack();
            })
    }

    modifyPlayer(): void {
        var route = './playercreate/' + this.player.playerId;
        this.router.navigate([route]);
    }

    loadGamesPlayed(): void {
        this.showChart = false;
        this.rivalPlayers = this.rivalPlayers.sort((x, y) => {
            if(x.rivalGamesPlayed[this.selectedMatchTypeId] > y.rivalGamesPlayed[this.selectedMatchTypeId]) {return -1}
            else if (x.rivalGamesPlayed[this.selectedMatchTypeId] < y.rivalGamesPlayed[this.selectedMatchTypeId]) {return 1}
            else {return 0;}
        });

        this.barChartData = [];
        this.colorScheme.domain = [];
        this.rivalPlayers.map(player => {
            if(player.rivalGamesPlayed[this.selectedMatchTypeId] > 0) {
                this.barChartData.push({name: player.firstName + ' ' + player.lastName, series: [ 
                    {name: 'rival', value: player.rivalGamesPlayed[this.selectedMatchTypeId]},
                    { name: 'player', value: player.playerGamesPlayed[this.selectedMatchTypeId] }
                ]});
                this.colorScheme.domain.push(player.hexColor || '#1f53d9');
            }
        });

        this.yScaleMax = 0;
        this.graphTitle = 'Games Played';
        this.showChart = true;
    }

    loadGamesWon(): void {
        this.showChart = false;
        var huh = this.rivalPlayers;
        this.rivalPlayers = this.rivalPlayers.sort((x, y) => {
            if(x.rivalGamesWon[this.selectedMatchTypeId] > y.rivalGamesWon[this.selectedMatchTypeId]) {return -1}
            else if (x.rivalGamesWon[this.selectedMatchTypeId] < y.rivalGamesWon[this.selectedMatchTypeId]) {return 1}
            else {return 0;}
        });

        this.barChartData = [];
        this.colorScheme.domain = [];
        this.rivalPlayers.map(player => {
            if(player.rivalGamesPlayed[this.selectedMatchTypeId] > 0) {
                this.barChartData.push({name: player.firstName + ' ' + player.lastName, series: [
                    { name: 'rival', value: player.rivalGamesWon[this.selectedMatchTypeId] },
                    { name: 'player', value: player.playerGamesWon[this.selectedMatchTypeId] }
                ]});
                this.colorScheme.domain.push(player.hexColor || '#1f53d9');
            }
        });

        this.yScaleMax = 0;
        this.graphTitle = 'Games Won';
        this.showChart = true;
    }

    loadGamesWonPct(): void {
        this.showChart = false;
        this.rivalPlayers = this.rivalPlayers.sort((x, y) => {
            if(x.rivalGamesWonPct[this.selectedMatchTypeId] > y.rivalGamesWonPct[this.selectedMatchTypeId]) {return -1}
            else if (x.rivalGamesWonPct[this.selectedMatchTypeId] < y.rivalGamesWonPct[this.selectedMatchTypeId]) {return 1}
            else {return 0;}
        });

        this.barChartData = [];
        this.colorScheme.domain = [];
        this.rivalPlayers.map(player => {
            if(player.rivalGamesPlayed[this.selectedMatchTypeId] > 0) {
                this.barChartData.push({name: player.firstName + ' ' + player.lastName, series: [
                    { name: 'rival', value: player.rivalGamesWonPct[this.selectedMatchTypeId] },
                    { name: 'player', value: player.playerGamesWonPct[this.selectedMatchTypeId] }
                ]});
                this.colorScheme.domain.push(player.hexColor || '#1f53d9');
            }
        });

        this.yScaleMax = 100;
        this.graphTitle = 'Win %';
        this.showChart = true;
    }

    loadPointsPerGame(): void {
        this.showChart = false;
        this.rivalPlayers = this.rivalPlayers.sort((x, y) => {
            if(x.rivalPointsPerGame[this.selectedMatchTypeId] > y.rivalPointsPerGame[this.selectedMatchTypeId]) {return -1}
            else if (x.rivalPointsPerGame[this.selectedMatchTypeId] < y.rivalPointsPerGame[this.selectedMatchTypeId]) {return 1}
            else {return 0;}
        });

        this.barChartData = [];
        this.colorScheme.domain = [];
        this.rivalPlayers.map(player => {
            if(player.rivalGamesPlayed[this.selectedMatchTypeId] > 0) {
                this.barChartData.push({name: player.firstName + ' ' + player.lastName, series: [
                    { name: 'rival', value: player.rivalPointsPerGame[this.selectedMatchTypeId] },
                    { name: 'player', value: player.playerPointsPerGame[this.selectedMatchTypeId] }
                ]});
                this.colorScheme.domain.push(player.hexColor || '#1f53d9');
            }
        });

        this.yScaleMax = 8;
        this.graphTitle = 'Points Per Game';
        this.showChart = true;
    }
}