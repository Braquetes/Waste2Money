import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './client/ayuda/ayuda.component';
import { HistorialComponent } from './client/historial/historial.component';
import { MainComponent } from './client/main/main.component';
import { PerfilComponent } from './client/perfil/perfil.component';
import { CookiesGuard } from './guards/cookies.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },{
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [CookiesGuard]
  },{
    path: 'ayuda',
    component: AyudaComponent,
    canActivate: [CookiesGuard]
  },{
    path: 'historial',
    component: HistorialComponent,
    canActivate: [CookiesGuard]
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [CookiesGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
