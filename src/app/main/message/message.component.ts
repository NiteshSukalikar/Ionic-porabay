import { Component, OnInit } from "@angular/core";
import { ToasterService } from "src/app/shared/toaster.service";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"],
})
export class MessageComponent implements OnInit {
  constructor(private toaster: ToasterService) {}

  ngOnInit() {}

  viewAllMessage() {
    this.toaster.showToast("All Message has been Read");
  }
}
