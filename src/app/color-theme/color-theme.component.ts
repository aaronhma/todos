import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// <!-- COMPONENT USE ONLY --> //
import { ColorThemeOpenComponent } from '../color-theme-open/color-theme-open.component';

@Component({
  selector: 'app-color-theme',
  templateUrl: './color-theme.component.html',
  styleUrls: ['./color-theme.component.scss']
})
export class ColorThemeComponent implements OnInit {
  @Output() themeColorChange = new EventEmitter<string>();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ColorThemeOpenComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
