import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-theme-open',
  templateUrl: './color-theme-open.component.html',
  styleUrls: ['./color-theme-open.component.scss']
})
export class ColorThemeOpenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeTheme(color: string): void {
    /**
     * Start Typescipt Version
     * this.themeColorChange.emit(color);
     * End Typescript Version
     */
    document.body.style.backgroundColor = color;
  }
}
