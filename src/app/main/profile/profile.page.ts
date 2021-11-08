import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToasterService } from "src/app/shared/toaster.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  onlyDataIsVisible: boolean;
  constructor(private router: Router,private toast:ToasterService) {}

  ngOnInit() {
    this.onlyDataIsVisible = true;
  }

  logout() {
    this.router.navigateByUrl("/login");
    this.toast.showToast('User logout Sucessfully');
  }

  viewDataOnly() {
    this.onlyDataIsVisible = !this.onlyDataIsVisible;
  }

  settings() {
    this.router.navigateByUrl("/settings");
  }
}
