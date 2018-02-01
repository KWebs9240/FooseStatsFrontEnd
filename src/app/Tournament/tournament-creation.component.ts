import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Player } from '../Player/player';
import { PlayerService } from '../Player/player.service';

import { Tournament } from './tournament';
import { TournamentCreation } from './tournament-creation';
import { TournamentService } from './tournament.service';

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
    participants: Player[] = [];

    constructor(private tournamentService: TournamentService,
                private playerService: PlayerService,
                private dragulaService: DragulaService,
                private router: Router) {
        dragulaService.drop.subscribe((value) => {
            console.log(`drop: ${value[0]}`);
            this.onDrop(value.slice(1));
        })

    }

    ngOnInit(): void {
        this.playerService.getPlayers()
            .then(result => {
                this.allPlayers = result;
                this.selectFromPlayers = this.allPlayers;
            });
    }

    private onDrop(args) {
        let [e, el] = args;
        var player = this.allPlayers.find(x => x.playerId === e.dataset.id);

        var playerIndex = this.selectFromPlayers.indexOf(player);
        this.selectFromPlayers.splice(playerIndex, 1);
        this.participants.push(player);
    }

    createTournament(): Promise<Tournament> {
        var createTournament = new TournamentCreation();
        createTournament.tournamentName = this.tournamentName;
        createTournament.participants = this.participants;

        return this.tournamentService.createTournament(createTournament)
    }
}