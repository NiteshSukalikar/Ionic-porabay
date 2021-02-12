import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class ToasterService {
  private myToast: any;
  constructor(private toastCtrl: ToastController) {}

  showToast(message) {
    this.myToast = this.toastCtrl
      .create({
        message: message,
        duration: 2000,
        position: 'bottom',
        cssClass:'toaster'
      })
      .then((toastData) => {
        toastData.present();
      });
  }

  HideToast() {
    this.myToast = this.toastCtrl.dismiss();
  }
}
