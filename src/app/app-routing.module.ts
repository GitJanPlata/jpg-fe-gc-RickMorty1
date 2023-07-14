import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'cards', component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }