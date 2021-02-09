import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { LoadingService } from "../shared/loader.service";
import { DomainDataService } from "./domain-data.service";
import { DomainData } from "./domainData.model";
import _ from "lodash";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  domainDetails: DomainData[] = [];
  createdData: DomainData;
  EditedData: DomainData;
  tempDomainDetails: DomainData;
  constructor(
    private domainData: DomainDataService,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.fetch();
  }

  ionViewDidEnter() {
    this.fetch();
  }

   fetch() {
    this.presentLoading();
     this.domainData.fetchDomainData().subscribe((domainData: any) => {
      this.domainDetails = domainData;
    });
   
  }

  deleteItem(index) {
    this.loadingService.present({
      message: "Deleting",
      duration: 2000,
    });
    this.domainData.DeleteDomainData(index).subscribe(
      (domainData) => {
        if (domainData == true) {
          this.domainDetails = this.domainDetails.filter(
            (item: any) => item.domianID !== index
          );
        }
        this.loadingService.dismiss();
      },
      (error) => {
        alert("Something went wrong");
        this.loadingService.dismiss();
      }
    );
  }

  onEdit(domainData) {
    let navigationExtras: NavigationExtras = {
      state: { tempData: domainData },
    };
    this.router.navigate(["tabs/contact"], navigationExtras);
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
