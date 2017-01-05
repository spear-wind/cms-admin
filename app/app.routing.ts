import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { HomeComponent } from './home/index';
import { ManageUsersComponent } from './manage-users/index';
import { AllContentComponent } from './manage-content/index';
import { AllPagesComponent } from './manage-pages/index';
import { AllMediaComponent } from './manage-media/index';
import { AllFormsComponent } from './manage-forms/index';
import { AllPostsComponent } from './manage-blog/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'users/all', component: ManageUsersComponent, canActivate: [AuthGuard] },
    { path: 'content/all', component: AllContentComponent, canActivate: [AuthGuard] },
    { path: 'pages/all', component: AllPagesComponent, canActivate: [AuthGuard] },
    { path: 'media/all', component: AllMediaComponent, canActivate: [AuthGuard] },
    { path: 'forms/all', component: AllFormsComponent, canActivate: [AuthGuard] },
    { path: 'posts/all', component: AllPostsComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
