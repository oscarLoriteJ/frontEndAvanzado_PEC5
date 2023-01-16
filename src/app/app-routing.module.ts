import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewComponent } from './components/new/new.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'new/:id', component: NewComponent },
  { path: '**', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
