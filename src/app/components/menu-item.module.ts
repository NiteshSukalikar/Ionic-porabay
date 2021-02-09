import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations:[MenuItemComponent],
  exports:[MenuItemComponent]
})
export class MenuItemModule {}