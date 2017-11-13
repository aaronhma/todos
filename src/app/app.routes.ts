import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { HowtoComponent } from './howto/howto.component';
import { ExamplesComponent } from './examples/examples.component';
import { UpdateComponent } from './update/update.component';

export const router: Routes = [
    { path: '', redirectTo: 'howto', pathMatch: 'full' },
    { path: 'howto', component: HowtoComponent },
    { path: 'examples', component: ExamplesComponent },
    { path: 'howto/update', component: UpdateComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
