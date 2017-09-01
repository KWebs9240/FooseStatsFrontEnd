import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from './player'
import { PlayerService } from './player.service';

@Component({
    selector: 'player-selection',
    templateUrl: './player-selection.component.html'
})
export class PlayerSelectionComponent implements OnInit{
    allPlayers: Player[] = [];
    players: Player[] = [];
    searchTerm: string = null;

    constructor(private playerService: PlayerService,
                private router: Router) {}

    ngOnInit(): void {
        this.playerService.getPlayers()
            .then(result =>
                {
                    this.allPlayers = result;
                    this.players = result;
                });
    }

    search(): void {
        this.players = this.allPlayers.filter(player => {
            return ''
            .concat(player.firstName.toUpperCase(), ' ')
            .concat(player.lastName.toUpperCase(), ' ')
            .concat(player.nickName.toUpperCase())
            .includes(this.searchTerm == null ? '' : this.searchTerm.toUpperCase());
        });
    }

    addNew(): void {
        this.router.navigate(['./playercreate']);
    }
}