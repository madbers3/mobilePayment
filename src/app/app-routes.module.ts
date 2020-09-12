import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './mobile-replenish/main/main.component';
import { environment } from '../environments/environment';
import { OperatorComponent } from './mobile-replenish/operator/operator/operator.component';

const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'operator/:id', component: OperatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: environment.enableTracing})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
