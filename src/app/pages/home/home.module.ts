import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardItemModule } from 'src/app/components/card-item/card-item.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardItemModule
  ]
})
export class HomeModule { }
