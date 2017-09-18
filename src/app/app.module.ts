import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app/app.component';
import { HeroesComponent } from './Heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import {RouterModule} from '@angular/router';
import { DashBoardComponentComponent } from './dash-board-component/dash-board-component.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';

@NgModule({

  // @Pipe/@Directive/@Component
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashBoardComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
