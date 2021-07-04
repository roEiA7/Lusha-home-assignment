import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'my-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem = {};

  constructor(private location: Location) {
    this.items = [
      { label: 'List', icon: 'pi pi-fw pi-users', routerLink: '/users/list', },
      { label: 'Add', icon: 'pi pi-fw pi-user-plus', routerLink: '/users/form/create' },
    ]
  }

  ngOnInit(): void {
    this.activeItem = this.getActiveItem(this.items);
  }

  isActiveRoute(url: string): boolean {
    return this.location.isCurrentPathEqualTo(url);
  }

  getActiveItem(items: MenuItem[]): MenuItem {
    for (const item of items) {
      if (this.isActiveRoute(item.routerLink)) {
        return item;
      }
    }
    return {};
  }

}
