import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from './views/container/container.component';
import { CharacterComponent } from './views/character/character.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ContainerComponent, CharacterComponent],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
