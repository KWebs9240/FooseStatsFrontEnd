import { Component, OnInit } from '@angular/core';

import { Player } from './PLayer/player';
import { PlayerService } from './Player/player.service';

import { MatchType } from './MatchType/match-type';
import { MatchTypeService } from './MatchType/match-type.service';

import { FormControl } from '@angular/forms';

@Component({
    styleUrls: [ './dashboard.component.css' ],
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    private matchTypeControl = new FormControl();

    players: Player[] = [];
    graphTitle: string = '';
    allMatchTypes: MatchType[] = []
    selectedMatchTypeId: string = '';
  
    // view: any[] = [700, 400];
  
    // options
    showXAxis = false;
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

    constructor(private playerService: PlayerService,
                private matchTypeService: MatchTypeService) { }

    ngOnInit(): void {
        this.matchTypeControl = new FormControl();

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

        this.matchTypeService.getMatchTypes()
            .then(result => {
                this.allMatchTypes = result;
                this.selectedMatchTypeId = this.allMatchTypes[0].matchTypeId;
            })
            .then(() => {
                this.loadGamesWon();
            })
    }

    loadGamesPlayed(): void {
        this.showChart = false;
        this.playerService.getPlayers()
            .then(result => {

                result = result.sort((x, y) => {
                    if(x.gamesPlayed[this.selectedMatchTypeId] > y.gamesPlayed[this.selectedMatchTypeId]) {return -1}
                    else if (x.gamesPlayed[this.selectedMatchTypeId] < y.gamesPlayed[this.selectedMatchTypeId]) {return 1}
                    else {return 0;}
                });

                this.barChartData = [];
                this.colorScheme.domain = [];
                result.map(player => {
                    this.barChartData.push({name: player.firstName + ' ' + player.lastName + ' - ' + player.nickName, value: [player.gamesPlayed[this.selectedMatchTypeId]]});
                    this.colorScheme.domain.push(player.hexColor || '#1f53d9');
                });

                this.yScaleMax = 0;
                this.graphTitle = 'Games Played';
                this.showChart = true;
            });
    }

    loadGamesWon(): void {
        this.showChart = false;
        this.playerService.getPlayers()
            .then(result => {

                result = result.sort((x, y) => {
                    if(x.gamesWon[this.selectedMatchTypeId] > y.gamesWon[this.selectedMatchTypeId]) {return -1}
                    else if (x.gamesWon[this.selectedMatchTypeId] < y.gamesWon[this.selectedMatchTypeId]) {return 1}
                    else {return 0;}
                });

                this.barChartData = [];
                this.colorScheme.domain = [];
                result.map(player => {
                    this.barChartData.push({name: player.firstName + ' ' + player.lastName + ' - ' + player.nickName, value: [player.gamesWon[this.selectedMatchTypeId]]});
                    this.colorScheme.domain.push(player.hexColor || '#1f53d9');
                });

                this.yScaleMax = 0;
                this.graphTitle = 'Games Won';
                this.showChart = true;
            });
    }

    loadGamesWonPct(): void {
        this.showChart = false;
        this.playerService.getPlayers()
            .then(result => {
                
                result = result.sort((x, y) => {
                    if(x.gamesWonPct[this.selectedMatchTypeId] > y.gamesWonPct[this.selectedMatchTypeId]) {return -1}
                    else if (x.gamesWonPct[this.selectedMatchTypeId] < y.gamesWonPct[this.selectedMatchTypeId]) {return 1}
                    else {return 0;}
                });

                this.barChartData = [];
                this.colorScheme.domain = [];
                result.map(player => {
                    this.barChartData.push({name: player.firstName + ' ' + player.lastName + ' - ' + player.nickName, value: [player.gamesWonPct[this.selectedMatchTypeId]]});
                    this.colorScheme.domain.push(player.hexColor || '#1f53d9');
                });

                this.yScaleMax = 100;
                this.graphTitle = 'Win %';
                this.showChart = true;
            });
    }

    loadPointsPerGame(): void {
        this.showChart = false;
        this.playerService.getPlayers()
            .then(result => {

                result = result.sort((x, y) => {
                    if(x.pointsPerGame[this.selectedMatchTypeId] > y.pointsPerGame[this.selectedMatchTypeId]) {return -1}
                    else if (x.pointsPerGame[this.selectedMatchTypeId] < y.pointsPerGame[this.selectedMatchTypeId]) {return 1}
                    else {return 0;}
                });

                this.barChartData = [];
                this.colorScheme.domain = [];
                result.map(player => {
                    this.barChartData.push({name: player.firstName + ' ' + player.lastName + ' - ' + player.nickName, value: [player.pointsPerGame[this.selectedMatchTypeId]]});
                    this.colorScheme.domain.push(player.hexColor || '#1f53d9');
                });

                this.yScaleMax = 8;
                this.graphTitle = 'Points Per Game';
                this.showChart = true;
            });
    }
}