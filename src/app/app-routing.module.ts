import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './dashboard.component';
import { PlayerSelectionComponent } from './Player/player-selection.component';
import { PlayerDetailComponent } from './Player/PlayerDetail/player-detail.component';
import { MatchSelectionComponent } from './Match/match-selection.component';
import { PlayerCreationComponent } from './Player/player-creation.component';
import { MatchCreationComponent } from './Match/match-creation.component';
import { MatchTypeManagementComponent } from './MatchType/match-type-management.component';
import { LocationManagementComponent } from './Location/location-management.component';
import { AlmaMaterManagementComponent } from './AlmaMater/alma-mater-management.component';
import { TournamentSelectionComponent } from './Tournament/tournament-selection.component';
import { TournamentCreationComponent } from './Tournament/tournament-creation.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'players', component: PlayerSelectionComponent },
    { path: 'players/:id', component: PlayerDetailComponent },
    { path: 'matches', component: MatchSelectionComponent },
    { path: 'playercreate', component: PlayerCreationComponent },
    { path: 'playercreate/:id', component: PlayerCreationComponent },
    { path: 'matchcreate', component: MatchCreationComponent },
    { path: 'matchcreate/:id', component: MatchCreationComponent },
    { path: 'matchTypeManagement', component: MatchTypeManagementComponent },
    { path: 'locationManagement', component: LocationManagementComponent },
    { path: 'almaMaterManagement', component: AlmaMaterManagementComponent },
    { path: 'tournaments', component: TournamentSelectionComponent },
    { path: 'tournamentCreation', component: TournamentCreationComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}