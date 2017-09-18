import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import {Hero} from './Hero';

@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id: Hero['id']): Promise<Hero> {
        return this.getHeroes().then
        (heroes => heroes.find(hero=> hero.id === id))
    }
}
