import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { HomePageModule } from '../home/home.module';
import { AboutPageModule } from '../about/about.module';
import { ContactPageModule } from '../contact/contact.module';
import { MenuItemModule } from 'src/app/components/menu-item/menu-item.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    MenuItemModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
