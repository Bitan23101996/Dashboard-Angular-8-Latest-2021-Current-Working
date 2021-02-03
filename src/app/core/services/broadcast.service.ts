import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BroadcastService {
  private isMenuVisible = new Subject<any>();

  constructor() {}

  setMenuVisiblity(isVisible: boolean) {
    this.isMenuVisible.next(isVisible);
  }

  getMenuVisiblity(): Observable<any> {
    return this.isMenuVisible.asObservable();
  }
}
