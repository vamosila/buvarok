/*
* File: app.routes.ts
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: SZOFT II-N
* Date: 2026-03-19
* GitHub: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiverComponent } from './diver/diver.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'diver', component: DiverComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
