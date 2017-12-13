import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';

import { Location } from './location';
import { LocationService } from './location.service';

@Component({
    selector: 'location-management',
    templateUrl: './location-management.component.html'
})
export class LocationManagementComponent implements OnInit{
    allLocations: Location[] = [];

    constructor(private locationService: LocationService) {}

    ngOnInit(): void {
        this.locationService.getLocations()
            .then (result => {
                this.allLocations = result
            });
    }

    addBlankLocation(): void {
        this.allLocations.push(new Location());
    }

    saveAllLocations(): void {
        this.allLocations.forEach( location => {
            this.locationService.saveLocation(location)
        });
    }

    removeLocation(delLocationId: string): void {
        var delLocation = this.allLocations.find(x => x.locationId === delLocationId);
        var delIndex = this.allLocations.indexOf(delLocation);
        this.allLocations.splice(delIndex, 1);

        this.locationService.deleteLocation(delLocation);
    }
}