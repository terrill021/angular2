import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../Hero';
import {HeroService} from '../hero.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

    hero: Hero;

    constructor(private heroesService: HeroService,
                private route: ActivatedRoute,
                private location: Location) {

    }

    ngOnInit(): void {
        this.route.paramMap.switchMap((params: ParamMap) =>
            this.heroesService.getHero( + params.get('id')))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
}
