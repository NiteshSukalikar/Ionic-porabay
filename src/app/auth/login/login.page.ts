import { MenuController } from "@ionic/angular";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { ToasterService } from "src/app/shared/toaster.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private toast: ToasterService,
  ) {}

  ngOnInit() {
   this.initForm()
    //this.menuCtrl.enable(false);
  }

  initForm(){
    this.credentials = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit(){
    console.log(this.credentials.value);
    this.router.navigate(["tabs"]);
    this.toast.showToast('User Sucessfully login');
    
  }

  // ngOnDestroy() {
  //   this.menuCtrl.enable(true);
  // }

  signup() {
    this.router.navigateByUrl("sign-up");
  }

}
