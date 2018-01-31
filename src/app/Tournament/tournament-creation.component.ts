import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Player } from '../Player/player';
import { PlayerService } from '../Player/player.service';

import { dragula, DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
    styleUrls: [ '../../../node_modules/dragula/dist/dragula.css'
                , './tournament-creation.component.css' ],
    selector: 'tournament-creation',
    templateUrl: './tournament-creation.component.html'
})
export class TournamentCreationComponent implements OnInit{
    tournamentName: string;
    allPlayers: Player[];
    selectFromPlayers: Player[];
    participants: Player[];

    constructor(private playerService: PlayerService,
                private router: Router) {}

    ngOnInit(): void {
        this.playerService.getPlayers()
            .then(result => {
                this.allPlayers = result;
                this.selectFromPlayers = this.allPlayers;
            });
    }
}