import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "",
        redirectTo: "/tabs/home",
        pathMatch: "full",
      },
      {
        path: "home",
        loadChildren: "../home/home.module#HomePageModule",
      },
      {
        path: "about",
        loadChildren: "../about/about.module#AboutPageModule",
      },
      {
        path: "contact",
        loadChildren: "../contact/contact.module#ContactPageModule",
      },
      {
        path: "settings",
        loadChildren: "../settings/settings.module#SettingsPageModule",
      },

      {
        path: "post",
        loadChildren: "../post/post.module#PostPageModule",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
