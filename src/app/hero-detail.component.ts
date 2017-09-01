import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from './hero.service';
import { Hero } from './hero';

import 'rxjs/add/operator/switchMap';

@Component({
    styleUrls: [ './hero-detail.component.css' ],
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        private heroservice: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroservice.getHero(+params['id']))
            .subscribe(hero => this.hero = hero)
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroservice.update(this.hero)
            .then(() => this.goBack());
    }
}