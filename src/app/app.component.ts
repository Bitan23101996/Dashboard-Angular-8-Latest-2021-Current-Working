import { Component } from "@angular/core";
import { BroadcastService } from "./core/services/broadcast.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "dashboard";
  isMenuVisible: boolean = true;
  
  constructor(private _broadcastService: BroadcastService) {
    this._broadcastService.getMenuVisiblity().subscribe((returnedValue) => {
      this.isMenuVisible = returnedValue;
    });
  }
  

}
