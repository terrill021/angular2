import { Component, Input, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import { HeroService } from '../hero.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})

export class HeroesComponent implements OnInit {

  // properties
  title = 'tour of heroes';
  heroes: Hero [];
  selectedHero: Hero;
  // Constructor
  constructor(private router: Router, private heroService: HeroService) {

  }

  // Life cicle
  ngOnInit(): void {
    this.getHeroes();
  }

  // Methods
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes =>
      this.heroes = heroes
    );
  }

  goToDetail(): void {
    //
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
