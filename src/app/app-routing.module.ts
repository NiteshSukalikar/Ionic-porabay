import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./auth/sign-up/sign-up.module').then(
        (m) => m.SignUpModule
      ),
  },
  {
    path: 'sliders', loadChildren: () =>
      import('./main/sliders/sliders.module').then(
        (m) => m.SlidersModule
      ),
  },
  {
    path: 'tabs', loadChildren: () =>
      import('./main/tabs/tabs.module').then(
        (m) => m.TabsPageModule
      ),
  },
  {
    path: 'category',
    loadChildren: () =>
    import('./main/category/category.module').then(
      (m) => m.CategoryModule
    ),
  },
  {
    path: 'message',
    loadChildren: () =>
    import('./main/message/message.module').then(
      (m) => m.MessageModule
    ),
  },
  {
    path: 'settings',
    loadChildren: () =>
    import('./main/settings/settings.module').then(
      (m) => m.SettingsPageModule
    ),
  },
  {
    path: '',
    redirectTo: 'sliders',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
