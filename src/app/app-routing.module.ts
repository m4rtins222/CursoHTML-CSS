import {ModuleWithProviders} from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProdutosComponent} from './produtos/produtos.component';
import {ContatoComponent} from './contato/contato.component';

const routes: Routes = [
  {path: 'produtos', component: ProdutosComponent},
  {path: 'contato', component: ContatoComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
