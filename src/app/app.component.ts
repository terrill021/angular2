import { Component, Input, OnInit } from '@angular/core';
import {Hero} from './Hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {

  // properties
  title = 'tour of heroes';
  heroes: Hero [];
  selectedHero: Hero;
  // Constructor
  constructor(private heroService: HeroService) {
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

}
