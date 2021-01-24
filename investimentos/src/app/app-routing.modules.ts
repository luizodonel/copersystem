import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestimentosComponent } from './investimentos/investimentos.component';
import { ResgateComponent } from './resgate/resgate.component';




const routes: Routes = [
    { path: '', component: InvestimentosComponent },
    { path: 'resgate', component: ResgateComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);