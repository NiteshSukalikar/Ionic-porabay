import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.html",
  styleUrls: ["../login/login.page.scss", "./sign-up.scss"],
})
export class SignUpPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    this.router.navigateByUrl("login");
  }
}
