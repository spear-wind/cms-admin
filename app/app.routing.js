"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./login/index");
var index_2 = require("./register/index");
var index_3 = require("./home/index");
var index_4 = require("./manage-users/index");
var index_5 = require("./manage-content/index");
var index_6 = require("./manage-pages/index");
var index_7 = require("./manage-media/index");
var index_8 = require("./manage-forms/index");
var index_9 = require("./manage-blog/index");
var index_10 = require("./_guards/index");
var appRoutes = [
    { path: 'login', component: index_1.LoginComponent },
    { path: 'register', component: index_2.RegisterComponent },
    { path: 'users/all', component: index_4.ManageUsersComponent, canActivate: [index_10.AuthGuard] },
    { path: 'content/all', component: index_5.AllContentComponent, canActivate: [index_10.AuthGuard] },
    { path: 'pages/all', component: index_6.AllPagesComponent, canActivate: [index_10.AuthGuard] },
    { path: 'media/all', component: index_7.AllMediaComponent, canActivate: [index_10.AuthGuard] },
    { path: 'forms/all', component: index_8.AllFormsComponent, canActivate: [index_10.AuthGuard] },
    { path: 'posts/all', component: index_9.AllPostsComponent, canActivate: [index_10.AuthGuard] },
    { path: '', component: index_3.HomeComponent, canActivate: [index_10.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map