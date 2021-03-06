System.register(["@angular/core", "@angular/http", "@angular/platform-browser", "./app.component", "./familymembers/members.component", "./senthilfamily/senthilfamily.component", "./mythilifamily/mythilifamily.component", "./ilangofamily/ilangofamily.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, platform_browser_1, app_component_1, members_component_1, senthilfamily_component_1, mythilifamily_component_1, ilangofamily_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (members_component_1_1) {
                members_component_1 = members_component_1_1;
            },
            function (senthilfamily_component_1_1) {
                senthilfamily_component_1 = senthilfamily_component_1_1;
            },
            function (mythilifamily_component_1_1) {
                mythilifamily_component_1 = mythilifamily_component_1_1;
            },
            function (ilangofamily_component_1_1) {
                ilangofamily_component_1 = ilangofamily_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        //modules
                        imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
                        // directives, components, and pipes
                        declarations: [
                            app_component_1.AppComponent,
                            members_component_1.FamilyMembersComponent,
                            senthilfamily_component_1.SenthilFamilyMembersComponent,
                            mythilifamily_component_1.MythiliFamilyMembersComponent,
                            ilangofamily_component_1.IlangoFamilyMembersComponent
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map