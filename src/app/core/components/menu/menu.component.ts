import { Component, OnInit } from '@angular/core';
import { BroadcastService } from '../../services/broadcast.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isMenuVisible: boolean = false;
  menuList: any = [
    {
      isSelect: false,
      createdBy: null,
      createdOn: null,
      maxLevel: 1,
      menuAction: "/dashboard",
      menuIconUrl: "fa fa-tachometer",
      menuId: 1,
      menuLevel: 0,
      menuTitle: "Dashboard",
      modifiedBy: null,
      modifiedOn: null,
      parentMenuId: 0,
      menuLists: null,
    },
    {
      isSelect: false,
      createdBy: null,
      createdOn: null,
      maxLevel: 1,
      menuAction: "/form",
      menuIconUrl: "fa fa-envelope",
      menuId: 2,
      menuLevel: 0,
      menuTitle: "Form",
      modifiedBy: null,
      modifiedOn: null,
      parentMenuId: 0,
      menuLists: null,
    },
    {
      isSelect: false,
      createdBy: null,
      createdOn: null,
      maxLevel: 1,
      menuAction: null,
      menuIconUrl: "fa fa-user-md",
      menuId: 3,
      menuLevel: 0,
      menuTitle: "Chart",
      modifiedBy: null,
      modifiedOn: null,
      parentMenuId: 0,
      menuLists: [
        {
          isSelect: false,
          createdBy: null,
          createdOn: null,
          maxLevel: 1,
          menuAction: "/submenu",
          menuIconUrl: null,
          menuId: 10,
          menuLevel: 1,
          menuLists: null,
          menuTitle: "Submenu 1",
          modifiedBy: null,
          modifiedOn: null,
          parentMenuId: 3,
        },
        {
          isSelect: false,
          createdBy: null,
          createdOn: null,
          maxLevel: 1,
          menuAction: "/submenu2",
          menuIconUrl: null,
          menuId: 11,
          menuLevel: 1,
          menuLists: null,
          menuTitle: "Submenu 2",
          modifiedBy: null,
          modifiedOn: null,
          parentMenuId: 3,
        }
      ],
    },
    {
      isSelect: false,
      createdBy: null,
      createdOn: null,
      maxLevel: 1,
      menuAction: null,
      menuIconUrl: "fa fa-tree",
      menuId: 4,
      menuLevel: 0,
      menuTitle: "UI Elements",
      modifiedBy: null,
      modifiedOn: null,
      parentMenuId: 0,
      menuLists: [
        {
          isSelect: false,
          createdBy: null,
          createdOn: null,
          maxLevel: 1,
          menuAction: "/404",
          menuIconUrl: null,
          menuId: 12,
          menuLevel: 1,
          menuLists: null,
          menuTitle: "Another Submenu",
          modifiedBy: null,
          modifiedOn: null,
          parentMenuId: 4,
        }
      ],
    }
  ];
  constructor(private _broadcastService: BroadcastService) { 
    this._broadcastService.getMenuVisiblity().subscribe((returnedValue) => {
      this.isMenuVisible = returnedValue;
    });
  }


  ngOnInit() {
    
  }

  
  //Click level 1 menu
  toggleMenu(index: number) {
    this.menuList
      .filter((menu, i) => i !== index && menu.isSelect)
      .forEach((menu) => (menu.isSelect = !menu.isSelect));
    // console.log(this.menuList[index].isSelect);

    if (this.menuList[index].menuLists != null) {
      this.menuList[index].isSelect = !this.menuList[index].isSelect;
    }

    this.isMenuVisible = true;
    this._broadcastService.setMenuVisiblity(this.isMenuVisible);
        
  }

  //click level 2 menu
  toggleSubMenu(menuIndex: number, subMenuIndex: number) {
    this.menuList[menuIndex].menuLists
      .filter((submenu, j) => j !== subMenuIndex && submenu.isSelect)
      .forEach((submenu) => (submenu.isSelect = !submenu.isSelect));
    this.menuList[menuIndex].menuLists[subMenuIndex].isSelect = !this.menuList[
      menuIndex
    ].menuLists[subMenuIndex].isSelect;

    for (let menu of this.menuList) {
      if (
        menu.menuId != this.menuList[menuIndex].menuId &&
        menu.menuLists != null
      ) {
        for (let submenu of menu.menuLists) {
          submenu.isSelect = false;
        }
      }
    }
  }

  //Click Level 3 menu
  toggleChildSubMenu(
    menuIndex: number,
    subMenuIndex: number,
    childSubMenuIndex: number
  ) {
    console.log(menuIndex);
    //console.log("ARrray:::::", this.menuList[menuIndex].menuLists[subMenuIndex].menuLists);
    if (this.menuList[menuIndex].menuLists[subMenuIndex].menuLists != null) {
      for (let childSubMenus of this.menuList[menuIndex].menuLists[subMenuIndex]
        .menuLists) {
        childSubMenus.isSelect = false;
      }
      this.menuList[menuIndex].menuLists[subMenuIndex].menuLists.find(
        (childSubMenu) => childSubMenu.menuId == childSubMenuIndex
      ).isSelect = true;
    }
  }

}
