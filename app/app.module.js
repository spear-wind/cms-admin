"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// used to create fake backend
var index_1 = require('./_helpers/index');
var testing_1 = require('@angular/http/testing');
var http_2 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var index_2 = require('./widgets/sidebar/index');
var index_3 = require('./widgets/topnav/index');
var index_4 = require('./widgets/headernav/index');
var index_5 = require('./_guards/index');
var index_6 = require('./_services/index');
var index_7 = require('./login/index');
var index_8 = require('./home/index');
var index_9 = require('./manage-users/index');
var index_10 = require('./manage-content/index');
var index_11 = require('./manage-pages/index');
var index_12 = require('./manage-media/index');
var index_13 = require('./manage-forms/index');
var index_14 = require('./manage-blog/index');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                index_7.LoginComponent,
                index_8.HomeComponent,
                index_9.ManageUsersComponent,
                index_10.AllContentComponent,
                index_11.AllPagesComponent,
                index_12.AllMediaComponent,
                index_13.AllFormsComponent,
                index_14.AllPostsComponent,
                index_2.SidebarComponent,
                index_3.TopNavComponent,
                index_4.HeaderNavComponent
            ],
            providers: [
                index_5.AuthGuard,
                index_6.AuthenticationService,
                index_6.UserService,
                // providers used to create fake backend
                index_1.fakeBackendProvider,
                testing_1.MockBackend,
                http_2.BaseRequestOptions
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map