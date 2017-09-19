import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

import { ChartsModule } from 'ng2-charts';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';

import { PlayerSelectionComponent } from './Player/player-selection.component';
import { PlayerDetailComponent } from './Player/PlayerDetail/player-detail.component';
import { PlayerService } from './Player/player.service';
import { MatchSelectionComponent } from './Match/match-selection.component';
import { MatchService } from './Match/match.service';
import { PlayerCreationComponent } from './Player/player-creation.component';
import { MatchCreationComponent } from './Match/match-creation.component';
import { MatchTypeManagementComponent } from './MatchType/match-type-management.component';
import { MatchTypeService } from './MatchType/match-type.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  providers: [
    MatchService,
    PlayerService,
    MatchTypeService,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ChartsModule,
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
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
