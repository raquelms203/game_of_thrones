import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HttpClientModule } from  '@angular/common/http';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { NotFoundErrorComponent } from './pages/not-found-error/not-found-error.component';
import { GoBackArrowComponent } from './components/go-back-arrow/go-back-arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    CardItemComponent,
    CardListComponent,
    HomeComponent,
    CharacterDetailsComponent,
    NotFoundErrorComponent,
    GoBackArrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
