import { MenuController } from "@ionic/angular";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { ToasterService } from "src/app/shared/toaster.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit, OnDestroy {
  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private toast: ToasterService
  ) {}

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  ngOnDestroy() {
    this.menuCtrl.enable(true);
  }

  signup() {
    this.router.navigateByUrl("sign-up");
  }

  login() {
    this.router.navigate(["tabs"]);
    this.toast.showToast('User Sucessfully login');
  }
}
