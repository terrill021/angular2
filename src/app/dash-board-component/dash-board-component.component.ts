import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service'
import {Hero} from '../Hero'

@Component({
  selector: 'app-dash-board-component',
  templateUrl: './dash-board-component.component.html',
  styleUrls: ['./dash-board-component.component.css']
})
export class DashBoardComponentComponent implements OnInit {

  private heroes : Array<Hero>
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  private getHeroes(): void{
    this.heroService.getHeroes()
    .then(heroes => {
      this.heroes = heroes.slice(1, 5);
    })
  }

}
