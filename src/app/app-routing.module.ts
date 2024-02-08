import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { NotFoundErrorComponent } from './pages/not-found-error/not-found-error.component';

const routes: Routes = [{
  path: '', component: HomeComponent
},
{
  path: 'character/:id', component: CharacterDetailsComponent
},
{
  path: '**', pathMatch: 'full',
  component: NotFoundErrorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
