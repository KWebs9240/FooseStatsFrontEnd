import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Match } from './match'
import { MatchService } from './match.service';
import { PlayerService } from '../Player/player.service';

@Component({
    selector: 'match-selection',
    templateUrl: './match-selection.component.html'
})
export class MatchSelectionComponent implements OnInit{
    allMatches: Match[] = [];
    searchTerm: string = null;

    constructor(private matchService: MatchService,
        private playerService: PlayerService,
        private router: Router,) {}

    ngOnInit(): void {
        this.matchService.getMatches()
            .then(result => 
                {
                    this.allMatches = result;
                });
    }

    addNew(): void {
        this.router.navigate(['./matchcreate']);
    }
}