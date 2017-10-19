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
    public barChartLabels: string[] = [''];
    public barChartData: any[] = [];
    public barChartColors: any[] = [];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    showChart: boolean = false;

    constructor(private playerService: PlayerService) {}

    ngOnInit(): void {
        this.showChart = false;
        this.playerService.getPlayers()
            .then(result => {

                result = result.sort(function(x, y) {
                    if(x.gamesPlayed > y.gamesPlayed) {return -1}
                    else if (x.gamesPlayed < y.gamesPlayed) {return 1}
                    else {return 0;}
                });

                this.barChartData = [];
                result.map(player => {
                    this.barChartData.push({data: [player.gamesPlayed], label: player.firstName + ' ' + player.lastName + ' - ' + player.nickName});
                    this.barChartColors.push({ backgroundColor: player.hexColor});
                });

                
                this.graphTitle = 'Games Played';
                this.showChart = true;
            });
    }

    loadGamesPlayed(): void {
        this.showChart = false;
        this.playerService.getPlayers()
            .then(result => {
                this.players = result.slice(1, 5);

                this.barChartData = [];
                result.map(player => {
                    this.barChartData.push({data: [player.gamesPlayed], label: player.firstName + ' ' + player.lastName + ' - ' + player.nickName});
                });

                this.barChartData = this.barChartData.sort(function (x, y) {
                    if(x.data[0] > y.data[0]) {return -1;}
                    else if (x.data[0] < y.data[0]) {return 1;}
                    else {return 0;}
                });

                this.graphTitle = 'Games Played';
                this.showChart = true;
            });
    }

    loadGamesWon(): void {
        this.showChart = false;
        this.playerService.getPlayers()
            .then(result => {
                //Something like this if I ever want to only get the first few
                //this.players = result.slice(1, 5);

                this.barChartData = [];
                result.map(player => {
                    this.barChartData.push({data: [player.gamesWon], label: player.firstName + ' ' + player.lastName + ' - ' + player.nickName});
                });

                this.barChartData = this.barChartData.sort(function (x, y) {
                    if(x.data[0] > y.data[0]) {return -1;}
                    else if (x.data[0] < y.data[0]) {return 1;}
                    else {return 0;}
                });

                this.graphTitle = 'Games Won';
                this.showChart = true;
            });
    }

    loadPointsPerGame(): void {
        this.showChart = false;
        this.playerService.getPlayers()
            .then(result => {
                //Something like this if I ever want to only get the first few
                //this.players = result.slice(1, 5);

                this.barChartData = [];
                result.map(player => {
                    this.barChartData.push({data: [player.pointsPerGame], label: player.firstName + ' ' + player.lastName + ' - ' + player.nickName});
                });

                this.barChartData = this.barChartData.sort(function (x, y) {
                    if(x.data[0] > y.data[0]) {return -1;}
                    else if (x.data[0] < y.data[0]) {return 1;}
                    else {return 0;}
                });

                this.graphTitle = 'Points Per Game';
                this.showChart = true;
            });
    }
}