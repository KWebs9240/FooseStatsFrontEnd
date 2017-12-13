import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Player } from './player';
import { PlayerService } from './player.service';

import { AlmaMater } from '../AlmaMater/alma-mater';
import { AlmaMaterService } from '../AlmaMater/alma-mater.service';

import { Location } from '../Location/location';
import { LocationService } from '../Location/location.service';
import { FormBuilder } from '@angular/forms/src/form_builder';

@Component({
    selector: 'player-creation',
    templateUrl: './player-creation.component.html'
})
export class PlayerCreationComponent implements OnInit{
    playerId: string;
    firstName: string;
    lastName: string;
    nickName: string;
    locationId: string;
    almaMaterId: string;
    hexColor: string;

    allLocations: Location[];
    allAlmaMaters: AlmaMater[];

    constructor(private playerService: PlayerService,
                private almaMaterService: AlmaMaterService,
                private locationService: LocationService,
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
            this.locationId = foundPlayer.locationId;
            this.almaMaterId = foundPlayer.almaMaterId;
        });

        this.locationService.getLocations()
            .then(result => this.allLocations = result);

        this.almaMaterService.getAlmaMaters()
            .then(result => this.allAlmaMaters = result);
    }

    save(): Promise<Player> {
        var insertPlayer = new Player();
        insertPlayer.firstName = this.firstName;
        insertPlayer.lastName = this.lastName;
        insertPlayer.nickName = this.nickName;
        insertPlayer.playerId = this.playerId;
        insertPlayer.hexColor = this.hexColor;
        insertPlayer.locationId = this.locationId;
        insertPlayer.almaMaterId = this.almaMaterId;

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