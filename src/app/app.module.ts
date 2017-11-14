import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

import { NgxChartsModule } from '@swimlane/ngx-charts';
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

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  providers: [
    MatchService,
    PlayerService,
    RivalService,
    MatchTypeService,
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
