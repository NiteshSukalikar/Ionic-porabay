import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlidersPage } from "./sliders";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

const routes: Routes = [
  {
    path: "",
    component: SlidersPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SlidersPage],
})
export class SlidersModule {}
