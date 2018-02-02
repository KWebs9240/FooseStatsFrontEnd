import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Tournament } from './tournament'
import { TournamentService } from './tournament.service';

@Component({
    selector: 'tournament-selection',
    templateUrl: './tournament-selection.component.html'
})
export class TournamentSelectionComponent implements OnInit{
    allTournamentHeaders: Tournament[] = [];
    tournaments: Tournament[] = [];
    searchTerm: string = null;

    constructor(private tournamentService: TournamentService,
                private router: Router) {}

    ngOnInit(): void {
        this.tournamentService.getTournamentHeaders()
            .then(result =>
                {
                    this.allTournamentHeaders = result;
                    this.tournaments = result;
                });
    }

    search(): void {
        this.tournaments = this.allTournamentHeaders.filter(tourney => {
            return tourney.tournamentName.toUpperCase().includes(this.searchTerm == null ? '' : this.searchTerm.toUpperCase());
        });
    }

    addNew(): void {
        this.router.navigate(['./tournamentCreation']);
    }
}