import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {

  @ViewChild('navHighlight') navHighlight!: ElementRef;

  activeNavItem!: HTMLElement | null;
  prevActiveNavItem!: HTMLElement | null;

  constructor() { }

  activeTab: string = 'home';
darkMode: boolean = false;

changeTab(tab: string) {
  this.activeTab = tab;
  // Aquí puedes agregar lógica adicional al cambiar de pestaña
}

toggleDarkMode() {
  this.darkMode = !this.darkMode;
  const nav = document.querySelector('nav');
  if (nav) {
    nav.classList.toggle('dark-mode');
  }

}

  // Aquí puedes agregar lógica adicional al cambiar el modo oscuro
  ngOnInit() {
    this.activeNavItem = document.querySelector('.nav-item.active');
  }

  onItemClick(item: HTMLElement): void {
    this.prevActiveNavItem = this.activeNavItem;
    this.activeNavItem = item;
    this.toggleActiveNavItem();
  }

  toggleActiveNavItem(): void {
    if (this.prevActiveNavItem) {
      this.prevActiveNavItem.classList.remove('active');
    }
    if (this.activeNavItem) {
      this.activeNavItem.classList.add('active');
      const prevActiveNavItemPosition = this.prevActiveNavItem?.getBoundingClientRect();
      const activeNavItemPosition = this.activeNavItem.getBoundingClientRect();
      const highlight = this.navHighlight.nativeElement as HTMLElement;
      if (prevActiveNavItemPosition) {
        const translateX = activeNavItemPosition.left - prevActiveNavItemPosition.left;
        highlight.style.transform = `translateX(${translateX}px)`;
      } else {
        highlight.style.transform = 'translateX(0)';
      }
    }
  }
  }
