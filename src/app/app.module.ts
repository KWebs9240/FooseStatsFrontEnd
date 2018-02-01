import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DragulaModule } from 'ng2-dragula';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';

import { PlayerSelectionComponent } from './Player/player-selection.component';
import { PlayerDetailComponent } from './Player/PlayerDetail/player-detail.component';
import { PlayerService } from './Player/player.service';
import { RivalService } from './Player/rival.service';
import { MatchSelectionComponent } from './Match/match-selection.component';
import { MatchService } from './Match/match.service';
import { PlayerCreationComponent } from './Player/player-creation.component';
import { MatchCreationComponent } from './Match/match-creation.component';
import { MatchTypeManagementComponent } from './MatchType/match-type-management.component';
import { MatchTypeService } from './MatchType/match-type.service';
import { LocationManagementComponent } from './Location/location-management.component';
import { LocationService } from './Location/location.service';
import { AlmaMaterManagementComponent } from './AlmaMater/alma-mater-management.component';
import { AlmaMaterService } from './AlmaMater/alma-mater.service';
import { TournamentCreationComponent } from './Tournament/tournament-creation.component';
import { TournamentService } from './Tournament/tournament.service';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  providers: [
    MatchService,
    PlayerService,
    RivalService,
    MatchTypeService,
    LocationService,
    AlmaMaterService,
    TournamentService,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ColorPickerModule,
    ReactiveFormsModule,
    DragulaModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    PlayerSelectionComponent,
    PlayerDetailComponent,
    MatchSelectionComponent,
    PlayerCreationComponent,
    MatchCreationComponent,
    MatchTypeManagementComponent,
    LocationManagementComponent,
    AlmaMaterManagementComponent,
    TournamentCreationComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
