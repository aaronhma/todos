import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatIconModule, MatButtonModule, MatCardModule, MatDialogModule } from '@angular/material';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { ExamplesComponent } from './examples/examples.component';
import { HowtoComponent } from './howto/howto.component';
import { UpdateComponent } from './update/update.component';
import { ColorThemeComponent } from './color-theme/color-theme.component';
import { ColorThemeOpenComponent } from './color-theme-open/color-theme-open.component';

export const router: Routes = [
  { path: '', redirectTo: 'howto', pathMatch: 'full' },
  { path: 'howto', component: HowtoComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: 'howto/update', component: UpdateComponent },
  { path: '**', redirectTo: 'howto' }
];

@NgModule({
  declarations: [
    AppComponent,
    ExamplesComponent,
    HowtoComponent,
    UpdateComponent,
    ColorThemeComponent,
    ColorThemeOpenComponent
  ],
  entryComponents: [
    ColorThemeOpenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    RouterModule.forRoot(router, { preloadingStrategy: PreloadAllModules })
  ],
  bootstrap: [ AppComponent ],
  providers: [],
  exports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class AppModule { }
