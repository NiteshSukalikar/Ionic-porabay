import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() link: any;
  constructor(private router: Router) {}

  ngOnInit() {}

  onMenuChange(data) {
    this.router.navigate(['/' + data.url]);
  }
}
