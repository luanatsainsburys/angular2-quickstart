import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroService }  from './hero.service';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

// import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [HeroService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
