import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: './security/login/login.module#LoginPageModule' },
  { path: 'sign-up', loadChildren: './security/sign-up/sign-up.module#SignUpModule' },
  { path: 'sliders', loadChildren: './sliders/sliders.module#SlidersModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryModule' },


  {
    path: '',
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then( m => m.PrivacyPageModule)
  },




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}