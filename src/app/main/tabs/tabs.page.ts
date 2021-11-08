import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {

  public pages = [
    {
      title: 'Home',
      url: '/tabs/home',
      icon: 'person',
    },
    {
      title: 'Profile',
      url: '/tabs/profile',
      icon: 'person',
    },
    {
      title: 'Settings',
      url: '/tabs/settings',
      icon: 'person',
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      this.pages.map((p) => {
        // tslint:disable-next-line:no-string-literal
        return (p['active'] = event.url === p.url);
      });
    });
  }


}
