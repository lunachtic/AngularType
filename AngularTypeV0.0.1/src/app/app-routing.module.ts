import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('src/app/home/home.module').then(module => module.HomeModule)},
  {{ path: 'settings', loadChildren: () => import('src/app/settings/settings.module').then(module => module.SettingsModule) },},
  {path: '', loadChildren: () => import('src/app/utils/utils.module').then(module => module.UtilsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
