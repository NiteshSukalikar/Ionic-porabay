import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToasterService } from "src/app/shared/toaster.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.html",
  styleUrls: ["./sign-up.scss"],
})
export class SignUpPage implements OnInit {
  registrationForm: FormGroup;

  constructor(private router: Router, private toast: ToasterService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.router.navigateByUrl("login");
    this.toast.showToast("User Sucessfully Created");
  }

  login() {
    this.router.navigateByUrl("login");
  }
}
