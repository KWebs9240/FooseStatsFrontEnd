import { Component } from '@angular/core'

@Component ({
    styleUrls: [ './app.component.css' ],
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/players">Players</a>
        <a routerLink="/matches">Matches</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    selector: 'my-app'
})
export class AppComponent {
    title = 'FooseBall Stat Tracker';
}