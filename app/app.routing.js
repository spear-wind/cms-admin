"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./login/index');
var index_2 = require('./home/index');
var index_3 = require('./manage-users/index');
var index_4 = require('./manage-content/index');
var index_5 = require('./manage-pages/index');
var index_6 = require('./manage-media/index');
var index_7 = require('./manage-forms/index');
var index_8 = require('./manage-blog/index');
var index_9 = require('./_guards/index');
var appRoutes = [
    { path: 'login', component: index_1.LoginComponent },
    { path: 'users/all', component: index_3.ManageUsersComponent, canActivate: [index_9.AuthGuard] },
    { path: 'content/all', component: index_4.AllContentComponent, canActivate: [index_9.AuthGuard] },
    { path: 'pages/all', component: index_5.AllPagesComponent, canActivate: [index_9.AuthGuard] },
    { path: 'media/all', component: index_6.AllMediaComponent, canActivate: [index_9.AuthGuard] },
    { path: 'forms/all', component: index_7.AllFormsComponent, canActivate: [index_9.AuthGuard] },
    { path: 'posts/all', component: index_8.AllPostsComponent, canActivate: [index_9.AuthGuard] },
    { path: '', component: index_2.HomeComponent, canActivate: [index_9.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map