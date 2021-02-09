import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.html',
  styleUrls: ['./sliders.scss']
})
export class SlidersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigateByUrl('category');
  }

}
