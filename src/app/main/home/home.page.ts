import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import _ from 'lodash';
import { LoadingController } from '@ionic/angular';
import { LoadingService } from 'src/app/shared/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items = ['a','b','c']
  constructor(
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    // this.fetch();
  }

  ionViewDidEnter() {
    // this.fetch();
  }

  onEdit(domainData) {
    const navigationExtras: NavigationExtras = {
      state: { tempData: domainData },
    };
    this.router.navigate(['tabs/contact'], navigationExtras);
  }


  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
