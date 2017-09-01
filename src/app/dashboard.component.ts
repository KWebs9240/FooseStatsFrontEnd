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
    public barChartLabels: string[] = ['Games Played'];
    public barChartData: any[] = [];
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
                this.players = result.slice(1, 5);

                // result = result.concat(result);
                // result = result.concat(result);
                // result = result.concat(result);
                // result = result.concat(result);
                // result = result.concat(result);
                // result = result.concat(result);

                // this.barChartData = [{ data: [1,2,3,4], label: 'Test Data'}];
                // this.barChartLabels = result.map(player => player.firstName + ' ' + player.lastName);

                this.barChartData = [];
                result.map(player => {
                    this.barChartData.push({data: [player.firstName.length], label: player.firstName + ' ' + player.lastName + ' - ' + player.nickName});
                });

                this.showChart = true;
            });
    }
}