import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeParentComponent } from './welcome-parent/welcome-parent.component';

const routes: Routes = [
 {path: "", component: WelcomeParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
