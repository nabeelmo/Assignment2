import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './pages/input/input.component';
import { OutputComponent } from './pages/output/output.component';

const routes: Routes = [
  { path: '', redirectTo: '/input', pathMatch: 'full' },
  { path: 'input', component: InputComponent },
  { path: 'output', component: OutputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
