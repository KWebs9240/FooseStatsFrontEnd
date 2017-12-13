import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';

import { AlmaMater } from './alma-mater';
import { AlmaMaterService } from './alma-mater.service';

@Component({
    selector: 'alma-mater-management',
    templateUrl: './alma-mater-management.component.html'
})
export class AlmaMaterManagementComponent implements OnInit{
    allAlmaMaters: AlmaMater[] = [];

    constructor(private almaMaterService: AlmaMaterService) {}

    ngOnInit(): void {
        this.almaMaterService.getAlmaMaters()
            .then (result => {
                this.allAlmaMaters = result
            });
    }

    addBlankAlmaMater(): void {
        this.allAlmaMaters.push(new AlmaMater());
    }

    saveAllAlmaMaters(): void {
        this.allAlmaMaters.forEach( almaMater => {
            this.almaMaterService.saveAlmaMater(almaMater)
        });
    }

    removeAlmaMater(delAlmaMaterId: string): void {
        var delAlmaMater = this.allAlmaMaters.find(x => x.almaMaterId === delAlmaMaterId);
        var delIndex = this.allAlmaMaters.indexOf(delAlmaMater);
        this.allAlmaMaters.splice(delIndex, 1);

        this.almaMaterService.deleteAlmaMater(delAlmaMater);
    }
}