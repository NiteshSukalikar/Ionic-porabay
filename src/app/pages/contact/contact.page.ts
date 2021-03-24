import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { Subject } from "rxjs";
import { DomainDataService } from "../home/domain-data.service";
import { DomainData } from "../home/domainData.model";

@Component({
  selector: "app-contact",
  templateUrl: "contact.page.html",
  styleUrls: ["contact.page.scss"],
})
export class ContactPage implements OnInit {
  Form: FormGroup;
  tempDetails: DomainData;
  isEditing: boolean = false;

  constructor(
    private domainDataService: DomainDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
     this.initForm();
    // this.route.queryParams.subscribe((params) => {
    //   if (this.router.getCurrentNavigation().extras.state) {
    //     this.tempDetails = this.router.getCurrentNavigation().extras.state.tempData;
    //     this.Form.patchValue({
    //       title: this.tempDetails.title,
    //       desciption: this.tempDetails.desciption,
    //     });
    //     this.isEditing = true;
    //   }
    // });
  }

  ionViewDidEnter() {
    console.log("contact is enter");
  }

  initForm() {
    this.Form = new FormGroup({
      title: new FormControl(null, Validators.required),
      desciption: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log("Working");
    
    // if (this.isEditing == true) {
    //   this.domainDataService
    //     .updateDomainData(this.tempDetails.domianID, this.Form.value)
    //     .subscribe((status) => {
    //       console.log(status);
    //     });

    //   this.isEditing = false;
    // } else {
    //   this.domainDataService
    //     .addDomainData(this.Form.value)
    //     .subscribe((data: DomainData) => {
    //       console.log(data);
    //     });
    // }
    // this.router.navigate(["tabs"]);
    // this.Form.reset();
  }
}
