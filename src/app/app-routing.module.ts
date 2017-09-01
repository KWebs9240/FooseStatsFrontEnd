import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { PlayerSelectionComponent } from './Player/player-selection.component';
import { PlayerDetailComponent } from './Player/PlayerDetail/player-detail.component';
import { MatchSelectionComponent } from './Match/match-selection.component';
import { PlayerCreationComponent } from './Player/player-creation.component';
import { MatchCreationComponent } from './Match/match-creation.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'players', component: PlayerSelectionComponent },
    { path: 'players/:id', component: PlayerDetailComponent },
    { path: 'matches', component: MatchSelectionComponent },
    { path: 'playercreate', component: PlayerCreationComponent },
    { path: 'playercreate/:id', component: PlayerCreationComponent },
    { path: 'matchcreate', component: MatchCreationComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}