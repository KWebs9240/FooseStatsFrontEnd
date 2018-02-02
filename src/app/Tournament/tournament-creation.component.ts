import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Player } from '../Player/player';
import { PlayerService } from '../Player/player.service';

import { MatchType } from '../MatchType/match-type';
import { MatchTypeService } from '../MatchType/match-type.service';

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
    allMatchTypes: MatchType[];
    selectedMatchType: MatchType;
    selectFromPlayers: Player[];
    participants: Player[] = [];

    constructor(private tournamentService: TournamentService,
                private playerService: PlayerService,
                private matchTypeService: MatchTypeService,
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
                this.selectFromPlayers = this.allPlayers
                    .map(x => Object.assign({}, x));
                this.sortByName(this.selectFromPlayers);
            });

        this.matchTypeService.getMatchTypes()
            .then(result => {
                this.allMatchTypes = result;
            });
    }

    sortByName(playerList: Player[]): Player[] {
        return playerList.sort((x, y) => {
            if((x.firstName + x.lastName) < (y.firstName + y.lastName)) {return -1}
            else if ((x.firstName + x.lastName) > (y.firstName + y.lastName)) {return 1}
            else {return 0;}
        })
    }

    private onDrop(args) {
        let [e, eTarg, eSource] = args;

        if(eTarg.id === eSource.id) {}
        else if (eTarg.id === 'targetParticipants') {
            var player = this.selectFromPlayers.find(x => x.playerId === e.dataset.id);
            var playerIndex = this.selectFromPlayers.indexOf(player);
            this.selectFromPlayers.splice(playerIndex, 1);
            this.participants.push(player);
            this.sortByName(this.participants);
        }
        else if (eTarg.id === 'sourcePlayers') {
            var player = this.participants.find(x => x.playerId === e.dataset.id);
            var playerIndex = this.participants.indexOf(player);
            this.participants.splice(playerIndex, 1);
            this.selectFromPlayers.push(player);
            this.sortByName(this.selectFromPlayers);
        }
    }

    createTournament(): Promise<Tournament> {
        var createTournament = new TournamentCreation();
        createTournament.tournamentName = this.tournamentName;
        createTournament.participants = this.participants;
        createTournament.matchTypeId = this.selectedMatchType.matchTypeId;

        return this.tournamentService.createTournament(createTournament)
    }
}