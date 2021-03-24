import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./pages/sign-up/sign-up.module').then(
        (m) => m.SignUpModule
      ),
  },
  // {
  //   path: 'sliders', loadChildren: () =>
  //     import('./pages/post/post.module').then(
  //       (m) => m.PostPageModule
  //     ),
  // },
  {
    path: 'tabs', loadChildren: () =>
      import('./pages/tabs/tabs.module').then(
        (m) => m.TabsPageModule
      ),
  },
  {
    path: 'category',
    loadChildren: () =>
    import('./pages/category/category.module').then(
      (m) => m.CategoryModule
    ),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
