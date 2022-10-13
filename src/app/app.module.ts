import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ContadorComponent } from './contador/contador/contador.component';
import { heroesModule } from './heroes/heroes.module';

// import { HeroesComponent } from './heroes/heroe/heroe.component';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    heroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
