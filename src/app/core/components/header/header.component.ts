import { Component, OnInit } from "@angular/core";
import { BroadcastService } from "../../services/broadcast.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isMenuVisible: boolean = true;

  constructor(private _broadcastService: BroadcastService) {
    this._broadcastService.getMenuVisiblity().subscribe((returnedValue) => {
      this.isMenuVisible = returnedValue;
    });
  }

  ngOnInit() {}

  //Click bar icon to show/hide sidebar menu
  toggleSidebar() {
    this.isMenuVisible = !this.isMenuVisible;
    this._broadcastService.setMenuVisiblity(this.isMenuVisible);   
  }
}
