import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
})
export class TabsPage implements OnInit {
  
  public pages = [
    {
      title: "Contact",
      url: "/tabs/contact",
      icon: "person",
    },
    {
      title: "About",
      url: "/tabs/about",
      icon: "information-circle",
    },
    {
      title: "Home",
      url: "/tabs/home",
      icon: "map",
    },
  ];
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      this.pages.map((p) => {
        return (p["active"] = event.url === p.url);
      });
    });
  }


}
