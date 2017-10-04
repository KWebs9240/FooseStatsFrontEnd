import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';

import { MatchType } from './match-type';
import { MatchTypeService } from './match-type.service';

@Component({
    selector: 'match-type-management',
    templateUrl: './match-type-management.component.html'
})
export class MatchTypeManagementComponent implements OnInit{
    allMatchTypes: MatchType[] = [];
    matchTypeDescription: string;

    constructor(private matchTypeService: MatchTypeService) {}

    ngOnInit(): void {
        this.matchTypeService.getMatchTypes()
            .then (result => {
                this.allMatchTypes = result
            });
    }

    addBlankMatchType(): void {
        this.allMatchTypes.push(new MatchType());
    }

    saveAllMatchTypes(): void {
        this.allMatchTypes.forEach( matchType => {
            this.matchTypeService.saveMatchType(matchType)
        });
    }

    removeMatch(delMatchTypeId: string): void {
        var delMatchType = this.allMatchTypes.find(x => x.matchTypeId === delMatchTypeId);
        var delIndex = this.allMatchTypes.indexOf(delMatchType);
        this.allMatchTypes.splice(delIndex, 1);

        this.matchTypeService.deleteMatchType(delMatchType);
    }
}