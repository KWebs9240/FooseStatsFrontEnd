import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from '../player'
import { PlayerService } from '../player.service';
import { Match } from '../../Match/match';
import { MatchService } from '../../Match/match.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
    selector: 'player-detail',
    templateUrl: './player-detail.component.html'
})
export class PlayerDetailComponent implements OnInit{
    player: Player;
    playedMatches: Match[];


    constructor(
        private playerService: PlayerService,
        private matchService: MatchService,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private router: Router
    ) {}

    ngOnInit(): void {
        //Still a block but switching to do might get me through it for now
        //Nope, still stuck actually learning something and sinking a decent amount of time into this one
        this.activatedRoute.params
            .switchMap((params: Params) => {
                return this.playerService.getPlayer(params['id']);
            }).subscribe(foundPlayer => {
                this.player = foundPlayer;
                this.matchService.getPlayerMatches(foundPlayer.playerId)
                    .then(resultMatches => this.playedMatches = resultMatches);
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
}