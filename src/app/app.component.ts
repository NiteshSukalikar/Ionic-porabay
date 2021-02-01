import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router, RouterEvent, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  public pages = [
    {
      title: "Login",
      url: "/login",
      icon: "log-in",
    },
    {
      title: "SignUp",
      url: "/sign-up",
      icon: "person",
    },
    {
      title: "Splash Screen",
      url: "/sliders",
      icon: "body",
    },
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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.pages.map((p) => {
          return (p["active"] = event.url === p.url);
        });
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
