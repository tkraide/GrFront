import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './@shared/services/guard/guard.service';
import { ContatoModule } from './pages/contato/contato.module';
import { HomeModule } from './pages/home/home.module';
import { MainComponent } from './pages/main/main.component';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { ProcessoModule } from './pages/processo/processo.module';
import { ServicosModule } from './pages/servicos/servicos.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => HomeModule,
  },
  {
    path: 'home',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => HomeModule,
  },
  {
    path: 'portfolio',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => PortfolioModule,
  },
  {
    path: 'contato',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => ContatoModule,
  },
  {
    path: 'processo',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => ProcessoModule,
  },
  {
    path: 'servicos',
    component: MainComponent,
    canActivateChild: [GuardService],
    runGuardsAndResolvers: 'always',
    loadChildren: () => ServicosModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
