import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [  
    { path: "", component: HeaderComponent },
    { path: "about", component: AboutComponent }




];
