import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
    selector: 'player-creation',
    templateUrl: './player-creation.component.html'
})
export class PlayerCreationComponent implements OnInit{
    playerId: string;
    firstName: string;
    lastName: string;
    nickName: string;
    hexColor: string;

    constructor(private playerService: PlayerService,
                private router: Router,
                private activatedRoute: ActivatedRoute,) {}

    ngOnInit(): void {
        this.activatedRoute.params
        .switchMap((params: Params) => {
            if(params['id']) {
                return this.playerService.getPlayer(params['id']);
            }
            return new Promise<Player>(resolve => {
                return new Player();
            });
        }).subscribe(foundPlayer => {
            this.playerId = foundPlayer.playerId;
            this.firstName = foundPlayer.firstName;
            this.lastName = foundPlayer.lastName;
            this.nickName = foundPlayer.nickName;
            this.hexColor = foundPlayer.hexColor;
        });
    }

    save(): Promise<Player> {
        var insertPlayer = new Player();
        insertPlayer.firstName = this.firstName;
        insertPlayer.lastName = this.lastName;
        insertPlayer.nickName = this.nickName;
        insertPlayer.playerId = this.playerId;
        insertPlayer.hexColor = this.hexColor;

        return this.playerService.savePlayer(insertPlayer)
    }

    saveThenView(): void {
        this.save()
            .then(player => {
                if(player != null) {
                    var route = './players/' + player.playerId;
                    this.router.navigate([route]);
                }
                else {
                    return;
                }
            })
    }
}