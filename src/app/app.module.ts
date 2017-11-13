import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatIconModule } from '@angular/material';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { ExamplesComponent } from './examples/examples.component';
import { HowtoComponent } from './howto/howto.component';
import { UpdateComponent } from './update/update.component';

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
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forRoot(router, { preloadingStrategy: PreloadAllModules })
  ],
  bootstrap: [AppComponent],
  exports: [
    MatInputModule,
    MatIconModule
  ]
})
export class AppModule { }
