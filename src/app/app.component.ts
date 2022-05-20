import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[];

  scrollableItems: MenuItem[];

  activeItem: MenuItem;

  activeItem2: MenuItem;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar', routerLink: 'calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil', routerLink: 'edit' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file', routerLink: 'documentation' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog', routerLink: 'setting' }
    ];

    this.scrollableItems = Array.from({ length: 50 }, (_, i) => ({ label: `Tab ${i + 1}` }));

    this.activeItem = this.items[0];

    this.activeItem2 = this.scrollableItems[0];
  }
}
