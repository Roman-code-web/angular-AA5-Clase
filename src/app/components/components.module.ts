import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CardsComponent } from './body/cards/cards.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    BodyComponent,
    CardsComponent 
  ]
})
export class ComponentsModule { }
