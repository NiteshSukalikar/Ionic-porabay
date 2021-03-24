import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
        import('../home/home.module').then(
          (m) => m.HomePageModule
        ),
      },
      {
        path: 'search',
        loadChildren: () =>
        import('../search/search.module').then(
          (m) => m.SearchPageModule
        ),
      },
      {
        path: 'profile',
        loadChildren: () =>
        import('../profile/profile.module').then(
          (m) => m.ProfilePageModule
        ),
      },
      {
        path: 'settings',
        loadChildren: () =>
        import('../settings/settings.module').then(
          (m) => m.SettingsPageModule
        ),
      },
      {
        path: 'post',
        loadChildren: () =>
        import('../post/post.module').then(
          (m) => m.PostPageModule
        ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
