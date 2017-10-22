import { Component, OnInit } from '@angular/core';

import { Player } from './PLayer/player';
import { PlayerService } from './Player/player.service';

@Component({
    styleUrls: [ './dashboard.component.css' ],
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    players: Player[] = [];
    graphTitle: string = '';
  
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

    constructor(private playerService: PlayerService) { }

    ngOnInit(): void {
        this.loadGamesWon();
    }

    loadGamesPlayed(): void {
        this.showChart = false;
        this.playerService.getPlayers()
            .then(result => {

                result = result.sort(function(x, y) {
                    if(x.gamesPlayed > y.gamesPlayed) {return -1}
                    else if (x.gamesPlayed < y.gamesPlayed) {return 1}
                    else {return 0;}
                });

                this.barChartData = [];
                this.colorScheme.domain = [];
                result.map(player => {
                    this.barChartData.push({name: player.firstName + ' ' + player.lastName + ' - ' + player.nickName, value: [player.gamesPlayed]});
                    this.colorScheme.domain.push(player.hexColor || '#1f53d9');
                });

                this.graphTitle = 'Games Played';
                this.showChart = true;
            });
    }

    loadGamesWon(): void {
        this.showChart = false;
        this.playerService.getPlayers()
            .then(result => {
                
                result = result.sort(function(x, y) {
                    if(x.gamesWon > y.gamesWon) {return -1}
                    else if (x.gamesWon < y.gamesWon) {return 1}
                    else {return 0;}
                });

                this.barChartData = [];
                this.colorScheme.domain = [];
                result.map(player => {
                    this.barChartData.push({name: player.firstName + ' ' + player.lastName + ' - ' + player.nickName, value: [player.gamesWon]});
                    this.colorScheme.domain.push(player.hexColor || '#1f53d9');
                });

                this.graphTitle = 'Games Won';
                this.showChart = true;
            });
    }

    loadGamesWonPct(): void {
        this.showChart = false;
        this.playerService.getPlayers()
            .then(result => {
                
                result = result.sort(function(x, y) {
                    if(x.gamesWonPct > y.gamesWonPct) {return -1}
                    else if (x.gamesWonPct < y.gamesWonPct) {return 1}
                    else {return 0;}
                });

                this.barChartData = [];
                this.colorScheme.domain = [];
                result.map(player => {
                    this.barChartData.push({name: player.firstName + ' ' + player.lastName + ' - ' + player.nickName, value: [player.gamesWonPct]});
                    this.colorScheme.domain.push(player.hexColor || '#1f53d9');
                });

                this.yScaleMax = 100;
                this.graphTitle = 'Games Won';
                this.showChart = true;
            });
    }

    loadPointsPerGame(): void {
        this.showChart = false;
        this.playerService.getPlayers()
            .then(result => {

                result = result.sort(function(x, y) {
                    if(x.pointsPerGame > y.pointsPerGame) {return -1}
                    else if (x.pointsPerGame < y.pointsPerGame) {return 1}
                    else {return 0;}
                });

                this.barChartData = [];
                this.colorScheme.domain = [];
                result.map(player => {
                    this.barChartData.push({name: player.firstName + ' ' + player.lastName + ' - ' + player.nickName, value: [player.pointsPerGame]});
                    this.colorScheme.domain.push(player.hexColor || '#1f53d9');
                });

                this.yScaleMax = 8;
                this.graphTitle = 'Points Per Game';
                this.showChart = true;
            });
    }
}