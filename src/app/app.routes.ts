import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page'
import { NotFound } from './not-found/not-found';
import { UserProfile } from "./user-profile/user-profile";
// import { AdminPage } from './about-page/admin-page.component';
export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        // redirectTo: '/home',
    },
    {
        path: 'home',
        component: HomePage,
    },
    //   {
    //     path: 'admin',
    //     component: AdminPage,
    //   },
    {
        path: 'user/:id',
        component: UserProfile
    },
    {
        path: '**',
        component: NotFound
    }
];